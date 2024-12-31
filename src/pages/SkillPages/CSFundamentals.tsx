import React from 'react';
import { Brain, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CSFundamentals() {
  const navigate = useNavigate();

  const roadmap = [
    {
      stage: "Data Structures",
      skills: [
        "Arrays and Strings",
        "Linked Lists",
        "Trees and Graphs",
        "Hash Tables",
        "Heaps and Priority Queues"
      ]
    },
    {
      stage: "Algorithms",
      skills: [
        "Sorting and Searching",
        "Dynamic Programming",
        "Graph Algorithms",
        "Greedy Algorithms",
        "Backtracking"
      ]
    },
    {
      stage: "System Design",
      skills: [
        "Scalability",
        "Load Balancing",
        "Caching",
        "Database Sharding",
        "Microservices"
      ]
    }
  ];

  const resources = [
    {
      category: "Learning Platforms",
      items: [
        "GeeksforGeeks",
        "LeetCode",
        "InterviewBit",
        "System Design Primer"
      ]
    },
    {
      category: "Books",
      items: [
        "Introduction to Algorithms",
        "Cracking the Coding Interview",
        "Clean Code",
        "Designing Data-Intensive Applications"
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
          <Brain className="text-blue-400" size={32} />
          <h1 className="text-4xl font-bold">CS Fundamentals</h1>
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
          <h2 className="text-2xl font-semibold mb-6">Learning Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((category, index) => (
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

        <section>
          <h2 className="text-2xl font-semibold mb-6">Problem Solving Approach</h2>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Understanding the Problem</h4>
                  <p className="text-gray-300">Break down complex problems into smaller, manageable parts</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Pattern Recognition</h4>
                  <p className="text-gray-300">Identify common patterns and apply appropriate algorithms</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <div>
                  <h4 className="font-semibold mb-1">Optimization</h4>
                  <p className="text-gray-300">Analyze time and space complexity to improve efficiency</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}