<img id="plushie" src="Plushie.PNG" alt="Clickable plushie" style="cursor: pointer;">
  function playShirokoDamage() {
    // Create audio element
    const audio = new Audio('Shiroko_Battle_Damage_2.ogg');
    
    // Play the sound
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
}

// Add click event listener to the plushie image
document.getElementById('plushie').addEventListener('click', playShirokoDamage);
// Preload the audio
const shirokoAudio = new Audio('Shiroko_Battle_Damage_2.ogg');

function playShirokoDamage() {
    // Reset audio position if already playing
    shirokoAudio.currentTime = 0;
    
    shirokoAudio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
}
