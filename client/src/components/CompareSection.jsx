import React from "react";
import CompImg from "../assets/Icons/undraw_creative-flow_t3kz.svg";

const CompareSection = () => {
  return (
    <section className="bg-white py-40 px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Compare your resume to a{" "}
              <span className="text-[#2D1B69]">job posting</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our advanced comparison tool analyzes your resume against any job
              description to identify missing skills, keywords, and experience
              requirements. Get instant feedback on how well your resume matches
              the position and what you need to improve.
            </p>

            <button className="bg-[#2D1B69] hover:bg-[#1E1B4B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              COMPARE YOUR RESUME TO A JOB POSTING
            </button>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={CompImg}
              alt="Resume Comparison Illustration"
              className="w-full max-w-md animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
