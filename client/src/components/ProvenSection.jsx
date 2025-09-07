import React from "react";

const ProvenSection = () => {
  return (
    <section className="bg-white py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
          Proven to get <span className="text-[#2D1B69]">more</span> interviews.
          For free.
        </h2>

        {/* Three Feature Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center group-hover:bg-[#1E1B4B] transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              GET YOUR ATS SCORE
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Instantly find your resume fit score and identify missing keywords
              and skills that could be holding you back from getting interviews.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center group-hover:bg-[#1E1B4B] transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              TAILOR YOUR RESUME IN MINUTES
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our free ATS scanner and analyzer simplifies tailoring your resume
              by identifying exactly what ATS systems are looking for.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center group-hover:bg-[#1E1B4B] transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              COMPARE YOUR RESUME TO THE JOB DESCRIPTION
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Understand exactly what's missing from your resume compared to the
              job description and get actionable insights to improve your
              chances.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-[#2D1B69] hover:bg-[#1E1B4B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          START YOUR FREE ATS SCAN
        </button>
      </div>
    </section>
  );
};

export default ProvenSection;
