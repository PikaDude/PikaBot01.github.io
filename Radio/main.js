var old = "Poop";
var poop = true;
var Isplaying = true;
var memeing = false;
$(document).ready(function () {
    var modal = document.getElementById('popup');
    var btn = document.getElementById("button");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if (!!window.chrome && !!window.chrome.webstore) {
        document.getElementById('chrome').style.visibility = 'hidden';
    }
    var r = Math.floor((Math.random() * 1000000000) + 0);
    document.getElementById('Stream').src = "http://pikabot01.xyz:8000/PikaDude?firefox=" + r;
    window.setInterval(function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://pikabot01.xyz:8000/status-json.xsl', true);
        request.onload = function () {
            poop = true;
            var data = JSON.parse(request.responseText);
            if (old == "Poop") {
                document.getElementById('title').textContent = data.icestats.source.artist + " - " + data.icestats.source.title;
                document.getElementById('wow').textContent = data.icestats.source.artist + " - " + data.icestats.source.title;
            }
            document.getElementById('users').textContent = data.icestats.source.listeners + " Users Listening";
            if (parseInt(data.icestats.source.listeners) == 1) document.getElementById('users').textContent = data.icestats.source.listeners + " User Listening";
            if (old == "Poop") {
                old = data;
            }
            if (old.icestats.source.title == data.icestats.source.title) return;
            old = data;
            window.setTimeout(function () {
                document.getElementById('title').textContent = data.icestats.source.artist + " - " + data.icestats.source.title;
                document.getElementById('wow').textContent = data.icestats.source.artist + " - " + data.icestats.source.title;
                if (typeof InstallTrigger !== 'undefined') {
                    var r = Math.floor((Math.random() * 1000000000) + 0);
                    document.getElementById('Stream').src = "http://pikabot01.xyz:8000/PikaDude?firefox=" + r;
                }
                var options = {
                    body: "Now Playing:\n" + data.icestats.source.title + " by " + data.icestats.source.artist,
                    icon: "pika.png"
                }
                var n = new Notification("PikaDude's Radio", options);
            }, 8000);
        }
        request.onerror = function () {
            if (poop == false) return;
            poop = false;
            Materialize.toast("Failed to GET status.", 10000);
            document.getElementById('title').textContent = "Failed to connect";
            document.getElementById('users').textContent = "Failed to connect";
        }
        request.send();
    }, 1000);
    document.getElementById('Stream').onerror = function () {
        Materialize.toast("Failed to initialize stream.", 0);
    }
});

function pause() {
    if (Isplaying == false || memeing == true) return;
    memeing = true;
    Isplaying = false;
    document.getElementById('Stream').pause();
    window.setTimeout(function () { document.getElementById('Stream').src = "" }, 2000);
    window.setTimeout(function () {
        memeing = false;
    }, 2000);
}

function play() {
    if (Isplaying == true || memeing == true) return;
    memeing = true;
    Isplaying = true;
    var r = Math.floor((Math.random() * 1000000000) + 0);
    document.getElementById('Stream').src = "http://pikabot01.xyz:8000/PikaDude?firefox=" + r;
    window.setTimeout(function () {
        memeing = false;
    }, 2000);
}

function report() {
    console.log(document.forms.item());
}