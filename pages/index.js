import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="container">
      <h1>Welcome to our app!</h1>
      <p>
        <Link href="/about">
          <a>Learn more about us</a>
        </Link>
      </p>
      {imageLoaded && (
        <Image
          src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Smiling woman preparing fresh fruit in a sunlit kitchen, embodying a healthy lifestyle."
          width={940}
          height={650}
          className="image"
        />
      )}
    </div>
  );
}