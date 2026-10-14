const audio = document.querySelector("#track");
const play = document.querySelector("#play");
const label = document.querySelector("#playLabel");
play.addEventListener("click", async () => {
  if (audio.paused) {
    await audio.play();
    label.textContent = "PAUSE PREVIEW Ⅱ";
    play.setAttribute("aria-label", "Pause Fell In Luv preview");
  } else {
    audio.pause();
    label.textContent = "PLAY PREVIEW ▶";
    play.setAttribute("aria-label", "Play Fell In Luv preview");
  }
});

audio.addEventListener("ended", () => {
  label.textContent = "PLAY PREVIEW ▶";
});
