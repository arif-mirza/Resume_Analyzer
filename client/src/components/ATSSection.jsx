import React from 'react';
import AtsImg from '../assets/Icons/undraw_publish-post_7g2z.svg';
const ATSSection = () => {
  return (
    <section className="bg-white py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src={AtsImg} 
              alt="ATS Illustration" 
              className="w-full max-w-md animate-float"
            />
          </div>
   

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How to get past{' '}
              <span className="text-[#2D1B69]">Applicant Tracking Systems (ATS)</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Most companies use ATS software to screen resumes before they reach human recruiters. 
              To get past these systems, you need to optimize your resume with relevant keywords, 
              proper formatting, and industry-specific terminology that matches the job description.
            </p>
            
            <button className="bg-[#2D1B69] hover:bg-[#1E1B4B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              START YOUR FREE ATS SCAN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSSection;
