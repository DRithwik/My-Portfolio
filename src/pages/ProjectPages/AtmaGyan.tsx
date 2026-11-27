import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SITE = 'https://atmagyan.online';

// Each section of the site with a short explanation and where it lives.
// Update `url` if a section's path changes on atmagyan.online.
const sections = [
  {
    title: 'Philosophy Schools',
    url: SITE,
    text:
      'An overview of the darśanas (schools of Indian philosophy), with Advaita Vedānta at the centre: what each school teaches, its key ideas and the texts it rests on.',
  },
  {
    title: 'Sacred Texts',
    url: SITE,
    text:
      'Verse-by-verse study of texts such as the Bhagavad Gītā, Aṣṭāvakra Gītā, Avadhūta Gītā and Ṛbhu Gītā, with the Sanskrit in Devanagari, IAST transliteration and English and Hindi translations.',
  },
  {
    title: 'Spiritual Gurus',
    url: SITE,
    text:
      'Teachers and lineages of the tradition, with the guru–disciple paramparā that connects them.',
  },
  {
    title: 'Tattvajña — Knowers of Truth',
    url: `${SITE}/tattvajna`,
    text:
      'Detailed profiles of sages and realised teachers: biography scaled to the available historical evidence, curated quotes, FAQs and the literary works each one composed. Every figure also has a dedicated quotes page.',
  },
  {
    title: 'YouTube Shorts (@atmagyan.online)',
    url: 'https://www.youtube.com/@atmagyan.online',
    text:
      'A daily Shorts series of verses from the Gītās. It is fully automated: a Node.js pipeline renders each frame with Puppeteer, assembles the video with FFmpeg, uploads through the YouTube Data API and runs every morning on GitHub Actions.',
  },
];

const tech = ['Node.js', 'TypeScript', 'Puppeteer', 'FFmpeg', 'YouTube Data API', 'GitHub Actions'];

export default function AtmaGyan() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft size={20} /> Back to Projects
        </button>

        <img
          src="/projects/atmagyan.svg"
          alt="Atma Gyan"
          className="w-full rounded-2xl mb-10 border border-amber-500/20"
        />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl font-bold">Atma Gyan</h1>
          <a
            href={SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-colors"
          >
            <Globe size={18} /> Visit atmagyan.online <ExternalLink size={16} />
          </a>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Atma Gyan (ātma-jñāna, "knowledge of the Self") is a Sanātana Dharma resource I built and run.
          It brings the philosophy, scriptures and sages of the tradition into one place, with a focus on
          Advaita Vedānta, and presents them in a form that is accurate to the sources and easy to read.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Alongside the website, the project runs a YouTube channel that publishes a verse every day through
          a fully automated video pipeline.
        </p>

        <div className="grid gap-6 mb-12">
          {sections.map((s) => (
            <div key={s.title} className="bg-gray-800/40 border border-gray-700/60 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-amber-300 mb-2">{s.title}</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">{s.text}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                {s.url.replace('https://', '')} <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Built with</h2>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
