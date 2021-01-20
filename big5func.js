/** Data source url */
var dataURL = 'https://chu3an.github.io/big5qs/big5code.json'

function requestsJson() {
    var myText = document.getElementById("theText").value;
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
                var table = document.getElementById("theResult");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = textArray[i];
                var cell2 = row.insertCell(1);
                cell2.innerHTML = jsonObj[textArray[i]];
                console.log(jsonObj[textArray[i]]);
            }
        }
    };
    document.getElementById("theResult").style = "visibility:unset"
}

/** input onclick event */
document.getElementById("theBtn").onclick = function () { requestsJson() };

/** input enter hot key support */
var input = document.getElementById("theText");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("theBtn").click();
    }
});