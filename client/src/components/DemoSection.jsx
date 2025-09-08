import React, { useState } from "react";

const DemoSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  // Handle file select
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("✅ File selected:", file.name);
    }
  };

  // Handle analysis
  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("⚠️ Please upload a resume first.");
      return;
    }

    setIsAnalyzing(true);
    console.log("🚀 Starting analysis...");

    try {
      const formData = new FormData();
      formData.append("resume", selectedFile);
      console.log("📤 Appended resume file to formData:", selectedFile.name);
      
      formData.append("jobDescription", jobDescription);

      console.log("📤 Sending file + jobDescription to backend...");

      const res = await fetch("http://localhost:3000/resume", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("❌ Server error:", errText);
        alert(`Server error: ${errText}`);
        return;
      }

      const data = await res.json();
      console.log("✅ Response received from backend:", data);
      setResult(data);
    } catch (error) {
      console.error("❌ Error uploading file:", error);
      alert("Something went wrong while analyzing.");
    } finally {
      setIsAnalyzing(false);
      console.log("🏁 Analysis finished.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#2D1B69] to-[#8B5CF6] text-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          See Resume Worded in Action
        </h2>

        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Experience the power of our ATS optimization tools with this
          interactive demo. Upload your resume or paste a job description to see
          how we can help you get more interviews.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Resume Upload */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
            <h3 className="text-2xl font-bold mb-4">Upload Your Resume</h3>
            <p className="text-gray-200 mb-6">
              Simply drag and drop your resume file or click to browse. We
              support PDF, DOC, and DOCX formats.
            </p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="bg-white text-[#2D1B69] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer inline-block"
            >
              {selectedFile ? selectedFile.name : "Choose File"}
            </label>
          </div>

          {/* Job Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
            <h3 className="text-2xl font-bold mb-4">Paste Job Description</h3>
            <p className="text-gray-200 mb-6">
              Copy and paste the job description you're applying for. We'll
              analyze it for keywords and requirements.
            </p>
            <textarea
              placeholder="Paste job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-3 rounded-lg text-gray-800 mb-4 resize-none"
              rows="4"
            />
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="bg-[#10B981] hover:bg-[#059669] disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none"
          >
            {isAnalyzing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Analyzing Resume...
              </div>
            ) : (
              "Start Free Analysis →"
            )}
          </button>
        </div>

        {/* Loading Animation */}
        {isAnalyzing && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#10B981] rounded-full animate-spin" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="text-white/80 text-lg font-medium">
                <div className="animate-pulse">AI is analyzing your resume...</div>
                <div className="text-sm text-white/60 mt-2">This may take a few moments</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Show backend response */}
      {result && (
        <div className="mt-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">🎯 Resume Analysis Results</h3>
          
          {/* Score Section */}
          {result.doc?.analysis?.score !== undefined && (
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-2xl shadow-2xl mb-8 text-center">
              <div className="text-6xl font-bold mb-4">{result.doc.analysis.score}</div>
              <div className="text-2xl font-semibold">Resume Score</div>
              <div className="text-lg opacity-90 mt-2">
                {result.doc.analysis.score >= 80 ? "🌟 Excellent!" : 
                 result.doc.analysis.score >= 60 ? "👍 Good" : 
                 result.doc.analysis.score >= 40 ? "⚠️ Needs Improvement" : "❌ Poor"}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Section */}
            {result.doc?.analysis?.skills && result.doc.analysis.skills.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-3">💼</span>
                  Skills Identified
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.doc.analysis.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white/20 text-white px-3 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Job Suggestions Section */}
            {result.doc?.analysis?.jobSuggestions && result.doc.analysis.jobSuggestions.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-3">🎯</span>
                  Recommended Job Roles
                </h4>
                <div className="space-y-2">
                  {result.doc.analysis.jobSuggestions.map((job, index) => (
                    <div
                      key={index}
                      className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {job}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Suggestions Section */}
          {result.doc?.analysis?.suggestions && result.doc.analysis.suggestions.length > 0 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
              <h4 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">💡</span>
                Improvement Suggestions
              </h4>
              <div className="space-y-3">
                {result.doc.analysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-200">{suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      
    </section>
  );
};

export default DemoSection;
