$(document).ready(function () {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
});
function button1() {
    $('html, body').animate({ scrollTop: $('#home').offset().top }, 'slow');
};
function button2() {
    $('html, body').animate({ scrollTop: $('#aboutme').offset().top }, 'slow');
};
function button3() {
    $('html, body').animate({ scrollTop: $('#projects').offset().top }, 'slow');
};
function button4() {
    $('html, body').animate({ scrollTop: $('#links').offset().top }, 'slow');
};
function aaa() {
    var options = [
    {
        selector: '#home', offset: 200, callback: function (el) {
            document.getElementById('1').style = "font-weight: bold";
            document.getElementById('1lol').classList = "active";
            document.getElementById('2').style = "";
            document.getElementById('2lol').classList = "";
            document.getElementById('3').style = "";
            document.getElementById('3lol').classList = "";
            document.getElementById('4').style = "";
            document.getElementById('4lol').classList = "";
        }
    },
    {
        selector: '#aboutme', offset: 200, callback: function (el) {
            document.getElementById('1').style = "";
            document.getElementById('1lol').classList = "";
            document.getElementById('2').style = "font-weight: bold";
            document.getElementById('2lol').classList = "active";
            document.getElementById('3').style = "";
            document.getElementById('3lol').classList = "";
            document.getElementById('4').style = "";
            document.getElementById('4lol').classList = "";
        }
    },
    {
        selector: '#projects', offset: 200, callback: function (el) {
            document.getElementById('1').style = "";
            document.getElementById('1lol').classList = "";
            document.getElementById('2').style = "";
            document.getElementById('2lol').classList = "";
            document.getElementById('3').style = "font-weight: bold";
            document.getElementById('3lol').classList = "active";
            document.getElementById('4').style = "";
            document.getElementById('4lol').classList = "";
        }
    },
    {
        selector: '#links', offset: 200, callback: function (el) {
            document.getElementById('1').style = "";
            document.getElementById('1lol').classList = "";
            document.getElementById('2').style = "";
            document.getElementById('2lol').classList = "";
            document.getElementById('3').style = "";
            document.getElementById('3lol').classList = "";
            document.getElementById('4').style = "font-weight: bold";
            document.getElementById('4lol').classList = "active";
        }
    }
    ];
    Materialize.scrollFire(options);
    setTimeout(aaa, 100);
}
aaa();
