// Get elements
const counter = document.getElementById("counter");
const soundSrc = "Shiroko_Battle_Damage_2.ogg"; // No "./" needed for GitHub Pages
let count = 0;

// Function to create a plushie at the cursor's position
function createPlushie(event) {
    if (!event.target.closest("img")) {  // Prevent clicking on existing plushies
        count++;
        counter.textContent = count;

        // Create a new plushie element
        const plushie = document.createElement("img");
        plushie.src = "Plushie.PNG"; // No "./" for GitHub Pages
        plushie.classList.add("plushie");
        plushie.style.position = "absolute";
        plushie.style.width = "100px";
        plushie.style.height = "auto";
        plushie.style.left = `${event.pageX - 50}px`;
        plushie.style.top = `${event.pageY - 50}px`;
        document.body.appendChild(plushie);

        // Play the sound
        const sound = new Audio(soundSrc);
        sound.play().catch(error => console.log("Audio playback failed:", error));
    }
}

// Add click event to the entire page
document.body.addEventListener("click", createPlushie);
