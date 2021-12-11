(function () {

    const button = document.querySelector('#btn')
    const body = document.querySelector("body");
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const hexValue = document.querySelector('#hex-value');

    button.addEventListener("click", generateHex)

    function generateHex() {
        let hex = "#";

        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * hexValues.length)
            hex += hexValues[index]
        }

        hexValue.value = hex;
        body.style.backgroundColor = hex;
    }

    // hexValue.addEventListener("click", copyValueToClipBoard)

    // function copyValueToClipBoard() {
    //     /* Select the text field */
    //     hexValue.select();
    //     hexValue.setSelectionRange(0, 99999); /* For mobile devices */

    //     /* Copy the text inside the text field */
    //     navigator.clipboard.writeText(hexValue.value);
    // }

})()



