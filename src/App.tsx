/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Trophy, 
  User, 
  FileText,
  BookOpen,
  Award
} from 'lucide-react';
import { PUBLICATIONS, Publication } from './data.ts';

// --- Components ---

const Header = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (p: string) => void }) => {
  return (
    <header className="container mx-auto px-10 py-8 double-border-bottom no-print">
      <nav className="flex justify-start items-end mb-4 uppercase font-bold text-[13px] tracking-widest">
        <div className="flex gap-4">
          {['About', 'Publication'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page.toLowerCase())}
              className={`hover:opacity-60 transition-opacity ${
                currentPage === page.toLowerCase() ? 'underline underline-offset-4' : ''
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </nav>

      <div className="text-center">
        <h1 className="font-display text-4xl md:text-7xl font-black tracking-[-2px] leading-none mb-2">
          Xinyi Tang (唐鑫夷)
        </h1>
        <div className="border-y border-ink py-2 uppercase font-mono text-[11px] tracking-[2px] flex justify-between px-4">
          <span>Phone： +86 19071481945</span>
          <span className="hidden md:block">Social Computing & Human-AI Interaction</span>
          <span>Email： tangxy2001@gmail.com</span>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="container mx-auto px-10 py-6 mt-12 double-border-top flex justify-center font-mono text-[11px] uppercase tracking-widest opacity-80 no-print">
    <span>Address: No. 1 Xinkang Street, Haidian District, Beijing, China 100000</span>
  </footer>
);

const CVPage = () => {
  return (
    <div className="container mx-auto px-10 pt-12 pb-20 max-w-4xl">
      <div className="text-center mb-8 no-print">
        <button 
          onClick={() => window.print()} 
          className="newspaper-border border px-6 py-2 bg-ink text-paper hover:bg-paper hover:text-ink transition-all font-bold uppercase tracking-widest text-sm"
        >
          Print / Save as PDF
        </button>
      </div>

      <article className="bg-white p-12 shadow-xl border border-ink/5 font-serif text-[#111] leading-snug">
        <div className="text-center border-b-2 border-ink pb-6 mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">Xinyi Tang (唐鑫夷)</h1>
          <p className="text-sm">
            Email: tangxy2001@gmail.com | Phone: +86 190-7148-1945
          </p>
          <p className="text-sm">
            Address: No. 1 Xinkang Street, Haidian District, Beijing, China 100000
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Education</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold">Beijing Normal University, Beijing, China</p>
                <p className="italic">Master of Arts, School of Arts and Media</p>
                <p className="text-sm mt-1">Supervisor: Prof. Lun Zhang</p>
                <p className="text-xs opacity-80 mt-1 uppercase max-w-2xl">Thesis: Imagining the Media Roles of Conversational AI: A Computational Grounded Theory Study with Multi-Agent Frameworks</p>
              </div>
              <span className="font-mono text-sm">2023 – 2026</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold">Communication University of China, Beijing, China</p>
                <p className="italic">Bachelor of Engineering, School of Information and Communication Engineering</p>
                <p className="text-sm mt-1">Academic supervisor in the Excellence Program: Prof. Fulian Yin</p>
                <p className="text-xs opacity-80 mt-1 uppercase max-w-2xl">Thesis: Dynamics of information propagation and intervention in the multi-platform coupled networks</p>
              </div>
              <span className="font-mono text-sm">2019 – 2023</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Honors & Awards</h2>
          <ul className="text-sm space-y-2">
            {[
              ['First-Class Academic Scholarship, Beijing Normal University', '2025'],
              ['Outstanding Graduate in Beijing, China', '2023'],
              ['Outstanding Graduate at Communication University of China', '2023'],
              ['Second Prize, National Mathematical Modeling Contest (Beijing Division)', '2021'],
              ['Multiple scholarships, Communication University of China (incl. First-Class Academic Scholarship, Outstanding Student Leader Scholarship, etc.)', '2019 – 2023'],
            ].map(([award, year], i) => (
              <li key={i} className="flex justify-between">
                <span>{award}</span>
                <span className="font-mono">{year}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Research Interests</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-bold">Human-AI Social Interaction</p>
              <p className="opacity-80">I study how users develop attitudes toward AI agents and how these attitudes give rise to new forms of human-AI relationships. Examining motivations, cultural conditions, and emergent relational forms.</p>
            </div>
            <div>
              <p className="font-bold">AI-Augmented Social Science Methodology</p>
              <p className="opacity-80">Developing mixed-method approaches integrating computational techniques with qualitative inquiry (LLM-assisted content analysis, multi-agent frameworks).</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Technical Skills</h2>
          <div className="text-sm space-y-2">
            <p><strong>Qualitative:</strong> Grounded theory method, semi-structured interviewing</p>
            <p><strong>Computational:</strong> NLP, LLM-based multi-agent system design, data mining, statistical analysis</p>
            <p><strong>Programming:</strong> Python, R, HTML/CSS/JavaScript, Vibe Coding</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Teaching Experience</h2>
          <div className="flex justify-between text-sm italic">
            <span>Teaching Assistant: Vibe Coding with AI, Beijing Normal University</span>
            <span className="font-mono">2024 – 2025</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Research Experience</h2>
          <div className="space-y-5 text-sm">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Human-AI Social Interaction on Social Media</p>
                  <p className="italic opacity-80">Principal Investigator</p>
                </div>
                <span className="font-mono">2023 – 2025</span>
              </div>
              <ul className="mt-2 space-y-1 opacity-80 list-disc list-inside">
                <li>Investigated how users perceive and construct social relationships with conversational AI agents</li>
                <li>Conducted semi-structured interviews to explore early adopters' practices in human-AI interactions</li>
                <li>Extended the inquiry through large-scale analysis of user-generated content on Xiaohongshu (RedNote), integrating computational techniques with grounded theory methodology</li>
                <li>Designed an LLM-based multi-agent framework for computational grounded theory</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">Data-Driven Simulation of Public Opinion Dynamics on Social Media</p>
                  <p className="italic opacity-80">Project Leader, National Innovation and Entrepreneurship Training Program</p>
                </div>
                <span className="font-mono">2021 – 2023</span>
              </div>
              <ul className="mt-2 space-y-1 opacity-80 list-disc list-inside">
                <li>Built simulation models of public opinion propagation across multiple social media platforms</li>
                <li>Modeled coupled dynamics of information diffusion and emotional contagion during public emergencies</li>
                <li>Investigated intervention strategies for opinion governance</li>
                <li>Developed methods for evaluating propagation patterns, resulting in three national invention patents</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Industry & Product Experience</h2>
          <div className="space-y-5 text-sm">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">China Telecom System Integration Co., Ltd.</p>
                  <p className="italic opacity-80">Product Manager Intern</p>
                </div>
                <span className="font-mono">2023</span>
              </div>
              <ul className="mt-2 space-y-1 opacity-80 list-disc list-inside">
                <li>Managed big data products in the public security sector, supporting government agencies and courts in social risk governance</li>
                <li>Authored product requirement documents and designed product prototypes for public opinion risk monitoring and early warning systems</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">National Key R&D Program of China (No. 2021YFF0901705)</p>
                  <p className="italic opacity-80">Core R&D Member — Sub-project: Application and Demonstration of Cultural Resource Reuse and Big Data Services</p>
                </div>
                <span className="font-mono">2021 – 2023</span>
              </div>
              <ul className="mt-2 space-y-1 opacity-80 list-disc list-inside">
                <li>Conducted industry analysis of digital cultural products, surveying market landscape and practices</li>
                <li>Authored the design proposal for film and television digital cultural products</li>
                <li>Collected film and television data through web scraping and performed data mining and analysis</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-bold uppercase border-b border-ink/30 mb-4 pb-1">Academic Service</h2>
          <ul className="text-sm space-y-1">
            <li>Peer Reviewer: Information Processing & Management (SCI TOP)</li>
            <li>Reviewer: ICA 2025</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

const AboutPage = ({ onPublicationClick }: { onPublicationClick: () => void }) => {
  const recentPubs = PUBLICATIONS.filter(p => parseInt(p.year) >= 2025).slice(0, 3);

  return (
    <div className="container mx-auto px-10 pt-8">
      <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
        {/* Left column */}
        <div className="column-border-right space-y-10">
          <div className="profile-box">
            <div className="aspect-[1/1.2] bg-[#e0ddd5] newspaper-border border mb-4 overflow-hidden">
              <img
                src="/photo.jpg"
                alt="Xinyi Tang"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 text-[13px] underline leading-relaxed pb-4">
              <a href="https://github.com/tangxy2001-sketch" target="_blank" rel="noopener noreferrer" className="block hover:opacity-70">GitHub: tangxy2001-sketch</a>
              <a href="https://scholar.google.com/citations?hl=en&tzom=-480&user=eXAGUVgAAAAJ" target="_blank" rel="noopener noreferrer" className="block hover:opacity-70">Google Scholar: Xinyi Tang</a>
            </div>
            <a
              href="/Xinyi_Tang_CV.pdf"
              download="Xinyi_Tang_CV.pdf"
              className="w-full newspaper-border border py-2 bg-ink text-paper hover:bg-paper hover:text-ink transition-all font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2"
            >
              CV [PDF] <FileText size={14} />
            </a>
          </div>

          <section>
            <h3 className="section-title text-black font-black uppercase text-lg mb-4 border-b border-ink/10 pb-1">Education</h3>
            <ul className="space-y-4 text-[13px]">
              <li>
                <strong>Beijing Normal University</strong><br />
                <span className="italic opacity-70 font-serif">M.A., Arts and Media (2023 – 2026)</span><br />
                <span className="opacity-60 font-serif">Supervisor: Prof. Lun Zhang</span>
              </li>
              <li>
                <strong>Comm. University of China</strong><br />
                <span className="italic opacity-70 font-serif">B.Eng., Information and Communication Engineering (2019 – 2023)</span><br />
                <span className="opacity-60 font-serif">Supervisor: Prof. Fulian Yin (Excellence Program)</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Right column */}
        <div>
          <h2 className="text-3xl font-display mb-4 border-b border-ink pb-2 uppercase font-black">Societal AI: The New Frontier</h2>
          <div className="text-[15px] leading-relaxed text-justify mb-8 space-y-4 font-serif">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2">
              My research asks how people form emotional and social relationships with AI. I call the current agenda <strong>Societal AI</strong>: a response to the observation that AI is becoming a gatekeeper in domains like mental health, often before anyone is ready for that role. I approach the question across three layers: <strong>(1) understand how people navigate and construct relationships with AI systems; (2) simulate the social ecology around mental health through multi-agent frameworks; and (3) build AI infrastructure that bridges everyday distress and professional care.</strong>
            </p>
            <p>
              Outside research, I enjoy <em className="italic">Vibe Coding</em>: prototyping workflows and product tools with AI. I also served as a Teaching Assistant for the Vibe Coding with AI course at BNU.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-8 pt-8 border-t border-ink">
            <section>
              <div className="flex justify-between items-center mb-4 uppercase font-black text-lg">
                Recent Publications
                <button onClick={onPublicationClick} className="text-[10px] underline cursor-pointer lowercase italic">View All &rarr;</button>
              </div>
              <ul className="space-y-4 text-[13px]">
                {recentPubs.map((pub) => (
                  <li key={pub.id} className="leading-tight">
                    <strong className="block mb-1">{pub.title}</strong>
                    <em className="italic opacity-70 font-serif">{pub.venue}</em>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <div>
                <h3 className="uppercase font-black text-lg mb-2">Academic Service</h3>
                <ul className="text-[13px] space-y-1 italic opacity-80 font-serif">
                  <li>TA: Vibe Coding with AI (BNU)</li>
                  <li>Reviewer: Information Processing & Management (SCI TOP)</li>
                  <li>Reviewer: ICA 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="uppercase font-black text-lg mb-2">Honors</h3>
                <ul className="text-[13px] space-y-1 italic opacity-80 font-serif">
                  <li>First-Class Academic Scholarship, BNU (2025)</li>
                  <li>Outstanding Graduate in Beijing (2023)</li>
                  <li>Outstanding Graduate, CUC (2023)</li>
                  <li>Second Prize, National Math Modeling Contest (2021)</li>
                  <li>Multiple scholarships, CUC (2019–2023)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const PublicationPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Societal AI', 'AI-Augmented Social Science Methodology', 'Public Opinion'];

  const filteredPubs = filter === 'All' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.categories.includes(filter));

  return (
    <div className="container mx-auto px-10 pt-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl uppercase font-display font-black mb-4">The Archive</h2>
        <div className="flex flex-wrap justify-center gap-4 border-y border-ink py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-[11px] uppercase px-4 py-1 border transition-all ${
                filter === cat 
                  ? 'bg-ink text-paper border-ink' 
                  : 'bg-transparent border-ink hover:bg-ink/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 mb-16">
        {filteredPubs.map((pub) => (
          <div 
            key={pub.id} 
            className="group relative border-b border-ink/10 pb-8 last:border-0"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-32 shrink-0">
                <span className="font-mono text-[11px] uppercase px-2 py-1 border border-ink font-bold">
                  {pub.year}
                </span>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl md:text-2xl leading-tight font-display font-black group-hover:italic transition-all uppercase underline underline-offset-4 decoration-transparent group-hover:decoration-ink">
                  {pub.title}
                </h3>
                <p className="text-sm opacity-80">{pub.authors}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-serif text-sm italic opacity-70">{pub.venue}</span>
                  {pub.status && (
                    <span className="newspaper-border border px-2 py-0.5 text-[10px] uppercase font-bold">
                      {pub.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div className="min-h-screen pb-12 overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AboutPage onPublicationClick={() => setCurrentPage('publication')} />
            </motion.div>
          ) : (
            <motion.div
              key="publication"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PublicationPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

