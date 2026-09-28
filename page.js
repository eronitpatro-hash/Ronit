'use client';

import { useState } from 'react';
import { ArrowUpRight, BarChart3, BookOpen, Bot, CheckCircle2, ChevronDown, FileSpreadsheet, Landmark, Mail, Menu, ReceiptIndianRupee, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';

const stats = [
  ['₹250Cr+', 'Meta reconciliation'],
  ['₹60Cr+', 'Google reconciliation'],
  ['₹300Cr', 'Turnover supported'],
  ['10th', 'Monthly bookkeeping close'],
];

const work = [
  { icon: BarChart3, title: 'Reconciliation', text: 'Daily Meta and Google reconciliation, invoice and payment matching, variance analysis, bank and credit-card reconciliation.' },
  { icon: BookOpen, title: 'Bookkeeping', text: 'Purchase-focused bookkeeping and accounting operations, with monthly books completed and closed by the 10th of the following month.' },
  { icon: ReceiptIndianRupee, title: 'GST & TDS', text: 'Monthly GST and TDS workings, data validation, ITC reconciliation and preparation of compliance files from accounting data.' },
  { icon: Bot, title: 'Finance Automation', text: 'AI-assisted workflows using Claude, Supermetrics, Metabase and Zoho Books to reduce repetitive manual finance work.' },
];

const projects = [
  { number: '01', tag: 'AUDIT / RECONCILIATION', title: 'Meta / Facebook — ₹250Cr+', text: 'Worked on audit-related reconciliation across transaction, invoice, card and receipt data, including seller and ad-account level checks and variance investigation.' },
  { number: '02', tag: 'AUDIT / RECONCILIATION', title: 'Google — ₹60Cr+', text: 'Worked on Google reconciliation across advertising spend, invoices, credit notes, seller billing, books and payment/card data.' },
  { number: '03', tag: 'MONTHLY FINANCE OPERATIONS', title: 'Books → Compliance', text: 'Complete purchase bookkeeping before the monthly close, then use the accounting data to prepare GST and TDS workings and compliance-ready files.' },
];

const automation = [
  ['Claude AI', 'Built agents/workflows for TDS and GST working preparation and used browser automation for repetitive finance tasks.'],
  ['Supermetrics', 'Automated recurring Meta and Google data extraction used in daily reconciliation workflows.'],
  ['Metabase', 'Pulled internal company reports directly, reducing manual report collection and intervention.'],
  ['Zoho Books', 'Used bookkeeping data as the source for reconciliation, GST and TDS analysis and monthly compliance workings.'],
];

const skills = ['Bookkeeping', 'Purchase Accounting', 'Meta Reconciliation', 'Google Reconciliation', 'Bank Reconciliation', 'Credit Card Reconciliation', 'GST Compliance', 'GSTR-2B', 'GSTR-3B', 'ITC Reconciliation', 'TDS Compliance', 'TDS Workings', 'Audit Support', 'MIS & Reporting', 'Claude AI', 'Supermetrics', 'Metabase', 'Zoho Books', 'Excel'];

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ['About', 'Experience', 'Projects', 'Automation', 'Contact'];
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">RP<span>.</span></a>
        <div className="desktopNav">{nav.map(n => <a key={n} href={'#'+n.toLowerCase()}>{n}</a>)}</div>
        <a className="navCta" href="#contact">Let’s connect <ArrowUpRight size={16}/></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="menu">{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="mobileNav">{nav.map(n => <a onClick={()=>setOpen(false)} key={n} href={'#'+n.toLowerCase()}>{n}</a>)}</div>}

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><span className="dot"/> FINANCE · ACCOUNTING · AUTOMATION</div>
          <h1>Finance, reconciled.<br/><em>Processes, automated.</em></h1>
          <p className="lead">I’m <strong>Ronit Patro</strong>, a Finance & Accounting professional working across bookkeeping, high-value reconciliation, GST & TDS compliance, audit support and AI-driven finance automation.</p>
          <div className="heroBtns"><a className="primary" href="#experience">Explore my work <ArrowUpRight size={17}/></a><a className="secondary" href="#contact">Contact me</a></div>
          <div className="availability"><span/> Open to building smarter finance workflows</div>
        </div>
        <div className="heroVisual">
          <div className="orb"><div className="orbInner"><span>FINANCE</span><b>×</b><span>AUTOMATION</span></div></div>
          <div className="floatCard card1"><small>RECONCILIATION</small><strong>₹310Cr+</strong><span>Meta + Google projects</span></div>
          <div className="floatCard card2"><small>MONTHLY CLOSE</small><strong>10th</strong><span>Books completed by following month</span></div>
        </div>
      </section>

      <section className="stats">{stats.map(([a,b])=><div className="stat" key={b}><strong>{a}</strong><span>{b}</span></div>)}</section>

      <section className="section" id="about">
        <div className="sectionHead"><span>01 / ABOUT</span><h2>More than reconciliation.</h2></div>
        <div className="aboutGrid"><p className="bigText">My work sits at the intersection of <strong>accounting, compliance, data and technology.</strong> I handle recurring finance operations while continuously looking for ways to remove unnecessary manual steps.</p><div className="aboutBox"><Sparkles/><p>From purchase bookkeeping and monthly tax workings to large-value reconciliations and AI-assisted workflows, I focus on making finance processes <strong>accurate, repeatable and efficient.</strong></p></div></div>
      </section>

      <section className="section dark" id="experience">
        <div className="sectionHead light"><span>02 / WHAT I DO</span><h2>Core finance operations.</h2></div>
        <div className="workGrid">{work.map(({icon:Icon,title,text})=><div className="workCard" key={title}><Icon size={23}/><h3>{title}</h3><p>{text}</p><div className="line"/></div>)}</div>
        <div className="closeNote"><CheckCircle2/><div><strong>Monthly close discipline</strong><p>Purchase and bookkeeping activities are completed and books are ready by the 10th of the following month, supporting timely GST and TDS compliance.</p></div></div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHead"><span>03 / SELECTED WORK</span><h2>Scale, accuracy & control.</h2></div>
        <div className="projectList">{projects.map(p=><article className="project" key={p.number}><div className="projectNo">{p.number}</div><div><span className="tag">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p></div><ArrowUpRight className="projectArrow"/></article>)}</div>
      </section>

      <section className="section automation" id="automation">
        <div className="sectionHead"><span>04 / AUTOMATION</span><h2>I automate the repetitive.</h2></div>
        <p className="automationIntro">I use technology not as a replacement for finance judgment, but to reduce repetitive data collection, preparation and browser-based work—leaving more time for validation and analysis.</p>
        <div className="autoGrid">{automation.map(([title,text],i)=><div className="autoCard" key={title}><div className="autoNum">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="section skillsSection">
        <div className="sectionHead"><span>05 / TOOLKIT</span><h2>What I work with.</h2></div>
        <div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div>
      </section>

      <section className="section education"><div className="educationCard"><Landmark/><div><span>EDUCATION</span><h2>B.Com · CMA Intermediate · CMA Final</h2><p>Bachelor of Commerce from Berhampur University · CMA Intermediate cleared · CMA Final pursuing</p></div></div></section>

      <section className="contact" id="contact"><div className="contactInner"><span>06 / CONTACT</span><h2>Let’s talk about<br/><em>finance & automation.</em></h2><p>For finance, accounting, reconciliation, compliance or process-automation opportunities.</p><div className="contactBtns"><a href="mailto:YOUR_EMAIL@example.com" className="primary"><Mail size={17}/> Email me</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="secondary lightBtn">LinkedIn <ArrowUpRight size={17}/></a></div></div></section>
      <footer><span>© {new Date().getFullYear()} Ronit Patro</span><span>Finance · Accounting · Automation</span></footer>
    </main>
  );
}
