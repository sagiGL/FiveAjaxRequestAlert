var statusDisplay = document.getElementById("d1");
var httpRequestCount = 0;

function sendAjaxReuquest(number) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            httpRequestCount++;
            console.log(httpRequestCount);
            statusDisplay.innerHTML=  "http response count: " + httpRequestCount;
            if (httpRequestCount === 5){
                alert("recived " + number + "http response");
                window.close();
            }
        }
    };
    xhttp.open("GET", "data/response.txt", true);
    xhttp.send();
}

function sendMultiHttpRequest(number){
    for (var i = 0; i < number; i++){
        sendAjaxReuquest();
    }
    httpRequestCount = 0;
}

sendMultiHttpRequest(5);