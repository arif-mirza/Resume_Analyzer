import React from 'react';

const RelatedResources = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          Want more? Discover our related resources.
        </h2>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Resource 1 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-[#2D1B69] transition-all duration-300 transform hover:scale-105 group cursor-pointer">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#1E1B4B] transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2D1B69] transition-colors duration-300">RATE MY RESUME</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant feedback on your resume with our free resume checker. Receive detailed analysis 
                and suggestions to improve your resume's effectiveness and increase your interview chances.
              </p>
            </div>
          </div>

          {/* Resource 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-[#2D1B69] transition-all duration-300 transform hover:scale-105 group cursor-pointer">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#1E1B4B] transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2D1B69] transition-colors duration-300">RESUME KEYWORD SCANNER</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced keyword scanner analyzes both your resume and job descriptions to identify 
                missing keywords and skills that could make the difference between rejection and interview.
              </p>
            </div>
          </div>

          {/* Resource 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-[#2D1B69] transition-all duration-300 transform hover:scale-105 group cursor-pointer">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#1E1B4B] transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2D1B69] transition-colors duration-300">WORD COUNT ANALYZER</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn about appropriate resume word counts and get expert advice on how to optimize your 
                content length for different industries and experience levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;
