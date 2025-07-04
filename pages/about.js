import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
    image.onload = () => setImageLoaded(true);

    const video = new Video();
    video.src = 'https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4';
    video.onload = () => setVideoLoaded(true);
  }, []);

  return (
    <div className="container">
      <h1>About us</h1>
      <p>
        We are a team of passionate individuals dedicated to creating high-quality content.
      </p>
      {imageLoaded && (
        <Image
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A person in a hoodie stands by a serene lake surrounded by lush greenery, enjoying the peaceful outdoors."
          width={940}
          height={650}
          className="image"
        />
      )}
      {videoLoaded && (
        <video
          src="https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4"
          poster="https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          width={1200}
          height={630}
          controls
          className="video"
        />
      )}
    </div>
  );
}