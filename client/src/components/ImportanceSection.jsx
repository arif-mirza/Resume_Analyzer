import React from 'react';
import ImpPic from '../assets/Icons/undraw_group-project_kow1.svg';

const ImportanceSection = () => {
  return (
    <section className="bg-white py-40 px-6 lg:px-8">
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
              MATCH YOUR RESUME TO A JOB
            </button>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img src={ImpPic} alt="Resume Illustration" className="w-full max-w-md animate-float" />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
