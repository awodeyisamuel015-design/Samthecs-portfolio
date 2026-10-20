
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState("");

  // Attempt autoplay when the website loads
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    audio.play()
      .then(() => {
        setIsPlaying(true);
        setError("");
      })
      .catch(() => {
        setIsPlaying(false);
        setError("Tap play to start the music");
      });
  }, []);

  // Keep volume and mute settings updated
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setError("");
    } catch {
      setError("Check that your music file exists.");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/sweet-september.mp3"
        loop
        preload="auto"
        onPlay={() => {
          setIsPlaying(true);
          setError("");
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => setError("Music file not found")}
      />

      <div className="fixed bottom-5 right-5 z-[100]">
        {!isExpanded ? (
          /* Small floating music button */
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-label="Open music controls"
            title="SAMTHECS FM"
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 text-2xl text-cyan-300 shadow-xl shadow-cyan-500/20 transition duration-300 hover:scale-110 hover:border-cyan-300"
          >
            <span
              className={
                isPlaying
                  ? "animate-pulse"
                  : ""
              }
            >
              {isPlaying ? "♫" : "♪"}
            </span>

            <span
              className={`absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-slate-950 ${
                isPlaying ? "bg-green-400" : "bg-slate-500"
              }`}
            />
          </button>
        ) : (
          /* Expanded music player */
          <div className="w-[260px] rounded-2xl border border-cyan-400/25 bg-slate-950/95 p-4 text-white shadow-2xl shadow-blue-900/30 backdrop-blur-xl animate-in fade-in zoom-in duration-200">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold tracking-wide">
                  SAMTHECS FM
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {isPlaying
                    ? "Now playing · Lo-fi beats"
                    : "Chill coding beats"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="Collapse music controls"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg text-slate-300 transition hover:bg-white/20 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 text-2xl">
                {isPlaying ? "♫" : "♪"}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  Sweet September
                </p>
                <p className="text-xs text-slate-400">
                  Lo-fi · Focus music
                </p>
              </div>

              <button
                type="button"
                onClick={toggleMusic}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {isPlaying ? "Ⅱ" : "▶"}
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setIsMuted((muted) => !muted)}
                aria-label={isMuted ? "Unmute music" : "Mute music"}
                className="text-lg transition hover:text-cyan-300"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(event) =>
                  setVolume(Number(event.target.value))
                }
                aria-label="Music volume"
                className="h-1.5 min-w-0 flex-1 cursor-pointer accent-cyan-400"
              />

              <span className="w-9 text-right text-xs text-slate-400">
                {Math.round(volume * 100)}%
              </span>
            </div>

            {error && (
              <p className="mt-3 text-xs text-amber-300">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
