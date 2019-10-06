function toggle() {
   let extraDiv = document.getElementById("extra");
   let currentDiv = document.getElementsByClassName("head");
   let button = document.getElementsByClassName("button")[0];

   if ( !extraDiv.style.display || extraDiv.style.display === "none" ) {
    extraDiv.style.display = "block";
    button.textContent = "Less";
   } else {
    extraDiv.style.display = "none";
    button.textContent = "More";
   }
}