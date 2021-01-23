/** 資料源 */
var dataURL = 'https://chu3an.github.io/big5qs/big5code.json'

const theInput = document.getElementById('theInput');
const theBox = document.getElementById("theBox");
const theResult = document.getElementById("theResult");
var theJson = '';

theInput.addEventListener('input', updateResult);
getJson(dataURL);

function getJson(url) {
    fetch(url).then(
        function (r) { return r.json(); }
    ).then(
        function (j) {
            theJson = j;
        }
    )
}

function updateResult(e) {
    theBox.style = "visibility:unset";
    clearResult();
    const myText = e.srcElement.value;
    var textArray = myText.split("")
    for (var i = 0; i < textArray.length; i++) {
        var table = document.getElementById("theResult");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = textArray[i];
        var cell2 = row.insertCell(1);
        cell2.innerHTML = theJson[textArray[i]];
        //console.log(jsonObj[textArray[i]]);
    }
}

function clearResult() {
    theResult.innerHTML = '<thead id="theHead" class="thead-light"><tr><th>文字</th><th>內碼</th></tr></thead><tbody id="theBody"><tr></tr></tbody>';
}

document.getElementById("theBtn").onclick = function () {
    /** No function temporarily */
};

document.getElementById("theClr").onclick = function () {
    document.getElementById("theBox").style = "visibility:hidden"
    clearResult();
};

/**
theInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("theBtn").click();
    }
});
*/