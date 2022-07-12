let hexValue = 0xff;
let maxColorVal = 0xFFFFFF;

function randomColorGenerator() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; //in decimal form atm
    randomNumber = Math.floor(randomNumber); //converts to an int
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6, 0);
    return `#${randomColor.toUpperCase()}`;
}

function randomNumberAmount() {
    let maxValue = 20;
    let randomButtonNumber = Math.floor(Math.random() * maxValue);
    return `${randomButtonNumber}`;
}

function randomMessageAlert() {
    let messages = ["Click Me", "No, Click me", "Me first!", "Press me", ":)"]
    let message = messages[Math.floor(Math.random() * messages.length)];
    return `${message}`;
}
function randomClickMessageAlert() {
    let messages = ["Choose a different button", "Please click a different button", "Oops! Choose a different button", "Wrong button, click again"]
    let message = messages[Math.floor(Math.random() * messages.length)];
    return `${message}`;
}

function makeButton() {
    var button = document.createElement("button");
    button.textContent = randomMessageAlert();

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener("click", function () {
        button.style.display = 'none';
        if (buttonsRemaining < 1) {
            alert("Congrats");
            alert("You clicked all the buttons!")
            alert("You can stop now")
            alert("Please dear God stop")
            alert("I have a wife and kids")
            return;
        }
        alert(randomClickMessageAlert());
        buttonsRemaining--;
    })
    button.style.backgroundColor = randomColorGenerator();
}
var numberOfButtons = randomNumberAmount();
var buttonsRemaining = numberOfButtons;
for (let i = 0; i <= numberOfButtons; i++) {
    makeButton();
}

//if there is only one button left, have it start to move away
