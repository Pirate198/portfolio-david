import { useCallback, useEffect, useRef, useState } from "react";

export type AudioStatus = "idle" | "loading" | "ready" | "error";

export function useAudioPlayer(src: string) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<AudioStatus>("idle");
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    setStatus("idle");
    setPlaying(false);
    setCurrent(0);
    setDuration(null);

    const onMeta = () => {
      setDuration(Number.isFinite(a.duration) ? a.duration : null);
      setStatus("ready");
    };
    const onTime = () => setCurrent(a.currentTime);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onWaiting = () => setStatus("loading");
    const onCanPlay = () => setStatus("ready");
    const onError = () => {
      setStatus("error");
      setPlaying(false);
    };

    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("ended", onPause);
    a.addEventListener("waiting", onWaiting);
    a.addEventListener("canplay", onCanPlay);
    a.addEventListener("error", onError);
    return () => {
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("ended", onPause);
      a.removeEventListener("waiting", onWaiting);
      a.removeEventListener("canplay", onCanPlay);
      a.removeEventListener("error", onError);
    };
  }, [src]);

  const toggle = useCallback(async () => {
    const a = audioRef.current;
    if (!a || status === "error") return;
    if (a.paused) {
      try {
        await a.play();
      } catch {
        setStatus("error");
      }
    } else {
      a.pause();
    }
  }, [status]);

  const seek = useCallback((time: number) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = time;
    setCurrent(time);
  }, []);

  return { audioRef, status, playing, current, duration, toggle, seek };
}