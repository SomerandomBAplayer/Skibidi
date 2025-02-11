document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;

    document.body.addEventListener("click", (event) => {
        // Prevent clicking on existing images
        if (!event.target.closest("img")) {
            count++;
            counter.textContent = count;

            // Create a new plushie image
            const plushie = document.createElement("img");
            plushie.src = "Plushie.PNG"; // Ensure the correct file name
            plushie.classList.add("plushie");

            // Generate a random size factor (1 to 9)
            const randomSize = Math.floor(Math.random() * 9) + 1;
            const baseSize = 50;
            const plushieSize = baseSize * randomSize;

            // Set position relative to viewport
            plushie.style.position = "absolute";
            plushie.style.width = `${plushieSize}px`;
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
