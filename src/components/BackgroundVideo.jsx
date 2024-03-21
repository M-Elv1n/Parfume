import React, { useRef, useEffect } from 'react';

const BackgroundVideo = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.controls = false; // отключаем элементы управления

    const onEnded = () => {
      video.play(); // автоматически начинаем воспроизведение после окончания
    };

    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <video autoPlay loop muted ref={videoRef}>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;