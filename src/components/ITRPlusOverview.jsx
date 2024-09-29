import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ITRPlusOverview = () => {
  useEffect(() => {
    gsap.fromTo('.overview-text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 });
    gsap.fromTo('.overview-image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.5 });
  }, []);

  return (
    <section id="overview" className="min-h-screen p-16 bg-white text-center felx felx-col items-center justify-center gap-2">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Why ITR+ Stands Out</h2>
      <div className="overview-text ">
        <p className="text-lg mb-4">
          At ITR+, we understand the complexities of filing taxes for the first time. Our platform provides a user-friendly experience tailored for young professionals and new earners.
        </p>
        <p className="text-lg mb-4">
          From salary management advice to personalized guidance by certified CAs, we ensure that our users get the best possible experience with no stress.
        </p>
      </div>
      <img
        src="/ITRPlus/Benefits-of-Filing-Income-Tax-Return-min.png"
        alt="ITR+ Overview"
        className="overview-image w-2/5 mt-8 rounded-lg mx-auto shadow-lg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="text-left p-6">
          <h3 className="text-2xl font-bold text-gray-800">Personalized Assistance</h3>
          <p className="mt-4 text-lg">We offer personalized guidance tailored to first-time filers. Our in-house CAs are here to help you understand every step of the process.</p>
        </div>
        <div className="text-left p-6">
          <h3 className="text-2xl font-bold text-gray-800">Revenue Streams</h3>
          <p className="mt-4 text-lg">Our platform offers a variety of pricing models to suit your needs: per-filing fees, subscriptions, and partnerships for bulk filing.</p>
        </div>
      </div>
    </section>
  );
};

export default ITRPlusOverview;
