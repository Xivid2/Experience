function create(words) {
   let contentDiv = document.getElementById('content');
   console.log('contentDiv:', contentDiv)
   for ( let i = 0; i < words.length; i ++ ) {
      let newDiv = document.createElement('div');
      let newParagraph = document.createElement('p');
      newParagraph.textContent = words[i];
      newDiv.appendChild(newParagraph);
      newParagraph.style.display = "none";
      contentDiv.appendChild(newDiv);
      newDiv.addEventListener('click', () => newParagraph.style.display = "block");
   }
}