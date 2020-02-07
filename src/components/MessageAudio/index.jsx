import React, { useState, useRef, useEffect } from 'react'

import './audio.scss'
import waveSvg from 'assets/wave.svg'
import playSvg from 'assets/play.svg'
import stopSvg from 'assets/stop.svg'
import durationToTime from 'utils/durationToTime'

export default function MessageAudio({ audioMessage }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [time, setTime] = useState(0)
    const audioElem = useRef(null)
    useEffect(() => {
        setTime(audioElem.current.duration)
        audioElem.current.addEventListener('ended',
            (e) => {
                setIsPlaying(false)
                setProgress(0)
                setTime(durationToTime(e.target.duration))
            },false
        )
        audioElem.current.addEventListener('canplay',
            (e)=>setTime(durationToTime(e.target.duration)),false
        )
        audioElem.current.addEventListener('timeupdate',
            (e) => {
                setTime(durationToTime(e.target.currentTime))
                setProgress(100*(e.target.currentTime/e.target.duration))
            },false
        )
    },[])
    const onPlay = () => {
        isPlaying ? audioElem.current.pause() : audioElem.current.play()
        setIsPlaying(!isPlaying)
    }
    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audioMessage}></audio>
            <div className="message__audio-progress" style={{ display: '', width: progress+'%' }}></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={onPlay}>
                        {isPlaying ? <img src={stopSvg} alt="audio_stop" /> : <img src={playSvg} alt="audio_play" />}
                    </button>
                </div>
                <div className="message__audio-wave"><img src={waveSvg} alt="audio_play" /></div>
                <div className="message__audio-duration">{time||''}</div>
            </div>
        </div>
    )
}