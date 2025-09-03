import React from 'react';

const TargetSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-8">
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
              TARGET YOUR RESUME TO A JOB DESCRIPTION &gt;
            </button>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Main Document */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-40 bg-white border-4 border-[#2D1B69] rounded-lg relative shadow-lg">
                  {/* Checkmark */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Calendar Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-6 h-6 bg-[#8B5CF6] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Document Lines */}
                  <div className="absolute top-16 left-4 right-4 space-y-2">
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Smaller Document Icons */}
              <div className="absolute top-8 left-8">
                <div className="w-8 h-10 bg-[#10B981] rounded-lg transform rotate-12"></div>
                <div className="w-2 h-2 bg-[#10B981] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-12 right-12">
                <div className="w-6 h-8 bg-[#8B5CF6] rounded-lg transform -rotate-12"></div>
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full absolute -top-1 -left-1"></div>
              </div>
              
              <div className="absolute top-20 left-12">
                <div className="w-7 h-9 bg-[#F59E0B] rounded-lg transform rotate-6"></div>
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-16 right-8">
                <div className="w-5 h-7 bg-[#EF4444] rounded-lg transform -rotate-6"></div>
                <div className="w-2 h-2 bg-[#EF4444] rounded-full absolute -top-1 -left-1"></div>
              </div>
              
              <div className="absolute top-28 left-16">
                <div className="w-6 h-8 bg-[#10B981] rounded-lg transform rotate-12"></div>
                <div className="w-2 h-2 bg-[#10B981] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-24 right-16">
                <div className="w-8 h-10 bg-[#8B5CF6] rounded-lg transform -rotate-12"></div>
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full absolute -top-1 -left-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
