import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
export default function Hero() {
  const slides = [
    {
      image: img1,
      text: 'Success is the sum of small efforts, repeated day in and day out.',
    },
    {
      image: img2,
      text: 'Knowledge is power. Power to change the world.',
    },
    {
      image: img3,
      text: 'Push yourself, because no one else is going to do it for you.',
    },
    {
      image: img4,
      text: 'The future belongs to those who prepare for it today.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change slide every 4 seconds
   
    return () => clearInterval(timer);
  }, [slides.length]);
  // console.log(slides);
  return (
    <section
    id="home"
    className="text-center py-24 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-4xl font-bold mb-4 text-blue-900 dark:text-white">
        Welcome to Sankalp Study Point 📚
      </h2>

      {/* Automatic Slider */}
      <div className="relative w-full max-w-5xl mx-auto h-72 overflow-hidden rounded-lg shadow-lg mb-6">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat:'no-repeat',
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0  bg-opacity-50 flex items-end justify-center">
              <p className="text-white text-xl bg-amber-800 md:text-2xl font-semibold px-4 text-center">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg mb-2 text-gray-600 dark:text-gray-300 italic">
        "शांत, स्वच्छ आणि प्रेरणादायी अभ्यासासाठी खास जागा."
      </p>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 italic">
        "इथे तुमचे संकल्प होतील यशस्वी वास्तवात रूपांतरित!"
      </p>

      <Link
        to="/studyrooms"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow mb-6"
      >
        Explore Rooms
      </Link>
    </section>
  );
}
