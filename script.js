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

function makeButton() {
    var button = document.createElement("button");
    button.textContent = "Do Something";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener("click", function () {
        alert("I love you :>");
    })
    button.style.backgroundColor = randomColorGenerator();
}

for (let i = 0; i <= randomNumberAmount(); i++) {
    makeButton();
}
/*have a randomizer that makes different buttons*/
//Goals
/*Add image borders around the h1 text
Have the h2 ask for the user to click a button 
all buttons are pictures of my pets faces
When the wrong one is clicked
the button states underneath "Wrong button clicked, chose again"
when the right one is clicked it clears everythgin from the page
background goes yellow and says congrats*/