function solve() {
 
   let sendButton = document.getElementById('send');

   sendButton.addEventListener('click', function () {
       let appendNewElement = document.getElementById('chat_messages');

       let messageDiv = document.getElementsByClassName('message')[1];

       let newMessageDiv = messageDiv.cloneNode(true);

       let textArea = document.getElementById('chat_input');
       let textAreaValue = textArea.value;

       newMessageDiv.textContent = textAreaValue;

       appendNewElement.appendChild(newMessageDiv);
       textArea.value ='';
   })
}