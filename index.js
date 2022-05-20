window.onload = function () {

    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var alphaBtn = function () {
        buttons = document.getElementById('alphabtn');
        var text = "";
        for (var i = 0; i < alphabets.length; i++) {
            text += `<button id='letters'>${alphabets[i]}</button>`;
        }
        buttons.innerHTML = text;
    }
    alphaBtn();
}