
var dataURL = 'https://raw.githubusercontent.com/Chu3an/big5qs/master/big5code.json'

function requestsJson() {
    var myText = document.getElementById("chtext").value;
    var requests = new XMLHttpRequest();
    requests.open("GET", dataURL, true);
    requests.send();
    requests.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Get jsonObj
            var jsonObj = JSON.parse(this.responseText);
            // Loop finding
            var textArray = myText.split("")
            for (var i = 0; i < textArray.length; i++) {
                console.log(jsonObj[textArray[i]])
            }
        }
    };
    document.getElementById("result").style = "display:contents"
}

document.getElementById("chbutn").onclick = function () { requestsJson() };

/** Add "input" enter hot key support */
var input = document.getElementById("chtext");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("chbutn").click();
    }
});