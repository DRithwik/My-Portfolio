export const latexResumeContent = `\\documentclass[letterpaper,11pt]{article}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fontawesome5}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}

\\titleformat{\\section}{\\vspace{-2pt}\\scshape\\raggedright\\large\\bfseries}{}{0em}{}[\\color{black}\\titlerule \\vspace{-4pt}]
\\urlstyle{same}

% Custom commands
\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{#3} & \\textit{#4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeItem}[1]{
  \\item\\small{#1 \\vspace{-2pt}}
}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=0.15in]}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}}

\\begin{document}

%----------HEADING----------
\\begin{center}
    {\\huge \\textbf{Deshaboina Rithwik}} \\\\ 
    \\vspace{2pt} 
    {📱 +91 7989585736 \\textbar \\href{mailto:rithwikdmail@gmail.com}{rithwikdmail@gmail.com} \\textbar 
    \\href{https://www.linkedin.com/in/rithwik-d-865a6727a/}{LinkedIn} \\textbar 
    \\href{https://github.com/DRithwik}{GitHub}}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Vardhaman College of Engineering}{Hyderabad, India}
      {Bachelor of Technology in Computer Science \\& Engineering}{2022 -- 2026}
      \\resumeItem{C.G.P.A: 8.1/10}
    \\resumeSubheading
      {Sri Chaitanya Junior College}{Hyderabad, India}
      {Intermediate}{2020 -- 2022}
      \\resumeItem{Marks: 921/1000}
    \\resumeSubheading
      {Dr. KKR Gowtham Concept School}{Hyderabad, India}
      {Matriculation}{2020}
      \\resumeItem{G.P.A: 10/10}
  \\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {National Institute of Electronics and Information Technology (NIELIT)}{Chennai, India}
      {Internship}{August 2024 -- Present}
      \\resumeItemListStart
        \\resumeItem{Implemented a \\textbf{Blockchain-Based Electronic Health Record Management System} using Ethereum.}
        \\resumeItem{Enabled self-registration for 100+ users and reduced record retrieval time by 50\\%.}
        \\resumeItem{Used IPFS for decentralized storage, ensuring 100\\% data immutability.}
        \\resumeItem{Developed a user interface with React.js integrated with Web3.js.}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\\section{Projects}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Microsoft Loop Clone}{}
      {Technologies: Tailwind CSS, ReactJS, NextJS, Gemini AI}{}
      \\resumeItemListStart
        \\resumeItem{Integrated React with Tailwind CSS for styling and connected to the Gemini API.}
        \\resumeItem{Implemented authentication using Clerk and added real-time features via Liveblocks.}
      \\resumeItemListEnd
    \\resumeSubheading
      {Hotel Booking System}{}
      {Technologies: ReactJS, NodeJS, MongoDB, ExpressJS}{}
      \\resumeItemListStart
        \\resumeItem{Built a platform enabling users to search and book hotels.}
        \\resumeItem{Developed MongoDB-based architecture for comprehensive hotel data management.}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
  \\resumeItemListStart
    \\resumeItem{\\textbf{Languages:} C++, HTML, CSS, Solidity}
    \\resumeItem{\\textbf{Technologies/Frameworks/Libraries:} ReactJS, NodeJS, ExpressJS, MongoDB, SQL, Ethereum, IPFS, Web3.js, Hardhat, Ethers.js}
    \\resumeItem{\\textbf{CS Fundamentals:} Data Structures and Algorithms (DSA), OOPS, OS, DBMS}
  \\resumeItemListEnd

%-----------ACHIEVEMENTS-----------
\\section{Achievements}
  \\resumeItemListStart
    \\resumeItem{Secured \\textbf{Rank 1} in GeeksforGeeks Institute Rank (VCE).}
    \\resumeItem{Received \\textbf{Letter of Recommendation (LOR)} from IIT Bombay.}
    \\resumeItem{Achieved a 130+ Day Streak on GeeksforGeeks.}
  \\resumeItemListEnd

%-----------PROFILE LINKS-----------
\\section{Profile Links}
  \\resumeItemListStart
    \\resumeItem{\\href{https://auth.geeksforgeeks.org/user/rithwik_d}{GeeksforGeeks}}
    \\resumeItem{\\href{https://www.codechef.com/users/rithwik007}{CodeChef}}
    \\resumeItem{\\href{https://leetcode.com/u/Rithwik_D/}{Leetcode}}
    \\resumeItem{\\href{https://www.interviewbit.com/profile/rithwik-d/}{InterviewBit}}
  \\resumeItemListEnd

\\end{document}`;