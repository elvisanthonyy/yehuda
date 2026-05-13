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
    <div
      onClick={() => setIsMusiPlayerOpen(false)}
      className="flex items-center justify-center z-71 fixed bottom-0 left-0 md:bg-black/90 md:h-full w-full h-[246px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full relative md:bg-blue-900 md:rounded-2xl shadow-[0_-6px_20px_rgba(0,0,0,0.15)] bg-primary-1 border-t-2 border-secondary-2 md:border md:border-white/50 py-3 h-full md:w-110 md:h-80 overflow-hidden mt-5"
      >
        <div className="z-10 backdrop-blur-lg bg-white/0 w-full h-full absolute top-0 left-0"></div>
        
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
            <div className="mb-5 mt-4 text-[20px] text-secondary-3">{beat?.name}</div>
            <input
              value={currentTime}
              min={0}
              max={duration}
              onChange={handleSeek}
              className="w-full mt-[16px] bg-white/40 mb-[4px] accent-white appearance-none  h-[3px]"
              type="range"
            />

            <div className="flex w-full mt-[4px] justify-between">
              <span className="text-[14px] text-white">
                {formatTime(currentTime)}
              </span>
              <span className="text-[14px] text-white">
                {formatTime(duration)}
              </span>
            </div>

            <div
              className="flex justify-center text-xl mt-[16px] mb-8 items-center mx-auto rounded-full h-[56px] w-[56px] border-2 border-secondary-2 text-white"
              onClick={toggleAudio}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
