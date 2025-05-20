document.addEventListener("DOMContentLoaded", function () {
    const sounds = ["sound1", "sound2", "sound3", "sound4"]; // Add your sound file names here
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";
    document.body.appendChild(buttonsContainer);

    let audioElements = [];

    // Function to stop all playing sounds
    function stopAllSounds() {
        audioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    // Create buttons for each sound
    sounds.forEach(sound => {
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = sound;
        buttonsContainer.appendChild(btn);

        let audio = new Audio(`./sounds/${sound}.mp3`);
        audioElements.push(audio);

        btn.addEventListener("click", function () {
            stopAllSounds(); // Stop any currently playing sound
            audio.play();
        });
    });

    // Create a stop button
    let stopBtn = document.createElement("button");
    stopBtn.className = "stop";
    stopBtn.textContent = "Stop";
    buttonsContainer.appendChild(stopBtn);

    stopBtn.addEventListener("click", stopAllSounds);
});
