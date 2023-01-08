import React, {useState, useRef} from 'react';
import './Video.css'
import VideoFooter from './VideoFooter.js'
import VideoSidebar from './VideoSidebar.js'
const Video = ({ url, channel, description, song, likes, shares, messages }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            {<video
                controls
                preload="none"
                className='video_player'
                loop
                ref={videoRef}
                onClick={handleVideoPress}
            >
                <source src={url} type="video/mp4"/>
            </video>}
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} share={shares} messages={messages}/>
        </div>
    )
}

export default Video