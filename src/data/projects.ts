// Projects, in display order. Add `detail` to give a project its own page at
// /projects/<slug>; clicking the card image then opens that page.

export interface ProjectDetailSection {
  title: string;
  text: string;
  url: string;
}

export interface ProjectDetail {
  accent: string; // brand colour (buttons, borders)
  accentText: string; // lighter shade for headings on dark
  siteUrl: string;
  siteLabel: string;
  intro: string[];
  sections: ProjectDetailSection[];
  tech: string[];
}

export interface Project {
  slug: string;
  title: string;
  desc?: string;
  tech: string[];
  image: string;
  link: string;
  points: string[];
  detail?: ProjectDetail;
}

const ATMAGYAN = 'https://atmagyan.online';

export const projects: Project[] = [
  {
    slug: 'atmagyan',
    title: 'Atma Gyan',
    desc: '',
    tech: ['Node.js', 'TypeScript', 'Puppeteer', 'FFmpeg', 'YouTube Data API'],
    image: '/projects/atmagyan.svg',
    link: ATMAGYAN,
    points: [
      'Sanātana Dharma knowledge hub on Advaita Vedānta.',
      'Covers philosophy schools, sacred texts and sages.',
      'Tattvajña profiles with quotes, FAQs and works.',
      'Automated daily YouTube Shorts of Gītā verses.',
    ],
    detail: {
      accent: '#f59e0b',
      accentText: '#fcd34d',
      siteUrl: ATMAGYAN,
      siteLabel: 'Visit atmagyan.online',
      intro: [
        'Atma Gyan (ātma-jñāna, "knowledge of the Self") is a Sanātana Dharma resource I built and run. It brings the philosophy, scriptures and sages of the tradition into one place, with a focus on Advaita Vedānta, and presents them in a form that is accurate to the sources and easy to read.',
        'Alongside the website, the project runs a YouTube channel that publishes a verse every day through a fully automated video pipeline.',
      ],
      sections: [
        {
          title: 'Philosophy Schools',
          url: ATMAGYAN,
          text: 'An overview of the darśanas (schools of Indian philosophy), with Advaita Vedānta at the centre: what each school teaches, its key ideas and the texts it rests on.',
        },
        {
          title: 'Sacred Texts',
          url: ATMAGYAN,
          text: 'Verse-by-verse study of texts such as the Bhagavad Gītā, Aṣṭāvakra Gītā, Avadhūta Gītā and Ṛbhu Gītā, with the Sanskrit in Devanagari, IAST transliteration and English and Hindi translations.',
        },
        {
          title: 'Spiritual Gurus',
          url: ATMAGYAN,
          text: 'Teachers and lineages of the tradition, with the guru–disciple paramparā that connects them.',
        },
        {
          title: 'Tattvajña — Knowers of Truth',
          url: `${ATMAGYAN}/tattvajna`,
          text: 'Detailed profiles of sages and realised teachers: biography scaled to the available historical evidence, curated quotes, FAQs and the literary works each one composed. Every figure also has a dedicated quotes page.',
        },
        {
          title: 'YouTube Shorts (@atmagyan.online)',
          url: 'https://www.youtube.com/@atmagyan.online',
          text: 'A daily Shorts series of verses from the Gītās. It is fully automated: a Node.js pipeline renders each frame with Puppeteer, assembles the video with FFmpeg, uploads through the YouTube Data API and runs every morning on GitHub Actions.',
        },
      ],
      tech: ['Node.js', 'TypeScript', 'Puppeteer', 'FFmpeg', 'YouTube Data API', 'GitHub Actions'],
    },
  },
  {
    slug: 'rx-appoints',
    title: 'Rx Appoints',
    desc: '',
    tech: ['React.js', 'TypeScript', 'MongoDB', 'Solidity'],
    image: '/projects/rx-appoints.svg',
    link: 'https://github.com/DRithwik/Rx_appoints',
    points: [
      'AI models (RF, LSTM) for medicine suggestions.',
      'BERT-based assistant for queries and reminders.',
      'Secured prescriptions via Ethereum and IPFS.',
      'Unified AI, NLP & blockchain system.',
    ],
  },
  {
    slug: 'deep-research-agent',
    title: 'Deep Research AI Agent',
    desc: '',
    tech: ['Next.js', 'GPT-4o', 'Exa Search API', 'TypeScript'],
    image: '/projects/deep-research.svg',
    link: 'https://github.com/DRithwik/Deep-Research-AI-Agent',
    points: [
      'Built an AI agent with Next.js & multi-LLM support.',
      'Integrated Exa API for advanced data retrieval.',
      'Enabled iterative, customizable research workflows.',
      'Built a modular UI with Tailwind and Shadcn UI.',
    ],
  },
  {
    slug: 'loop-clone',
    title: 'Microsoft Loop Clone',
    tech: ['Next.js', 'JavaScript', 'CSS', 'Clerk'],
    image: '/projects/loop-clone.svg',
    link: 'https://github.com/DRithwik/Microsoft-Loop-Clone',
    points: [
      'A Next.js-based collaborative workspace app',
      'Enables editing & teamwork using Liveblocks',
      'Integrates AI assistance via Gemini API',
      'Secured with Clerk authentication',
    ],
  },
];

export const projectPath = (p: Project) => `/projects/${p.slug}`;
