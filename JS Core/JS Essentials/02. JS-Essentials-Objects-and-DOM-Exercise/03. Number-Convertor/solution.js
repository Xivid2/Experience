function solve() {
    let selectMenu = document.getElementById("selectMenuTo");
    let optionBinary = document.createElement("option");
    optionBinary.text = "Binary";
    optionBinary.value = "binary";
    let optionHexaDecimal = document.createElement("option");
    optionHexaDecimal.text = "Hexadecimal";
    optionHexaDecimal.value = "hexadecimal";
    selectMenu.appendChild(optionBinary);
    selectMenu.appendChild(optionHexaDecimal);

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function() {
        let decimal = Number(document.getElementById("input").value);
        let option = document.getElementById("selectMenuTo").value;
        let result = '';
        switch ( option ) {
            case "binary":
                result = decimal.toString(2);
            break;
            case "hexadecimal":
                result = decimal.toString(16).toUpperCase();
            break;
        }
        document.getElementById('result').value = result;
    })
}