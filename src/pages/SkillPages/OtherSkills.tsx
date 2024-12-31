import React from 'react';
import { Blocks, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OtherSkills() {
  const navigate = useNavigate();

  const skills = [
    {
      category: "DevOps & Cloud",
      items: [
        "Git Version Control",
        "Docker Containerization",
        "AWS Services",
        "CI/CD Pipelines"
      ]
    },
    {
      category: "Blockchain",
      items: [
        "Ethereum Development",
        "Smart Contracts",
        "Web3.js",
        "Solidity"
      ]
    },
    {
      category: "Cybersecurity",
      items: [
        "Ethical Hacking",
        "Penetration Testing",
        "Network Security",
        "Security Auditing"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      provider: "Amazon Web Services",
      skills: ["EC2", "S3", "Lambda", "DynamoDB"]
    },
    {
      name: "Certified Ethical Hacker",
      provider: "EC-Council",
      skills: ["Penetration Testing", "Security Analysis", "Vulnerability Assessment"]
    },
    {
      name: "Blockchain Developer",
      provider: "Ethereum Foundation",
      skills: ["Smart Contracts", "DApps", "Tokenization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Blocks className="text-blue-400" size={32} />
          <h1 className="text-4xl font-bold">Other Technical Skills</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skill Categories</h2>
          <div className="space-y-8">
            {skills.map((category, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Certifications & Training</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{cert.name}</h3>
                <p className="text-gray-400 mb-4">Provider: {cert.provider}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Project Experience</h2>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Cloud-Native Applications</h4>
                  <p className="text-gray-300">Deployed and managed applications on AWS infrastructure</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Blockchain Solutions</h4>
                  <p className="text-gray-300">Developed smart contracts and DApps on Ethereum network</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Security Assessments</h4>
                  <p className="text-gray-300">Conducted security audits and penetration testing</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}