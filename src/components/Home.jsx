
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo('.hero-text', 
      { opacity: 0, y: -50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.hero-text',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    gsap.fromTo('.hero-image', 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.5,
        scrollTrigger: {
          trigger: '.hero-image',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-16 text-center">
      <div className="hero-text">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to ITR+</h1>
        <p className="text-lg">The ultimate platform for first-time tax filers to file their returns hassle-free!</p>
      </div>
      <img
        src="/Blog-post-ITR..png"
        alt="Tax Filing"
        className="hero-image w-2/5 mt-8 rounded-lg shadow-lg"
      />

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800">Your Tax Filing Partner</h2>
        <p className="text-lg mt-4">
          Our platform provides end-to-end tax filing support for first-time users and new earners, backed by experienced Chartered Accountants.
        </p>
        <img
          src="/ICI-Slider-Image-Income-Tax-Filing.png"
          alt="Tax Partner"
          className="w-2/4 mx-auto"
        />
      </div>

      <div className="parallax-section mt-16 p-12 ">
        <h2 className="text-3xl font-bold text-gray-800">Process</h2>
        <img
          src="/111.png"
          alt="ITR+ Overview"
          className="overview-image w-2/4 mt-8 rounded-lg mx-auto shadow-lg"
        />
        <img
          src="/222.png"
          alt="ITR+ Overview"
          className="overview-image w-2/4 mt-8 rounded-lg mx-auto shadow-lg"
        />
      </div>

      <div className="parallax-section mt-16 p-12 bg-gradient-to-r from-blue-500 to-blue-800 text-white">
        <h3 className="text-4xl font-bold mb-6">Over 100+ Happy Members</h3>
        <p className="text-lg">Join the community of satisfied users who filed taxes with ease!</p>
      </div>
    </section>
  );
};

export default Home;
