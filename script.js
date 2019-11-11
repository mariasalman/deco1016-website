// Defining a variable for the red line and making sure it comes up when fields aren't filled in
var redLine = 0; 
showTab(redLine); 

// This helps create previous and next buttons
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    // document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}




document.getElementsByClassName("Submit")[1].addEventListener("click", opennextHTML());


function opennextHTML() {
  window.open(ending.html, "_blank");
  
}



// This function helps to make sure what tab to display
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[redLine].style.display = "none";
  redLine = redLine + n;
// To make sure you can submit once you've gone through every step and are on the last one
  if (redLine >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the red line
  showTab(redLine);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[redLine].getElementsByTagName("input");
  // Setting invalidity and an element as false when not filled in
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  // But if it is true, mark it as finished
  if (valid) {
    document.getElementsByClassName("step")[redLine].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
