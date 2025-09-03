import React from 'react';

const ImportanceSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              The importance of{' '}
              <span className="text-[#2D1B69]">keywords</span> on your resume
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Recruiters and Applicant Tracking Systems (ATS) use keywords to filter through hundreds of resumes. 
              By including the right keywords that match the job description, you significantly increase your 
              chances of getting past the initial screening and landing an interview.
            </p>
            
            <button className="bg-[#2D1B69] hover:bg-[#1E1B4B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              MATCH YOUR RESUME TO A JOB &gt;
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
              
              {/* Network of Documents */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-16 bg-[#10B981] rounded-lg transform rotate-12"></div>
                <div className="w-3 h-3 bg-[#10B981] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-8 right-8">
                <div className="w-10 h-14 bg-[#F59E0B] rounded-lg transform -rotate-12"></div>
                <div className="w-3 h-3 bg-[#F59E0B] rounded-full absolute -top-1 -left-1"></div>
              </div>
              
              <div className="absolute top-20 left-8">
                <div className="w-8 h-12 bg-[#EF4444] rounded-lg transform rotate-6"></div>
                <div className="w-3 h-3 bg-[#EF4444] rounded-full absolute -top-1 -right-1"></div>
              </div>
              
              <div className="absolute top-16 right-4">
                <div className="w-14 h-18 bg-[#8B5CF6] rounded-lg transform -rotate-6"></div>
                <div className="w-3 h-3 bg-[#8B5CF6] rounded-full absolute -top-1 -left-1"></div>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <line x1="160" y1="200" x2="80" y2="120" stroke="#E5E7EB" strokeWidth="2"/>
                <line x1="160" y1="200" x2="240" y2="160" stroke="#E5E7EB" strokeWidth="2"/>
                <line x1="160" y1="200" x2="120" y2="80" stroke="#E5E7EB" strokeWidth="2"/>
                <line x1="160" y1="200" x2="200" y2="120" stroke="#E5E7EB" strokeWidth="2"/>
              </svg>
              
              {/* Data Points */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-[#2D1B69] rounded-full"></div>
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-[#8B5CF6] rounded-full"></div>
              </div>
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
