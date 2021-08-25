import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./AudioPlay.scss";

export default function AudioPlay() {
  return (
    <AudioPlayer className=".react-h5-audio-player "
      autoPlay
      src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );
}

// import AudioPlayer from "react-h5-audio-player";

// const AudioPlay = () => (
//   <AudioPlayer
//     autoPlay
//     src="http://example.com/audio.mp3"
//     onPlay={e => console.log("onPlay")}
//     // other props here
//   />
// );

// export default AudioPlay
