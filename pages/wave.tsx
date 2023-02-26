import React, { useRef, useEffect } from "react";

const AudioPlayer = () => {
  const audioElement = useRef(null);
  const canvasElement = useRef(null);
  //   let audioSource: any;

  //   useEffect(() => {

  //   }, []);

  let man = () => {
    // Get the audio and canvas elements
    const audio: any = audioElement.current;
    audio.play();
    const canvas: any = canvasElement.current;

    // Create an AudioContext
    const audioContext = new AudioContext();

    // Create an AnalyserNode
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Connect the audio element to the AnalyserNode
    audioContext.createMediaElementSource(audio).connect(analyser);
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  };

  return (
    <>
      <audio ref={audioElement} controls src="/music.mp3" />
      <canvas ref={canvasElement} width="500" height="100" />
      <button onClick={man}>adf</button>
    </>
  );
};

export default AudioPlayer;
