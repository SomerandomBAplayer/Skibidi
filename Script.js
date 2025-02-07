// Get elements
const plushie = document.getElementById("plushie");
const counter = document.getElementById("counter");
const sound = new Audio("Shiroko_Battle_Damage_2.ogg");
let count = 0;

// Function to move the plushie to a random position
function movePlushie(event) {
    count++;
    counter.textContent = count;

    // Get random position within viewport
    const maxX = window.innerWidth - plushie.width;
    const maxY = window.innerHeight - plushie.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move plushie to random position and show it
    plushie.style.left = `${randomX}px`;
    plushie.style.top = `${randomY}px`;
    plushie.style.display = "block"; 

    // Play sound
    sound.currentTime = 0;
    sound.play().catch(error => console.log("Audio playback failed:", error));
}

// Add click event to the entire page
document.body.addEventListener("click", movePlushie);
