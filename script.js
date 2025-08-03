document.addEventListener("DOMContentLoaded", function () {
    const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
    const buttonsContainer = document.getElementById("buttons");

    let audioElements = [];

    function stopAllSounds() {
        audioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    sounds.forEach(sound => {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = sound;
        buttonsContainer.appendChild(btn);

        const audio = new Audio(`./sounds/${sound}.mp3`);
        audioElements.push(audio);

        btn.addEventListener("click", function () {
            stopAllSounds();
            audio.play();
        });
    });

    const stopBtn = document.createElement("button");
    stopBtn.className = "stop";
    stopBtn.textContent = "stop";
    buttonsContainer.appendChild(stopBtn);

    stopBtn.addEventListener("click", stopAllSounds);
});
