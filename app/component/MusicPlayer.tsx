"use client";
import React, { useState, useRef, useEffect, SetStateAction } from "react";
import { FaPause, FaPlay, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { IBeat } from "@/models/beat";

interface ChildProps {
  beat: IBeat | null;
  setIsMusiPlayerOpen: React.Dispatch<SetStateAction<boolean>>;
}

const MusicPlayer = ({ beat, setIsMusiPlayerOpen }: ChildProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  //const [musicLoading, setMusicLoading] = useState(false);
  //const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTime = Number(e.target.value);
    if (!audioRef.current) return;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  function formatTime(time: number) {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  }

  const toggleAudio = () => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioRef.current.ended) {
        setIsPlaying(true);
        audioRef.current.play();
      } else {
        audioRef.current.play();
      }
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audioRef.current?.play();
    setIsPlaying(true);
    const handleLoaded = () => {
      setDuration(audio.duration);
    };

    if (audio.readyState >= 1) {
      setDuration(audio.duration);
    }

    audio.addEventListener("loadedmetadata", handleLoaded);

    return () => audio.removeEventListener("loadedmetadata", handleLoaded);
  }, [beat?.audioUrl]);

  return (
    <div className="w-full  shadow-[0_-6px_20px_rgba(0,0,0,0.15)] border-t border-yehuda-lightgray z-65 fixed bottom-0 left-0 py-3 min-h-44 overflow-hidden mt-5">
      <div className="z-10 backdrop-blur-3xl bg-white/0 w-full h-full absolute top-0 left-0"></div>
      <div className="absolute top-0 opacity-70 left-0 w-full h-full mx-auto rounded-lg">
        {" "}
        {beat && (
          <Image
            src={beat.imageUrl}
            height={1000}
            width={1000}
            className="h-full"
            alt="back image"
          />
        )}
      </div>
      <div className="z-40 flex items-center flex-col py-5 absolute top-[50%] left-[50%] -translate-[50%] w-[90%] flex mx-auto">
        {beat && (
          <audio ref={audioRef} src={beat.audioUrl} preload="metadata" />
        )}

        <div className="w-full flex flex-col items-center z-40 mt-3">
          <div
            onClick={() => setIsMusiPlayerOpen(false)}
            className="text-white absolute right-1 top-13 cursor-pointer"
          >
            <FaTimes />
          </div>
          <div className="mb-5 mt-4 text-md text-white">{beat?.name}</div>
          <input
            value={currentTime}
            min={0}
            max={duration}
            onChange={handleSeek}
            className="w-full bg-white/40 mt-1 accent-white appearance-none  h-0.5"
            type="range"
          />

          <div className="flex w-full mt-2 justify-between">
            <span className="text-[10px] text-white">
              {formatTime(currentTime)}
            </span>
            <span className="text-[10px] text-white">
              {formatTime(duration)}
            </span>
          </div>

          <div
            className="flex justify-center text-xl mb-4 items-center mx-auto rounded-full h-13 w-13 bg-white/15 text-white"
            onClick={toggleAudio}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
