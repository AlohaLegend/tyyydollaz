"use client";

import { useEffect, useRef, useState } from "react";

const links = {
  spotify: "https://open.spotify.com/artist/0klrB5g0JIWZFp6C62AgtK",
  apple: "https://music.apple.com/us/artist/ty%2524/6790048398",
  youtube: "https://www.youtube.com/watch?v=RyUpjQ1JgUQ",
  instagram: "https://www.instagram.com/tyyydollaz/",
};

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    const stop = () => setPlaying(false);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", stop);
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", stop);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <main className={loaded ? "site loaded" : "site"}>
      <audio ref={audioRef} preload="metadata" src="/media/fell-in-luv-preview.m4a" />
      <div className="noise" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="TY$ home">TY$</a>
        <p>TRANSMISSION 001</p>
        <p className="status"><span /> ASTRONAUT STATUS</p>
      </header>

      <section className="hero" id="top">
        <div className="signal-copy" aria-hidden="true">
          <span>TY$</span><span>TY$</span><span>TY$</span>
        </div>

        <div className="cover-shell">
          <div className="cover-meta top-meta">
            <span>07.17.26</span><span>NEW SIGNAL</span>
          </div>
          <div className="cover-wrap">
            <img src="/media/fell-in-luv.jpg" alt="Fell In Luv cover art by TY$" onLoad={() => setLoaded(true)} />
            <div className="target target-tl" /><div className="target target-tr" />
            <div className="target target-bl" /><div className="target target-br" />
          </div>
          <div className="cover-meta bottom-meta">
            <span>EARTHSIDE AUDIO</span><span>TYD-0001</span>
          </div>
        </div>

        <div className="release-card">
          <p className="eyebrow">DEBUT SINGLE</p>
          <h1>FELL<br />IN <em>LUV</em></h1>
          <p className="subcopy">a lazy bird says the sky&apos;s too high</p>

          <button className="play" type="button" onClick={toggle} aria-label={playing ? "Pause Fell In Luv preview" : "Play Fell In Luv preview"}>
            <span className="play-icon">{playing ? "Ⅱ" : "▶"}</span>
            <span className="play-copy">
              <b>{playing ? "NOW TRANSMITTING" : "PLAY 30 SEC PREVIEW"}</b>
              <span className="timeline"><i style={{ width: `${progress}%` }} /></span>
            </span>
            <span className="time">02:29</span>
          </button>

          <nav className="platforms" aria-label="Listen to TY$">
            <a href={links.spotify} target="_blank" rel="noreferrer">SPOTIFY <span>↗</span></a>
            <a href={links.apple} target="_blank" rel="noreferrer">APPLE MUSIC <span>↗</span></a>
            <a href={links.youtube} target="_blank" rel="noreferrer">YOUTUBE <span>↗</span></a>
          </nav>
        </div>

        <a className="ig-link" href={links.instagram} target="_blank" rel="noreferrer">
          <span>FOLLOW THE SIGNAL</span><b>@TYYYDOLLAZ ↗</b>
        </a>
      </section>

      <footer>
        <span>TY$ © 2026</span><span>5,536 EARTHLINGS CONNECTED</span><span>1 SONG. NO CEILING.</span>
      </footer>
    </main>
  );
}
