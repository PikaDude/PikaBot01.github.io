function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
window.onload = function () {
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
    var hereComesDatBoi = ["Discords new _____ feature.", "_____, 10x better in bed than you'll ever be.", "_____@legit.ru", "Did you just assume my _____?", "Introducing the all new _____! The perfect gift for your children!", "Five Nights At _____'s.", "Woody: Uhh.. Buzz? You missed the _____!<br>Buzz: We're not aiming for the _____!", "Ayy. _____", "I have a _____, I have a _____. Ugh! _____!", "How long until someone makes a remix of _____?", "I AM THE KING OF _____!", "WE GOTTA GET THE _____!", "I've been listening to _____'s.", "Hi, my computer has been acting up lately. I think I've downloaded _____.", "Please specify your _____ before continuing.", "Joel, have you been downloading _____ again?", "I choose you, _____!", "Hey you, _____!", "Can I throw this _____ at you?", "I just ate your _____", "You're a _____, Harry.", "A wild _____ appeared! Go, _____!", "I'm sorry, but you've been diagnosed with _____.", "Expand _____.", "These _____ have turned sour!"];
    var datDatDatDatDatDatDatBoi = ["Discord", "Skype", "Obama", "Hilary Clinton", "Donald Trump", "9/11", "Jet Fuel", "Steel Beams", "PPAP", "Exotic Butters", "That idiot who made this crap", "Norton Anti Virus", "MEMEZ.exe", "EXE Files", "Porn Folder", "Credit Card Details", "MIDI Files", "Vinny", "Joel", "Boobs", "Two-frame gif of a woman having a seizure.", "Weed", "Down Smash", "Love", "Baby", "Rick Astley", "Rickroll", "Burrito", "Chopper", "Meme", "10 Hour Loop of Brainpower", "Wizord", "Monkey", "Shia LaBeouf", "Pikachu", "Nintendo Switch", "Child Abuse", "A Crippling Depression", "Casual Bongos", "Dong"];
    document.getElementById("someBS").textContent = "With " + hereComesDatBoi.length + " black cards and " + datDatDatDatDatDatDatBoi.length + " white cards!";
    if (getParameterByName('1') !== null && getParameterByName('2') !== null) {
        document.getElementById('hah').innerHTML = '<button class="cancer otherButton" style="right: 10px;" onclick="regen();">Regenerate</button>';
        document.getElementById('dean').innerHTML = hereComesDatBoi[getParameterByName('1')];
        document.getElementById('thememe').innerHTML = datDatDatDatDatDatDatBoi[getParameterByName('2')];
        if (getParameterByName('3') !== null && (hereComesDatBoi[getParameterByName('1')].match(/_____/g) || []).length !== 1) {
            document.getElementById('poop').style.width = 930;
            document.getElementById('poop').innerHTML = document.getElementById('poop').innerHTML + '<div class="card otherCard"><p class="cardText" style="color: black;">' + datDatDatDatDatDatDatBoi[getParameterByName('3')] + '</p></div>';
            if (getParameterByName('1') == 18) {
                document.getElementById('poop').style.width = 1240;
                document.getElementById('poop').innerHTML = document.getElementById('poop').innerHTML + '<div class="card otherCard"><p class="cardText" style="color: black;">' + datDatDatDatDatDatDatBoi[getParameterByName('2')] + "-" + datDatDatDatDatDatDatBoi[getParameterByName('3')] + '</p></div>';
            }
        }
        if (getParameterByName('4') !== null && (hereComesDatBoi[getParameterByName('1')].match(/_____/g) || []).length > 2) {
            document.getElementById('poop').style.width = 1240;
            document.getElementById('poop').innerHTML = document.getElementById('poop').innerHTML + '<div class="card otherCard"><p class="cardText" style="color: black;">' + datDatDatDatDatDatDatBoi[getParameterByName('4')] + '</p></div>';
        }
        nootNoot = "https://twitter.com/intent/tweet?text=Check%20Out%20This%20Match%20I%20Just%20Got&url=" + window.location.href + "&hashtags=MemesAgainstHumanity";
        document.getElementById('hollaHollaGetDollar').textContent = window.location.href;
        return;
    }
    var thatThing = 0;
    var datBoi = Math.floor((Math.random() * hereComesDatBoi.length) + 0);
    document.getElementById('hollaHollaGetDollar').textContent = "http://pikadude.xyz/projects/MemesAgainstHumanity/callhelp.html?1=" + datBoi;
    thatThing = (hereComesDatBoi[datBoi].match(/_____/g) || []).length;
    var Datboi = Math.floor((Math.random() * datDatDatDatDatDatDatBoi.length) + 0);
    document.getElementById('hollaHollaGetDollar').textContent = document.getElementById('hollaHollaGetDollar').textContent + "&2=" + Datboi;
    document.getElementById('dean').innerHTML = hereComesDatBoi[datBoi];
    document.getElementById('thememe').innerHTML = datDatDatDatDatDatDatBoi[Datboi];
    var dunDunDun = 1;
    if (hereComesDatBoi[datBoi].indexOf("Woody") !== -1) thatThing = 1;
    var wadth = 620;
    if (hereComesDatBoi[datBoi].indexOf("I have a") !== -1) {
        document.getElementById('poop').style.width = "1240";
        var meme = Math.floor((Math.random() * datDatDatDatDatDatDatBoi.length));
        document.getElementById('hollaHollaGetDollar').textContent = document.getElementById('hollaHollaGetDollar').textContent + "&3=" + meme;
        document.getElementById('thememe').innerHTML = document.getElementById('thememe').innerHTML;
        document.getElementById('poop').innerHTML = document.getElementById('poop').innerHTML + '<div class="card otherCard"><p class="cardText" style="color: black;">' + datDatDatDatDatDatDatBoi[meme] + '</p></div><div class="card otherCard"><p class="cardText" style="color: black;">' + document.getElementById('thememe').innerHTML + "-" + datDatDatDatDatDatDatBoi[meme] + '</p></div>';
        return;
    }
    while (dunDunDun !== thatThing) {
        wadth = wadth + 310;
        var dumbThing = dunDunDun + 2;
        Math.floor((Math.random() * datDatDatDatDatDatDatBoi.length) + 0)
        var trump = Math.floor((Math.random() * datDatDatDatDatDatDatBoi.length) + 0);
        document.getElementById('poop').innerHTML = document.getElementById('poop').innerHTML + '<div class="card otherCard"><p class="cardText" style="color: black;">' + datDatDatDatDatDatDatBoi[trump]; + '</p></div>';
        document.getElementById('hollaHollaGetDollar').textContent = document.getElementById('hollaHollaGetDollar').textContent + "&" + dumbThing + "=" + trump;
        document.getElementById('poop').style.width = wadth.toString();
        dunDunDun++;
    }
    nootNoot = "https://twitter.com/intent/tweet?text=Check%20Out%20This%20Match%20I%20Just%20Got&url=" + document.getElementById('hollaHollaGetDollar').textContent + "&hashtags=MemesAgainstHumanity";
}
var nootNoot;

function tweet() {
    window.open(nootNoot, "_blank");
}
function regen() {
    window.location = "http://pikadude.xyz/projects/MemesAgainstHumanity/callhelp.html";
}