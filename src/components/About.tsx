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
              I’m a passionate and driven Software Development Engineer (SDE) in the making,
              who enjoys tackling complex problems and building meaningful solutions. 
              My interest in software development is fueled by a love for algorithms, data structures,
              and designing efficient systems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I have consistently honed my coding skills by working on diverse coding platforms like GeeksforGeeks, 
              CodeChef, and InterviewBit, Naukri Code360 where I have maintained impressive streaks and solved numerous 
              competitive programming problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              With a strong foundation in React and Next.js, a knack for developing interactive user-interfaces. I am enthusiastic 
              about creating high-quality software that makes a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="highlight-card group">
              <div className="p-6">
                <a
                  href="https://drive.google.com/file/d/1-2MoGJh3Z3hip1VoX99DDKOMZ6GseLcn/view?usp=sharing"
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
                    <p className="text-gray-300">530+ Days Coding Streak</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Letter of Recommendation from IIT Bombay</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <p className="text-gray-300">Full Stack Developer Intern at TechnoHacks Solution Pvt. Ltd.</p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1WD99wncCAHAmWKuH1G7c1R90ugYEHsNT/view?usp=sharing"
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
