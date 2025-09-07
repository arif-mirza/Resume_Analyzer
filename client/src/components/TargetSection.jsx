import React from 'react';
import Lottie from 'lottie-react';
import computer_animation from "../assets/Computer_animation.json";

const TargetSection = () => {
  return (
    <section className="bg-white py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How do you target your resume to a job description?
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Our process is simple and effective. First, we compare your resume against the job description 
              to identify gaps. Then, we highlight the missing keywords and skills. Finally, we provide 
              you with specific recommendations to optimize your resume for that particular position.
            </p>
            
            <button className="bg-[#2D1B69] hover:bg-[#1E1B4B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              TARGET YOUR RESUME TO A JOB DESCRIPTION 
            </button>
          </div>

          {/* Right Content - import svg icon */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
           <Lottie
              animationData={computer_animation}
              loop={true}
              className="w-full max-w-xl"
            />
          </div>
         
         
        
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
