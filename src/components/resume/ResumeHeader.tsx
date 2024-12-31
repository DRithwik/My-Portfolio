import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export default function ResumeHeader() {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2">
        <FileText className="text-blue-400" />
        <h2 className="text-3xl font-bold">Resume</h2>
      </div>
      <a
        href="https://drive.google.com/file/d/1c89FFjckn6-E9u4MV8wSZOJtHhNtxypR/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary flex items-center gap-2"
      >
        <ExternalLink size={20} />
        View / Download Resume
      </a>
    </div>
  );
}