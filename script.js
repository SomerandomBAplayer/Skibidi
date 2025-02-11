document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;

    document.body.addEventListener("click", (event) => {
        // Prevent clicking on existing plushies
        if (!event.target.closest("img")) {
            count++;
            counter.textContent = count;

            // Create a new plushie image
            const plushie = document.createElement("img");
            plushie.src = "Plushie.PNG"; // Make sure the file is correct
            plushie.classList.add("plushie");

            // Generate a random size factor (0.5x to 3x)
            const randomSize = Math.random() * (3 - 0.5) + 0.5; // Range: 0.5 to 3
            const baseSize = 100; // Default size (adjust as needed)
            const plushieSize = baseSize * randomSize; // Scale plushie

            // Set position and size
            plushie.style.position = "absolute";
            plushie.style.width = `${plushieSize}px`; // Randomized width
            plushie.style.height = "auto"; // Maintain aspect ratio
            plushie.style.left = `${event.clientX - plushieSize / 2}px`; // Center horizontally
            plushie.style.top = `${event.clientY - plushieSize / 2}px`; // Center vertically

            document.body.appendChild(plushie);

            // Play sound instantly
            const sound = new Audio("Shiroko_Battle_Damage_2.ogg");
            sound.play().catch(error => console.log("Audio playback failed:", error));
        }
    });
});

