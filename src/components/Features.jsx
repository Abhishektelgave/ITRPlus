import React, { useEffect } from 'react';
import { gsap } from 'gsap';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';  // Ensure you install and register this plugin



const Features = () => {



  useEffect(() => {
    // Register DrawSVGPlugin from window object
    gsap.fromTo('.feature', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, stagger: 0.3 });
    gsap.to('.feature-svg', {
      duration: 2,
      stagger: 0.5,
      ease: 'power2.inOut',
    })}, []);

    return (
      <section id="features" className="min-h-screen p-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose ITR+?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature p-4 bg-white rounded-lg shadow-lg">
            <img src="/technical-support.svg" alt="In-house CAs" className="feature-svg w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600">Certified CA Support</h3>
            <p className="text-lg mt-4">Our certified Chartered Accountants ensure your filings are accurate and compliant.</p>
          </div>

          <div className="feature p-4 bg-white rounded-lg shadow-lg">
            <img src="/ease.png" alt="Ease of Use" className="feature-svg w-12 h-12 mx-auto mb-4 bg-transparent" />
            <h3 className="text-2xl font-semibold text-blue-600">User-Friendly Platform</h3>
            <p className="text-lg mt-4">ITR+ is designed with simplicity in mind, allowing even new users to navigate with ease.</p>
          </div>

          <div className="feature p-4 bg-white rounded-lg shadow-lg">
            <img src="/il_794xN.4426905797_madr.webp" alt="Flexible Pricing" className="feature-svg w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600">Flexible Pricing Plans</h3>
            <p className="text-lg mt-4">Choose from a variety of affordable pricing plans suited to your tax needs.</p>
          </div>
        </div>

        <img src="/6451f51dfd81da0862dbfdd5_featureform Feature Engineering Guide-01.png" alt="Features Graphic" className="w-3/5 mx-auto mt-12 rounded-lg shadow-lg" />
      </section>
    );
  };

  export default Features;
