import React from 'react';

const ATSSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80">
              {/* Main Person */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-20 bg-[#8B5CF6] rounded-full"></div>
                <div className="w-8 h-8 bg-[#8B5CF6] rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              {/* Large Circular Graph */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-48 h-48 border-8 border-[#E5E7EB] rounded-full relative">
                  <div className="absolute inset-0 border-8 border-[#10B981] rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 border-8 border-[#8B5CF6] rounded-full transform -rotate-45"></div>
                  <div className="absolute inset-0 border-8 border-[#F59E0B] rounded-full transform rotate-90"></div>
                </div>
              </div>
              
              {/* Data Icons */}
              <div className="absolute top-16 left-8">
                <div className="w-6 h-6 bg-[#10B981] rounded-lg"></div>
                <div className="w-2 h-2 bg-[#10B981] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-20 right-12">
                <div className="w-4 h-4 bg-[#8B5CF6] rounded-lg"></div>
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full absolute -top-1 -left-1"></div>
              </div>
              
              <div className="absolute top-32 left-16">
                <div className="w-5 h-5 bg-[#F59E0B] rounded-lg"></div>
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-28 right-8">
                <div className="w-3 h-3 bg-[#EF4444] rounded-lg"></div>
                <div className="w-2 h-2 bg-[#EF4444] rounded-full absolute -top-1 -left-1"></div>
              </div>
              
              {/* Center Data Point */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-[#2D1B69] rounded-full"></div>
              </div>
            </div>
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
              START YOUR FREE ATS SCAN &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSSection;
