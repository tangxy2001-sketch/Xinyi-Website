/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText } from 'lucide-react';
import { PUBLICATIONS, type Publication, type ResearchInterest } from './data.ts';

// --- Components ---

const Header = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (p: string) => void }) => {
  return (
    <header className="container mx-auto px-10 py-5 double-border-bottom no-print">
      <nav aria-label="Primary navigation" className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
        {[
          { id: 'about', label: 'About' },
          { id: 'publication', label: 'Publications' },
          { id: 'product', label: 'Product' }
        ].map(({ id, label }) => {
          const isCurrent = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`py-1 transition-opacity ${isCurrent ? 'font-bold underline underline-offset-4' : 'opacity-60 hover:opacity-100'}`}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

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

const AboutPage = ({ onRelatedPublications, onPublicationClick, onProductClick }: { onRelatedPublications: (interest: ResearchInterest) => void; onPublicationClick: () => void; onProductClick: () => void }) => {
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
              <a href="mailto:tangxy2001@gmail.com" className="block hover:opacity-70">Email: tangxy2001@gmail.com</a>
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

          <section>
            <h3 className="section-title text-black font-black uppercase text-lg mb-4 border-b border-ink/10 pb-1">Academic Service</h3>
            <div className="space-y-4 text-[13px] leading-snug">
              <div><h4 className="font-bold normal-case tracking-normal">Teaching Assistant</h4><p className="italic opacity-70">Vibe Coding with AI, Beijing Normal University (2024 – 2025)</p></div>
              <div>
                <h4 className="font-bold normal-case tracking-normal">Reviewer</h4>
                <ul className="italic opacity-70 space-y-1">
                  <li><a href="https://www.sciencedirect.com/journal/information-processing-and-management" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60">Information Processing &amp; Management</a></li>
                  <li><a href="https://www.sciencedirect.com/journal/physica-d-nonlinear-phenomena" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60">Physica D: Nonlinear Phenomena</a></li>
                  <li>ICA 2025 Annual Conference (Human-Machine Communication Interest Group)</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Right column */}
        <div>
          <h2 className="text-3xl font-display mb-4 border-b border-ink pb-2 font-black normal-case">Xinyi Tang（唐鑫夷）</h2>
          <div className="text-[15px] leading-relaxed text-justify mb-8 space-y-6 font-serif">
            <p>I recently graduated from BNU and am now preparing PhD applications. I have built research foundations in <strong>HCI</strong> and <strong>Social Computing</strong>. Feel free to <button onClick={onPublicationClick} className="font-bold underline underline-offset-4 hover:opacity-60">explore my publications →</button>.</p>
            <p>In my spare time, I enjoy joining AI hackathons and exploring how research can become real products. <button onClick={onProductClick} className="font-bold underline underline-offset-4 hover:opacity-60">See what I’m building →</button>.</p>
          </div>

          <section className="mt-8 border-2 border-ink bg-[#eee9dd] p-6 md:p-8 shadow-[5px_5px_0_#1a1a1a]">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink pb-3 mb-5">
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.16em]">📌 Current Research</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">Summer 2026</span>
            </div>
            <div className="space-y-4 text-[14px] leading-relaxed">
              <p>👨‍👩‍👧 My current research focuses on <strong>AI for Families</strong>: (1) understanding how AI shapes family relationships and everyday care, and (2) building and designing human-centered AI systems that support coordination and more equitable caregiving. I have completed several pilot studies—<button onClick={() => onRelatedPublications('family-ai')} className="font-bold underline underline-offset-4 hover:opacity-60">explore related publications →</button>. Collaborations are welcome! 👏</p>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-ink">
            <h3 className="uppercase font-black text-lg mb-4">Honors &amp; Awards</h3>
            <ul className="space-y-3 text-[13px] leading-snug">
              <li><strong>Master's Thesis Recognized as Outstanding</strong><br /><span className="italic opacity-70">Beijing Normal University (2026)</span></li>
              <li><strong>Third Prize, Outstanding Paper Award</strong><br /><span className="italic opacity-70">2nd International Research Workshop on Human-Machine Communication, Psychology, and Social Change (2026)</span></li>
              <li>First-Class Academic Scholarship<br /><span className="italic opacity-70">Beijing Normal University (2025)</span></li>
              <li>Second-Class Academic Scholarship<br /><span className="italic opacity-70">Beijing Normal University (2024)</span></li>
              <li><strong>Outstanding Graduate in Beijing</strong><br /><span className="italic opacity-70">Beijing, China (2023)</span></li>
              <li>Outstanding Graduate<br /><span className="italic opacity-70">Communication University of China (2023)</span></li>
              <li>Second Prize, National Mathematical Modeling Contest<br /><span className="italic opacity-70">Beijing Division (2021)</span></li>
              <li>Multiple scholarships<br /><span className="italic opacity-70">Communication University of China (2019–2023)</span><br /><span className="text-[12px] opacity-70">Including First-Class Academic Scholarship, Outstanding Student Leader Scholarship, and others</span></li>
            </ul>
          </section>

          <section className="mt-8 pt-8 border-t border-ink">
            <h3 className="uppercase font-black text-lg mb-4">Latest News</h3>
            <ul className="space-y-5 text-[13px] leading-relaxed">
              <li><strong>[07/2026]</strong> I was selected for <a href="https://sicss.io/2026/singapore/people" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60">SICSS-Singapore</a>, hosted by NUS. ✌️</li>
              <li><strong>[06/2026]</strong> I received my master's degree from Beijing Normal University, with my thesis recognized as outstanding. 🎓</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

const RESEARCH_TRACKS: Record<ResearchInterest, { label: string; shortLabel: string; description: string }> = {
  'family-ai': {
    label: 'AI for Families, Family Relationships, and Human-Centered AI Design',
    shortLabel: 'AI for Families',
    description: 'Pilot studies on human-AI relationships, conversational AI, and human-centered AI design.'
  },
  'social-computing': {
    label: 'Social Computing & Public Opinion',
    shortLabel: 'Social Computing',
    description: 'Research on media infrastructure, information diffusion, and public opinion dynamics.'
  }
};

const PublicationPage = ({ selectedInterest }: { selectedInterest: ResearchInterest | null }) => {
  const [interestFilter, setInterestFilter] = useState<ResearchInterest | 'all'>(selectedInterest ?? 'all');

  useEffect(() => {
    setInterestFilter(selectedInterest ?? 'all');
  }, [selectedInterest]);

  const filteredPubs = PUBLICATIONS.filter((pub) =>
    interestFilter === 'all' || pub.researchInterests.includes(interestFilter)
  );
  const groupedPubs = filteredPubs.reduce<Record<string, Publication[]>>((groups, pub) => {
    (groups[pub.year] ??= []).push(pub);
    return groups;
  }, {});
  const years = Object.keys(groupedPubs).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container mx-auto px-10 pt-12 pb-16">
      <div className="max-w-5xl mx-auto mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3">Research archive</p>
        <h2 className="text-5xl uppercase font-display font-black mb-5">Publications</h2>
        <p className="font-serif text-[16px] leading-relaxed max-w-4xl">I integrate computational and qualitative methods to study social computing and human-AI communication, translating research insights into AI for families. Collaborations are welcome! 👏</p>
      </div>

      <section className="max-w-5xl mx-auto border-y border-ink py-6 mb-10">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em]">Browse by research interest</h3>
          <span className="text-[12px] italic opacity-60">{filteredPubs.length} works</span>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <button onClick={() => setInterestFilter('all')} className={`text-left border p-5 transition-colors ${interestFilter === 'all' ? 'bg-ink text-paper border-ink' : 'border-ink hover:bg-ink/5'}`}>
            <span className="block font-mono text-[10px] uppercase tracking-widest mb-2">01 / Overview</span>
            <span className="block font-display text-xl font-black normal-case tracking-normal">All publications</span>
            <span className="block text-[13px] leading-relaxed mt-2 opacity-75">Browse the complete record across all research areas.</span>
          </button>
          {(Object.entries(RESEARCH_TRACKS) as Array<[ResearchInterest, typeof RESEARCH_TRACKS[ResearchInterest]]>).map(([id, track], index) => (
            <button key={id} onClick={() => setInterestFilter(id)} className={`text-left border p-5 transition-colors ${interestFilter === id ? 'bg-ink text-paper border-ink' : 'border-ink hover:bg-ink/5'}`}>
              <span className="block font-mono text-[10px] uppercase tracking-widest mb-2">0{index + 2} / Research path</span>
              <span className="block font-display text-xl font-black normal-case tracking-normal">{track.shortLabel}</span>
              <span className="block text-[13px] leading-relaxed mt-2 opacity-75">{track.description}</span>
            </button>
          ))}
        </div>
        {interestFilter !== 'all' && <p className="mt-4 text-[12px] italic opacity-70">Showing: {RESEARCH_TRACKS[interestFilter].label}</p>}
      </section>

      <div className="max-w-5xl mx-auto space-y-12">
        {years.map((year, yearIndex) => (
          <section key={year} className="md:grid md:grid-cols-[120px_1fr] md:gap-10">
            <div className="mb-5 md:mb-0">
              <h3 className="font-mono text-xl font-bold md:sticky md:top-6">{year}</h3>
            </div>
            <div className="space-y-8">
              {groupedPubs[year].map((pub, publicationIndex) => (
                <article key={pub.id} className={`group pb-8 ${yearIndex === years.length - 1 && publicationIndex === groupedPubs[year].length - 1 ? '' : 'border-b border-ink/10'}`}>
                  <h4 className="text-xl md:text-2xl leading-tight font-display font-black normal-case tracking-normal group-hover:italic transition-all">{pub.title}</h4>
                  {pub.authors && <p className="text-sm opacity-80 mt-3">{pub.authors}</p>}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3"><span className="font-serif text-sm italic opacity-70">{pub.venue}</span>{pub.status && <span className="newspaper-border border px-2 py-0.5 text-[10px] uppercase font-bold">{pub.status}</span>}</div>
                  {pub.tags && <div className="flex flex-wrap gap-2 mt-4">{pub.tags.map((tag) => <span key={tag} className="border border-ink/30 px-2 py-0.5 font-mono text-[10px] uppercase">{tag}</span>)}</div>}
                </article>
              ))}
            </div>
          </section>
        ))}
        {filteredPubs.length === 0 && <p className="text-center italic opacity-70">No publications match this selection.</p>}
      </div>
    </div>
  );
};

const ProductPage = () => (
  <div className="container mx-auto px-10 pt-12 pb-16">
    <div className="max-w-5xl mx-auto mb-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3">Product archive</p>
      <h2 className="text-5xl uppercase font-display font-black mb-5">Product</h2>
      <p className="font-serif text-[16px] leading-relaxed max-w-4xl">I am learning to become an AI full-stack engineer and building in public—explore my product work below or <a href="https://xhslink.com/m/3NnDASauf5E" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60">follow my journey on Xiaohongshu ↗</a>. 👏</p>
    </div>
    <div className="max-w-5xl mx-auto border-t border-ink pt-8 space-y-12">
      <section className="md:grid md:grid-cols-[120px_1fr] md:gap-10">
        <div className="mb-5 md:mb-0"><h3 className="font-mono text-xl font-bold md:sticky md:top-6">2026</h3></div>
        <article className="group border-b border-ink/10 pb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between"><div><h4 className="text-xl md:text-2xl leading-tight font-display font-black normal-case tracking-normal group-hover:italic transition-all">NearbyLove × CommunitySense</h4><p className="italic opacity-70 mt-2">Product Manager</p></div><a href="https://nearbylove.github.io/nearby_demo" target="_blank" rel="noopener noreferrer" className="shrink-0 font-mono text-[11px] uppercase underline underline-offset-4 hover:opacity-60">Live demo ↗</a></div>
          <p className="mt-5 text-[15px] leading-relaxed max-w-3xl">A community-oriented AI service system inspired by Biao Xiang's concept of “the nearby.” It connects residents, property managers, neighborhood committees, and local governments through AI-assisted coordination and privacy-preserving public-space sensing, supporting mutual aid, collective action, and everyday community connection.</p>
        </article>
      </section>
      <section className="md:grid md:grid-cols-[120px_1fr] md:gap-10">
        <div className="mb-5 md:mb-0"><h3 className="font-mono text-xl font-bold md:sticky md:top-6">2023</h3></div>
        <article>
          <h4 className="text-xl md:text-2xl leading-tight font-display font-black normal-case tracking-normal">Social Computing Systems for Governance</h4>
          <p className="italic opacity-70 mt-2">Product Manager Intern, China Telecom System Integration Co., Ltd.</p>
          <p className="mt-5 text-[15px] leading-relaxed max-w-3xl">Designed product prototypes and requirements for social-computing systems used by judicial and public-security agencies, translating research on public-opinion dynamics into operational tools for institutional users.</p>
        </article>
      </section>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [publicationInterest, setPublicationInterest] = useState<ResearchInterest | null>(null);

  return (
    <div className="min-h-screen pb-12 overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={(page) => {
        setCurrentPage(page);
        if (page === 'publication') setPublicationInterest(null);
      }} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AboutPage onRelatedPublications={(interest) => {
                setPublicationInterest(interest);
                setCurrentPage('publication');
              }} onPublicationClick={() => {
                setPublicationInterest(null);
                setCurrentPage('publication');
              }} onProductClick={() => setCurrentPage('product')} />
            </motion.div>
          ) : currentPage === 'publication' ? (
            <motion.div
              key={`publication-${publicationInterest ?? 'all'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PublicationPage selectedInterest={publicationInterest} />
            </motion.div>
          ) : (
            <motion.div
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
