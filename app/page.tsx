"use client";

import { useEffect, useRef, useState } from "react";

const links = {
  spotify: "https://open.spotify.com/artist/0klrB5g0JIWZFp6C62AgtK",
  latest: "https://open.spotify.com/track/4Yj6P2yWuxAxR5QPpjkoL2",
  apple: "https://music.apple.com/us/album/everlasting-ice-feat-shiire/6825489725?i=6825489726",
  backwood: "https://open.spotify.com/track/1Zsz2aRj4FkAvVwsGopIeA",
  reel: "https://www.instagram.com/tyyydollaz/reel/De2C_cLyBYT/",
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
        <p>TRANSMISSION 003</p>
        <p className="status"><span /> ASTRONAUT STATUS</p>
      </header>

      <section className="hero" id="top">
        <div className="signal-copy" aria-hidden="true">
          <span>TY$</span><span>TY$</span><span>TY$</span>
        </div>

        <div className="cover-shell">
          <div className="cover-meta top-meta">
            <span>10.23.26</span><span>NEW TODAY</span>
          </div>
          <div className="cover-wrap">
            <img src="/media/everlasting-ice.jpg" alt="everlasting ice cover art by TY$ and shiire" onLoad={() => setLoaded(true)} />
            <div className="target target-tl" /><div className="target target-tr" />
            <div className="target target-bl" /><div className="target target-br" />
          </div>
          <div className="cover-meta bottom-meta">
            <span>TY$ × SHIIRE</span><span>TYD-0003</span>
          </div>
        </div>

        <div className="release-card">
          <p className="eyebrow">NEW TODAY · TY$ × SHIIRE</p>
          <h1 className="long-title ice-title">EVERLASTING<br /><em>ICE</em></h1>
          <p className="subcopy">signal three is live</p>

          <a className="play primary-listen" href={links.latest} target="_blank" rel="noreferrer" aria-label="Listen to everlasting ice on Spotify">
            <span className="play-icon">▶</span>
            <span className="play-copy">
              <b>LISTEN ON SPOTIFY</b>
              <span className="timeline"><i style={{ width: "74%" }} /></span>
            </span>
            <span className="time">02:04 ↗</span>
          </a>

          <nav className="platforms" aria-label="Listen to TY$">
            <a href={links.apple} target="_blank" rel="noreferrer">APPLE MUSIC <span>↗</span></a>
            <a href={links.reel} target="_blank" rel="noreferrer">NEW VIDEO <span>↗</span></a>
            <a href={links.spotify} target="_blank" rel="noreferrer">ALL MUSIC <span>↗</span></a>
          </nav>

          <div className="previous-signals" aria-label="Previous releases">
            <a className="previous-release" href={links.backwood} target="_blank" rel="noreferrer">
              <span><b>002</b> PREVIOUS SIGNAL</span><strong>BACKWOOD WRAPPERS</strong><span>LISTEN ↗</span>
            </a>
            <button className="previous-release" type="button" onClick={toggle} aria-label={playing ? "Pause Fell In Luv preview" : "Play Fell In Luv preview"}>
              <span><b>001</b> FIRST SIGNAL</span><strong>FELL IN LUV</strong><span>{playing ? "PAUSE Ⅱ" : "PREVIEW ▶"}</span>
            </button>
          </div>
        </div>

        <a className="ig-link" href={links.instagram} target="_blank" rel="noreferrer">
          <span>FOLLOW THE SIGNAL</span><b>@TYYYDOLLAZ ↗</b>
        </a>
      </section>

      <footer>
        <span>TY$ © 2026</span><span>6,293 EARTHLINGS CONNECTED</span><span>3 SONGS. NO CEILING.</span>
      </footer>
    </main>
  );
}
