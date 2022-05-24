const categories = {
'Movies' : ['jumanji', 'avatar', 'titanic'], 
'Food' : ['apple', 'orange', 'banana'], 
'Animals' : ['jaguar', 'alligator', 'penguin']}

const hint = {
'jumanji' : ['Survival Comedy', 'The Rock'],
'avatar' : ['Blue', 'Highest grossing film'],
'titanic' : ['Shipwreck', 'Iceberg'],
'apple' : ['Granny Smith', 'Red or green'],
'orange' : ['Citrus', 'Same colour'],
'banana' : ['Monkey', 'Split'],
'jaguar' : ['Cat', 'Fast'],
'alligator' : ['Long snout', 'Carnivore'],
'penguin' : ['Flightless', 'Happy Feet'],
}

var wordList = ["grape", "apple", "orange"]
var answer = ""
var maxIncorrect = 10
var incorrect = 0
var guessed = []
var status = null
var letter = "123"



function randomWord() {
    answer = wordList[Math.floor(Math.random() * wordList.length)]
    console.log("answer")
    console.log(answer)
}

function getHint() {
    if(hint_count < 2){
        let clue = hint[answer][hint_count]
        document.getElementById('clue').innerText = "Clue: " + clue
        hint_count ++
    }
}

function reset() {
    incorrect = 0
    hint_count = 0
    guessed = []
    document.getElementById('clue').innerText = "Clue: "

    randomWord()
    guessWord()
    initial()

}

window.onload = function initial () {

    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var alphaBtn = function () {
        buttons = document.getElementById('alphabtn');
        var text = "";
        for (var i = 0; i < alphabets.length; i++) {
            text += `<button id='letters' class = "button" value = '${alphabets[i]}' onclick="buttonPress(this)"  >${alphabets[i]}</button>`;
        }
        buttons.innerHTML = text;
    }
    
        var catNames = function () {
        cats = document.getElementById('catName')
        var text = ""
        var cat_keys = Object.keys(categories)
        for (const [key, value] of Object.entries(categories)) {
            console.log(key)
            text += `<button id='cat' class = "button" value = '${key}' onclick="" >${key}</button>`
        };
        cats.innerHTML+=text
    }

    catNames()
    alphaBtn();
    randomWord()
    guessWord()
}

function guessWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join(' ')

    console.log(wordStatus)
    console.log(letter)
    document.getElementById('word').innerText = wordStatus
    if (!wordStatus.includes("_")){
        document.getElementById("gameover").innerText = "You Win"
    }
}
function buttonPress(button) {
    var letter = button.value
    button.setAttribute("disabled", "")
    button.setAttribute("class", "disable")
    guessed.push(letter)
    guessWord()
    console.log(letter)
    console.log(incorrect)
    if (!answer.includes(letter) ){
        incorrect += 1
        var image = `image/${incorrect}.jpg`
        if(incorrect <= maxIncorrect){
        document.getElementById("image").setAttribute("src",image)
        }
        if(incorrect == maxIncorrect){
            console.log("if satement")
            document.getElementById("gameover").innerText = `Game Over, answer was ${answer} `
        }

    }
}





