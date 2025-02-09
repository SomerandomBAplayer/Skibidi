document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;

    document.body.addEventListener("click", (event) => {
        // Only spawn a new image if clicking on the background (not an existing plushie)
        if (!event.target.closest("img")) {
            count++;
            counter.textContent = count;

            // Create plushie image at the clicked position
            const plushie = document.createElement("img");
            plushie.src = "Plushie.PNG"; // Correct path
            plushie.classList.add("plushie");
            plushie.style.position = "absolute";
            plushie.style.width = "100px";
            plushie.style.height = "auto";
            plushie.style.left = `${event.pageX - 50}px`; // Center the image
            plushie.style.top = `${event.pageY - 50}px`;
            document.body.appendChild(plushie);

            // Play sound without delay
            const sound = new Audio("Shiroko_Battle_Damage_2.ogg"); // Correct path
            sound.play().catch(error => console.log("Audio playback failed:", error));
        }
    });
});
