import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const AboutUs = () => {
  useEffect(() => {
    gsap.fromTo('.about-us', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo('.team1', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo('.team3', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
  }, []);

  

  return (
    <section id="about" className="min-h-screen p-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
      <div className="about-us text-lg mb-4">
        <p>
          At ITR+, we are passionate about making tax filing easy and accessible to everyone. We started with a vision to simplify tax filing
          for new earners, and today, we've helped thousands of users file their taxes effortlessly.
        </p>
      </div>

      <div className="team-section mt-12">
        <h3 className="text-3xl font-bold text-gray-700">Meet Our Team</h3>
        <div className="team-images flex justify-center space-x-8 mt-8">
          <div className="team1 flex flex-col items-center justify-center gap-2">
            <img src="/ITRPlus/pp.webp" alt="Team Member 1" className="rounded-full w-40 h-40" />
            <h3 className="text-xl text-gray-700">Laxmikant Biradar [Founder]</h3>
          </div>
          <div className="team2 flex flex-col items-center justify-center gap-2">
            <img src="/ITRPlus/pp.webp" alt="Team Member 1" className="rounded-full w-40 h-40" />
            <h3 className="text-xl text-gray-700">Abhishek Telagave [Developer]</h3>
          </div>
          <div className="team3 flex flex-col items-center justify-center gap-2">
            <img src="/ITRPlus/pp.webp" alt="Team Member 1" className="rounded-full w-40 h-40" />
            <h3 className="text-xl text-gray-700">The BVSS Members [community]</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
