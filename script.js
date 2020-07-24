var css = document.querySelector("textarea");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function changeBackground() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    + ", "
    +color2.value
    + ")";

    css.textContent = "background: " + body.style.background + ";";
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Your CSS code has been copied!");
  }

color1.addEventListener("input", changeBackground)

color2.addEventListener("input", changeBackground)