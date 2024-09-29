import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the logo first
    tl.fromTo(
      '.text-xl', // Target the logo
      { opacity: 0, x: -100 }, // Start with it off-screen to the left
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power3.out' // Smooth ease
      }
    )
    // Then animate the links with staggered entry
    .fromTo(
      '.space-x-4 a', // Target the `a` elements inside `.space-x-4`
      { opacity: 0, y: -30 }, // Start with links above and invisible
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'back.out(1.7)', // Slight bounce effect
        stagger: 0.2, // Stagger delay between each link
        delay: 0.3 // Add delay so they come in after the logo
      }
    );
  }, []);

  return (
    <header className="fixed top-0 p-1 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="head px-16">
        <nav className="container flex justify-between p-4">
          <a href="#home" className="text-xl font-bold text-blue-600">ITR+</a>
          <div className="space-x-4 flex">
            <a href="#overview" className="hover:text-blue-600">Overview</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
          </div>
        </nav>
      </div>
    </header>
  );


  
};

export default Header;
