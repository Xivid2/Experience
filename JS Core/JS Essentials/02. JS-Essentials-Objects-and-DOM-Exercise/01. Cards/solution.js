function solve() {
   let imagesTop = document.querySelectorAll("#player1Div > img");
   let imagesBottom = document.querySelectorAll("#player2Div > img");
   let topSpan = document.querySelector("#result > span:first-child");
   let bottomSpan = document.querySelector("#result > span:last-child");

   for (let i = 0; i < imagesTop.length; i++) {
      let left = 0;
      const element = imagesTop[i];
      element.addEventListener("click", () => {
         imagesTop[i].src = "images/whiteCard.jpg";
         left = imagesTop[i].name;
         topSpan.innerHTML = left;
         if ( topSpan.innerHTML > bottomSpan.innerHTML ) {
            console.log('top');
         }
         else {
            console.log('bot');
         }
      })
   }
   for (let i = 0; i < imagesBottom.length; i++) {
      let right = 0;
      const element = imagesBottom[i];
      element.addEventListener("click", () => {
         imagesBottom[i].src = "images/whiteCard.jpg";
         right = imagesBottom[i].name;
         bottomSpan.innerHTML = right;
      })
   }
}