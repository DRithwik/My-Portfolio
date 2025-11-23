import React from 'react'; 
import { User, FileText, ExternalLink } from 'lucide-react';
 
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <User className="text-blue-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
             I am an enthusiastic Software Development Engineer (SDE) in the process, 
             and I like to solve challenging issues and provide meaningful solutions. 
             The need to design efficient systems, data structures and love of algorithms 
             drive me to have interest in software development.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
             My coding abilities have been continuously developed by working over various
             coding sites such as GeeksforGeeks, CodeChef, and InterviewBit, Naukri Code360 
             where I have been on a streak of impressive results and answered 
             various competitive coding challenges.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Having an enhanced background of React and Next.js, a sense of creating a 
              personality-based user-interfaces. I am eager to develop quality 
              software that will change a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="highlight-card group">
              <div className="p-6">
                <a
                  href="https://drive.google.com/file/d/1-2MoGJh3Z3hip1VoX99DDKOMZ6GseLcn/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                    <h3 className="text-xl font-semibold">My Resume</h3>
                  </div>
                </a>
                <p className="text-gray-300 mb-4">View my resume to know more about me :)</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Rank 1 in Institute (VCE) on GeeksforGeeks</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Secured rank 326 in Job-A-Thon 36 Hiring Challenge</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">570+ Days Coding Streak</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Letter of Recommendation from IIT Bombay</p>
                  </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Interviewbit Global Rank : 50</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Full Stack Developer Intern at TechnoHacks Solution Pvt. Ltd.</p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1-2MoGJh3Z3hip1VoX99DDKOMZ6GseLcn/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  View / Download Resume
                  <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}
