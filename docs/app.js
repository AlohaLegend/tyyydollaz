const audio = document.querySelector("#track");
const play = document.querySelector("#play");
const icon = document.querySelector("#playIcon");
const label = document.querySelector("#playLabel");
const progress = document.querySelector("#progress");

play.addEventListener("click", async () => {
  if (audio.paused) {
    await audio.play();
    icon.textContent = "Ⅱ";
    label.textContent = "NOW TRANSMITTING";
    play.setAttribute("aria-label", "Pause Fell In Luv preview");
  } else {
    audio.pause();
    icon.textContent = "▶";
    label.textContent = "PLAY 30 SEC PREVIEW";
    play.setAttribute("aria-label", "Play Fell In Luv preview");
  }
});

audio.addEventListener("timeupdate", () => {
  progress.style.width = `${(audio.currentTime / audio.duration) * 100 || 0}%`;
});

audio.addEventListener("ended", () => {
  icon.textContent = "▶";
  label.textContent = "PLAY 30 SEC PREVIEW";
});
