import React, { useState } from 'react';
import mjLogo from '../assets/Images/mj-logo-removebg-preview.png';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer 
      className="relative bg-[#2D1B69] text-white py-12 px-6 lg:px-8 overflow-hidden transition-all duration-700 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Logo with Animation */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isHovered ? 'opacity-70 scale-130' : 'opacity-0 scale-100'
      }`}>
        <img 
          src={mjLogo} 
          alt="MJ NEXUS Logo" 
          className="max-w-lg max-h-96 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#2D1B69]/90 to-[#2D1B69]/80 transition-opacity duration-700 ${
        isHovered ? 'opacity-70' : 'opacity-100'
      }`}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">RESUMEX</h1>
          <p className="text-gray-300 text-lg">Get the job you deserve, faster.</p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Improve your resume */}
          <div className="group">
            <h3 className="font-bold text-white text-lg mb-4 group-hover:text-yellow-300 transition-colors duration-300">Improve your resume</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Score my resume</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Targeted resume</a></li>
            </ul>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-4 group-hover:text-yellow-300 transition-colors duration-300">Write your resume</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">ATS resume templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">ATS resume test</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">ATS resume guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Resume helper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Resume proofreader</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Rate my resume</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Resume grammar checker</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Resume optimizer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Google Docs resume templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Sample resume bullet points</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Skills and keywords</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Resume action verbs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Resume examples</a></li>
            </ul>
          </div>

          {/* Column 2: Optimize your career */}
          <div className="group">
            <h3 className="font-bold text-white text-lg mb-4 group-hover:text-yellow-300 transition-colors duration-300">Optimize your career</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">LinkedIn review</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Optimize your LinkedIn profile</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">LinkedIn headline samples</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Networking emails</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">AI cover letter generator</a></li>
            </ul>
          </div>

          {/* Column 3: Get to know us */}
          <div className="group">
            <h3 className="font-bold text-white text-lg mb-4 group-hover:text-yellow-300 transition-colors duration-300">Get to know us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Help center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Get in touch</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">For businesses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">For resume writers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Affiliates</a></li>
            </ul>
            
            <div className="mt-6">
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Coached, our newsletter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Testimonials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300">
          <p className='font-bold text-gray-400'>&copy; All rights reserved.</p>
          <p className='font-bold text-gray-400'>Mj Nexus {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
