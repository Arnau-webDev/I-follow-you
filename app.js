
// Add event listeners
document.addEventListener("mousemove", getPosition);

// Get DOM elements
const fastBtn = document.querySelector("#imFastAsFck");

// Functions

function getPosition(e) {
    // Get mouse position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Get element relative distance to top / left of the page
    let distanceRelativeTop = fastBtn.offsetTop;
    let distanceRelativeLeft = fastBtn.offsetLeft;

    // Get element dimensions
    const elementWidth = fastBtn.clientWidth;
    const elementHeight = fastBtn.clientHeight;

    // Put mouse in the element's center
    let getCenterX = (mouseX - distanceRelativeLeft) - (elementWidth / 2);
    let getCenterY = (mouseY - distanceRelativeTop) - (elementHeight / 2);

    // Translate btn so the mouse can never reach for it
    fastBtn.style.transform = `translate(${getCenterX }px, ${getCenterY}px)`;  
    
    // Test for mouse leaving the body
    const bodyDimensions = document.body.getBoundingClientRect();

    if(mouseX < bodyDimensions.left || mouseX > bodyDimensions.right){
        alert(getExcuse());
    }
    if(mouseY < bodyDimensions.top || mouseY > bodyDimensions.bottom){
        alert(getExcuse());
    };

    function getExcuse() {
        console.log(previousExcuse);
        const excuses = ["That's cheating", "You were not meant to do this!", "Are you trying to trick me?", "Mmm nice try!", "That's not fair", "I'm not sure you can do that...", "Okey that's too far"];
        let randomNumber = Math.floor(Math.random() * excuses.length);

        return excuses[randomNumber];
    }
};