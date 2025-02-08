// Get elements
const counter = document.getElementById("counter");
const soundSrc = "./Shiroko_Battle_Damage_2.ogg"; // Use "./" to refer to same folder
let count = 0;

// Function to create a plushie at the cursor's position
function createPlushie(event) {
    count++;
    counter.textContent = count;

    // Create a new plushie element
    const plushie = document.createElement("img");
    plushie.src = "./Plushie.PNG"; // Ensure correct file path
    plushie.classList.add("plushie");
    plushie.style.position = "absolute";
    plushie.style.width = "100px"; // Adjust size if needed
    plushie.style.height = "auto";
    plushie.style.left = `${event.pageX - 50}px`; // Center the image
    plushie.style.top = `${event.pageY - 50}px`;
    document.body.appendChild(plushie);

    // Play the sound without delay
    const sound = new Audio(soundSrc);
    sound.play().catch(error => console.log("Audio playback failed:", error));
}

// Add click event to the entire page
document.body.addEventListener("click", createPlushie);
