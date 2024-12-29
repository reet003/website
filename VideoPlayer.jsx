import React, { useRef } from 'react';
import './VideoPlayer.css';
import Videoplayer from '../../assets/Videoplayer.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        // Close the player if the background is clicked, not the video itself
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={Videoplayer} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
