import React from 'react';

const CompareSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Compare your resume to a{' '}
              <span className="text-[#2D1B69]">job posting</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Our advanced comparison tool analyzes your resume against any job description to identify 
              missing skills, keywords, and experience requirements. Get instant feedback on how well 
              your resume matches the position and what you need to improve.
            </p>
            
            <button className="bg-[#2D1B69] hover:bg-[#1E1B4B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              COMPARE YOUR RESUME TO A JOB POSTING &gt;
            </button>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Main Person */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-20 bg-[#8B5CF6] rounded-full"></div>
                <div className="w-8 h-8 bg-[#8B5CF6] rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              {/* Circular Diagram */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-48 h-48 border-4 border-[#E5E7EB] rounded-full relative">
                  {/* Document Icons */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-10 bg-[#10B981] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#10B981] rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  
                  <div className="absolute top-8 right-4">
                    <div className="w-6 h-8 bg-[#8B5CF6] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full absolute -top-1 -left-1"></div>
                  </div>
                  
                  <div className="absolute top-16 right-8">
                    <div className="w-7 h-9 bg-[#F59E0B] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full absolute -top-1 -left-1"></div>
                  </div>
                  
                  <div className="absolute top-24 right-4">
                    <div className="w-5 h-7 bg-[#EF4444] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#EF4444] rounded-full absolute -top-1 -left-1"></div>
                  </div>
                  
                  <div className="absolute top-32 right-8">
                    <div className="w-6 h-8 bg-[#10B981] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#10B981] rounded-full absolute -top-1 -left-1"></div>
                  </div>
                  
                  <div className="absolute top-20 left-8">
                    <div className="w-7 h-9 bg-[#8B5CF6] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full absolute -top-1 -right-1"></div>
                  </div>
                  
                  <div className="absolute top-12 left-4">
                    <div className="w-5 h-7 bg-[#F59E0B] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full absolute -top-1 -right-1"></div>
                  </div>
                  
                  <div className="absolute top-4 left-8">
                    <div className="w-6 h-8 bg-[#EF4444] rounded-lg"></div>
                    <div className="w-2 h-2 bg-[#EF4444] rounded-full absolute -top-1 -right-1"></div>
                  </div>
                  
                  {/* Center Plus Sign */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-2 bg-[#2D1B69] rounded-full"></div>
                    <div className="w-2 h-8 bg-[#2D1B69] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
