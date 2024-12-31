import React from 'react';
import { Code2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FrontendDevelopment() {
  const navigate = useNavigate();

  const roadmap = [
    {
      stage: "Fundamentals",
      skills: [
        "HTML5 - Semantic elements, forms, validation",
        "CSS3 - Flexbox, Grid, Animations",
        "JavaScript - ES6+, DOM manipulation",
        "Responsive Design principles"
      ]
    },
    {
      stage: "React Ecosystem",
      skills: [
        "React.js Core Concepts",
        "Hooks and State Management",
        "Component Lifecycle",
        "Context API & Redux"
      ]
    },
    {
      stage: "Next.js & Advanced",
      skills: [
        "Server-Side Rendering",
        "Static Site Generation",
        "API Routes",
        "Performance Optimization"
      ]
    }
  ];

  const tools = [
    {
      category: "Development Tools",
      items: [
        "VS Code",
        "Chrome DevTools",
        "Git",
        "npm/yarn"
      ]
    },
    {
      category: "UI Libraries",
      items: [
        "Tailwind CSS",
        "Material UI",
        "Styled Components",
        "Framer Motion"
      ]
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
          <Code2 className="text-blue-400" size={32} />
          <h1 className="text-4xl font-bold">Frontend Development</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Learning Roadmap</h2>
          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{phase.stage}</h3>
                <ul className="space-y-3">
                  {phase.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Essential Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((toolCategory, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{toolCategory.category}</h3>
                <ul className="space-y-3">
                  {toolCategory.items.map((item, itemIndex) => (
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

        <section>
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Component Architecture</h4>
                  <p className="text-gray-300">Build reusable, maintainable components following SOLID principles</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Performance Optimization</h4>
                  <p className="text-gray-300">Implement code splitting, lazy loading, and proper state management</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Accessibility</h4>
                  <p className="text-gray-300">Follow WCAG guidelines and implement proper ARIA attributes</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}