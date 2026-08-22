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
      className="flex items-center justify-center z-71 fixed top-0 left-0 md:bg-white/5 md:h-full w-full h-full bg-black/5 backdrop-blur-lg"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full bottom-0 md:top-[50%] flex flex-col justify-center h-[232px] md:-translate-y-[50%] absolute  md:rounded-2xl shadow-[0_-6px_20px_rgba(0,0,0,0.15)] bg-primary-2 border-t border-primary-4 md:border md:border-white/0 py-6 px-6 h-[100px] md:w-110 md:h-80 overflow-hidden"
      >
        <div className="z-10 backdrop-blur-lg bg-white/0 w-full h-full absolute top-0 left-0"></div>

        <div className="z-40 px-6 flex justify-center  items-center flex-col absolute top-[50%] left-[50%] -translate-[50%] w-full h-fit flex mx-auto">
          {beat && (
            <audio ref={audioRef} src={beat.audioUrl} preload="metadata" />
          )}

          <div className="w-full gap-4 flex flex-col justify-center items-center z-40">
            <div className="flex  items-center mt-4 text-center w-full text-[18px] text-secondary-3">
              <div
                className="flex justify-center text-xl items-center mx-auto rounded-full h-[56px] w-[56px] border-2 border-secondary-5 cursor-pointer text-white-primary-3"
                onClick={toggleAudio}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </div>
              <div
                onClick={() => setIsMusiPlayerOpen(false)}
                className="text-white absolute right-6 cursor-pointer"
              >
                <span className="h-[2px] block w-5 bg-primary-5 rotate-45"></span>
                <span className="h-[2px] block -translate-y-0.5 w-5 bg-primary-5 -rotate-45"></span>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 w-full">
              <input
                value={currentTime}
                min={0}
                max={duration}
                onChange={handleSeek}
                className="w-full mt-[16px] mb-2 bg-white/40 accent-white appearance-none h-[2px]"
                type="range"
              />

              <div className="flex w-full justify-between">
                <span className="text-[14px] text-primary-5">
                  {formatTime(currentTime)}
                </span>
                <span className="text-[14px] text-primary-5">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
            <div className="text-[14px] text-center w-full overflow-hidden text-nowrap">
              {beat?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
