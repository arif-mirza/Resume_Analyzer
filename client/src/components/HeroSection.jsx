import React from "react";

const HeroSection = () => {
  
  return (
    <section className="bg-[#2D1B69] text-white py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#10B981] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Target your resume to a job,{" "}
              <span className="text-[#10B981]">instantly.</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">
              Our free ATS tool shows you the important skills your resume is
              missing. Simply paste your resume, or any job, into our free
              applicant tracking system (ATS) and increase your chances of an
              interview.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          
              >
                Target your resume &gt;
              </button>

              <button className="bg-white text-[#2D1B69] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                See preview
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-gray-300">
                Trusted by over a million professionals globally.
              </span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Laptop Mockup */}
          <div className="relative animate-slide-up">
            <div className="bg-white rounded-lg p-6 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
              <div className="bg-gray-100 rounded-lg p-4 space-y-4">
                {/* Score Circle */}
                <div className="flex justify-center">
                  <div className="relative w-24 h-24">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset="78"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">
                        69
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">
                      YOUR DESCRIPTION
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Software Engineer</li>
                      <li>• 5+ years experience</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">YOUR RESUME</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• React Developer</li>
                      <li>• 3 years experience</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">KEYWORDS</h4>
                    <div className="space-y-1">
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        JavaScript
                      </span>
                      <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        Python
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        React
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills and Experience */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">SKILLS</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">JavaScript</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">Python</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      EXPERIENCE
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">Frontend</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">Backend</span>
                      </div>
                    </div>
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

export default HeroSection;
