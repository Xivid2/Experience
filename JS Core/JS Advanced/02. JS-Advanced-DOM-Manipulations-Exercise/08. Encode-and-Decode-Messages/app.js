function encodeAndDecodeMessages() {

    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];
    let encryption = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', () => {
        let message = document.getElementsByTagName('textarea')[0];
        encryption.value = encodeMessage(message.value);
        message.value = "";
    })
    decodeButton.addEventListener('click', () => {
        let message = document.getElementsByTagName('textarea')[1].value;
        let decodedMessage = decodeMessage(message);
        encryption.value = decodedMessage;
    })

    function encodeMessage(message) {
        let newArr = [];
        for ( let i = 0; i < message.length; i ++ ) {
            newArr.push(String.fromCharCode(message[i].charCodeAt(0) + 1));
        }
        return newArr.join("");
    }

    function decodeMessage(message) {
        let newArr = [];
        for ( let i = 0; i < message.length; i ++ ) {
            newArr.push(String.fromCharCode(message[i].charCodeAt(0) - 1));
        }
        return newArr.join("");
    }
}