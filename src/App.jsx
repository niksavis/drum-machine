import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { bankOne } from './audioClips';

// eslint-disable-next-line object-curly-newline
function Pad({ clip, volume, setRecording, setDisplay }) {
  const [active, setActive] = useState(false);

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => `${prev + clip.keyTrigger} `);
    setDisplay(() => clip.id);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      id={clip.id}
      role="button"
      tabIndex="-1"
      onClick={playSound}
      onKeyDown={handleKeyDown}
      className={`drum-pad btn btn-secondary p-4 m-3 ${active && 'btn-warning'}`}
    >
      <audio className="clip" id={clip.keyTrigger} src={clip.url}>
        <track kind="captions" />
      </audio>
      {clip.keyTrigger}
    </div>
  );
}

Pad.propTypes = {
  clip: PropTypes.shape({
    keyCode: PropTypes.number.isRequired,
    keyTrigger: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  volume: PropTypes.number.isRequired,
  setRecording: PropTypes.func.isRequired,
  setDisplay: PropTypes.string.isRequired,
};

function App() {
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState('');
  const [speed, setSpeed] = useState(0.5);
  const [display, setDisplay] = useState('');

  const playRecording = () => {
    let index = 0;
    const recordArray = recording.split(' ');
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index += 1;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1,
    );
  };

  return (
    <div className="bg-info min-vh-100 text-white" id="drum-machine">
      <div className="text-center">
        {bankOne.map((clip) => (
          <Pad
            key={clip.id}
            clip={clip}
            volume={volume}
            setRecording={setRecording}
            setDisplay={setDisplay}
          />
        ))}
        <br />
        <h4>Volume</h4>
        <input
          type="range"
          step="0.01"
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
          min="0"
          max="1"
          className="w-50"
        />
        <p id="display">{display}</p>
        <h3>{recording}</h3>
        {recording && (
          <>
            <button
              onClick={playRecording}
              type="button"
              className="btn btn-success"
            >
              play
            </button>
            <button
              onClick={() => setRecording('')}
              type="button"
              className="btn btn-danger"
            >
              clear
            </button>
            <br />
            <h4>Speed</h4>
            <input
              type="range"
              step="0.01"
              onChange={(e) => setSpeed(e.target.value)}
              value={speed}
              min="0.1"
              max="1.2"
              className="w-50"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
