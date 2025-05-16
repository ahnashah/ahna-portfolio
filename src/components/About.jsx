import React from 'react';
import avatar from '../IMG_6127.jpg';

export default function About() {
    return (
      <section 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,245,247,0.8), rgba(255,255,255,0.9)), url('flowers.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-pink-50 rounded-2xl shadow-md p-10 border border-pink-200">
          <img
            src= {avatar}
            alt="Ahna Shah"
            className="w-28 h-28 rounded-full mx-auto mb-6 shadow-lg object-cover"
          />
          <h2 className="text-3xl font-bold text-pink-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I recently graduated from <span className="font-semibold text-pink-500">Rensselaer Polytechnic Institute</span>,
            with a Bachelor of Science in <span className="text-purple-500">Computer Science</span> and
            <span className="text-purple-500"> Mathematics</span>, and a minor in
            <span className="text-green-600"> Sustainability Studies</span>. <br /><br />
            I love building things with code, solving complex problems, and making a positive impact!
          </p>
        </div>
      </section>
    );
  }