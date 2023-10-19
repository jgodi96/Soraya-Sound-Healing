import React from 'react'
import {useEffect,useRef} from 'react';
const VideoPlayer = () => {
    const cloudinaryRef = useRef ();
    const videoRef = useRef ();
    useEffect (()=>{
        if(cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current,{
            cloud_name:'colbycloud-examples'
        })
    },[])
  return (
    <video ref={videoRef} data-cld-public-id="videos/waterfall">VideoPlayer</video>
  )
}

export default VideoPlayer