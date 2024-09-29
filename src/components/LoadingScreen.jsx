import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);
  const particleRefs = useRef([]);

  useEffect(() => {
    const loading = loadingRef.current;
    const logo = logoRef.current;

    // GSAP Timeline for Logo Animation
    const tl = gsap.timeline();

    tl.fromTo(logo, 
      { opacity: 0, scale: 0 }, 
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power4.out' })
      .to(logo, { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 })
      .to(logo, { opacity: 0, duration: 0.5, delay: 1 });

    // Particles Animation
    particleRefs.current.forEach((particle, index) => {
      gsap.fromTo(particle, 
        { x: 0, y: 0, opacity: 0 }, 
        { 
          x: (Math.random() - 0.5) * 300, 
          y: (Math.random() - 0.5) * 300, 
          opacity: 1, 
          duration: 2, 
          delay: index * 0.1 
        }
      );
    });

    // Fade out loading screen
    gsap.to(loading, { opacity: 0, duration: 1, delay: 3, onComplete: () => (loading.style.display = 'none') });

  }, []);

  return (
    <div
      ref={loadingRef}
      className="loading-screen fixed inset-0 bg-black flex justify-center items-center z-50"
    >
      <div className="relative text-center">
        <h1
          ref={logoRef}
          className="text-6xl font-extrabold text-white"
        >
          ITR+
        </h1>

        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (particleRefs.current[i] = el)}
            className="particle absolute w-4 h-4 bg-white rounded-full"
            style={{ top: '50%', left: '50%' }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
