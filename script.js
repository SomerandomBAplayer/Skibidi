document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;

    document.body.addEventListener("click", (event) => {
        // Only spawn a new image if clicking on the background (not an existing plushie) nihahahahahah
        if (!event.target.closest("img")) {
            count++;
            counter.textContent = count;

            // Create plushie image at the clicked position
            const plushie = document.createElement("img");
            plushie.src = "Plushie.PNG"; // Make sure the file name is correct
            plushie.classList.add("plushie");

            // Generate a random size factor (1 to 9)
            const randomSize = Math.floor(Math.random() * 9) + 1; // Generates a number from 1 to 9
            const baseSize = 50; // Base size for the plushie
            const plushieSize = baseSize * randomSize; // Scale the plushie

            // Apply styles
            plushie.style.position = "absolute";
            plushie.style.width = `${plushieSize}px`; // Randomized width
            plushie.style.height = "auto"; // Maintain aspect ratio
            plushie.style.left = `${event.pageX - plushieSize / 2}px`; // Centering
            plushie.style.top = `${event.pageY - plushieSize / 2}px`;

            document.body.appendChild(plushie);

            // Play sound without delay
            const sound = new Audio("Shiroko_Battle_Damage_2.ogg"); // Correct path
            sound.play().catch(error => console.log("Audio playback failed:", error));
        }
    });
});
