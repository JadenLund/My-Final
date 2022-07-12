function makeButton(){
var button = document.createElement("button");
button.textContent = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
    alert("did something");
})
}
for(let i = 0; i < 10; i++)
{
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