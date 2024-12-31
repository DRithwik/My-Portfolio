import React, { useState } from 'react';
import { FileText, ExternalLink, X } from 'lucide-react';
import EducationSection from './resume/EducationSection';
import ExperienceSection from './resume/ExperienceSection';
import ProjectsSection from './resume/ProjectsSection';
import SkillsSection from './resume/SkillsSection';
import AchievementsSection from './resume/AchievementsSection';
import ProfilesSection from './resume/ProfilesSection';
import { latexResumeContent } from './resume/LatexResume';

export default function Resume() {
  const [showLatex, setShowLatex] = useState(false);

  const handleResumeClick = () => {
    setShowLatex(true);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-400" />
            <h2 className="text-3xl font-bold">Resume</h2>
          </div>
          <button
            onClick={handleResumeClick}
            className="btn-primary flex items-center gap-2"
          >
            <ExternalLink size={20} />
            View / Download Resume
          </button>
        </div>

        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ProfilesSection />

        {showLatex && (
          <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-6 relative">
              <button 
                onClick={() => setShowLatex(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X className="text-gray-400 hover:text-white" />
              </button>
              <div className="mt-12">
                <h3 className="text-3xl font-bold mb-6 text-center">My Resume</h3>
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {latexResumeContent}
                  </pre>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => {
                      const blob = new Blob([latexResumeContent], { type: 'text/plain' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'my_resume.tex';
                      a.click();
                      window.URL.revokeObjectURL(url);
                    }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <FileText size={16} />
                    Download .tex File
                  </button>
                  <button
                    onClick={() => setShowLatex(false)}
                    className="btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}