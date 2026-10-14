"use client";

import { useEffect, useRef, useState } from "react";

const links = {
  spotify: "https://open.spotify.com/artist/0klrB5g0JIWZFp6C62AgtK",
  latest: "https://open.spotify.com/track/1Zsz2aRj4FkAvVwsGopIeA",
  reel: "https://www.instagram.com/tyyydollaz/reel/DealF_iyqCt/",
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
        <p>TRANSMISSION 002</p>
        <p className="status"><span /> ASTRONAUT STATUS</p>
      </header>

      <section className="hero" id="top">
        <div className="signal-copy" aria-hidden="true">
          <span>TY$</span><span>TY$</span><span>TY$</span>
        </div>

        <div className="cover-shell">
          <div className="cover-meta top-meta">
            <span>08.30.26</span><span>NEW SIGNAL</span>
          </div>
          <div className="cover-wrap">
            <img src="/media/backwood-wrappers.jpg" alt="backwood wrappers cover art by shiire and TY$" onLoad={() => setLoaded(true)} />
            <div className="target target-tl" /><div className="target target-tr" />
            <div className="target target-bl" /><div className="target target-br" />
          </div>
          <div className="cover-meta bottom-meta">
            <span>SHIIRE × TY$</span><span>TYD-0002</span>
          </div>
        </div>

        <div className="release-card">
          <p className="eyebrow">LATEST RELEASE · SHIIRE × TY$</p>
          <h1 className="long-title">BACKWOOD<br /><em>WRAPPERS</em></h1>
          <p className="subcopy">transmission two is live</p>

          <a className="play primary-listen" href={links.latest} target="_blank" rel="noreferrer" aria-label="Listen to backwood wrappers on Spotify">
            <span className="play-icon">▶</span>
            <span className="play-copy">
              <b>LISTEN ON SPOTIFY</b>
              <span className="timeline"><i style={{ width: "62%" }} /></span>
            </span>
            <span className="time">01:49 ↗</span>
          </a>

          <nav className="platforms" aria-label="Listen to TY$">
            <a href={links.spotify} target="_blank" rel="noreferrer">ALL MUSIC <span>↗</span></a>
            <a href={links.reel} target="_blank" rel="noreferrer">NEW VIDEO <span>↗</span></a>
            <a href={links.instagram} target="_blank" rel="noreferrer">INSTAGRAM <span>↗</span></a>
          </nav>

          <button className="previous-release" type="button" onClick={toggle} aria-label={playing ? "Pause Fell In Luv preview" : "Play Fell In Luv preview"}>
            <span><b>001</b> PREVIOUS SIGNAL</span><strong>FELL IN LUV</strong><span>{playing ? "PAUSE PREVIEW Ⅱ" : "PLAY PREVIEW ▶"}</span>
          </button>
        </div>

        <a className="ig-link" href={links.instagram} target="_blank" rel="noreferrer">
          <span>FOLLOW THE SIGNAL</span><b>@TYYYDOLLAZ ↗</b>
        </a>
      </section>

      <footer>
        <span>TY$ © 2026</span><span>5,710 EARTHLINGS CONNECTED</span><span>2 SONGS. NO CEILING.</span>
      </footer>
    </main>
  );
}
