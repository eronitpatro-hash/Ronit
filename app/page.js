'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  Database,
  FileCheck2,
  Landmark,
  Mail,
  Menu,
  ReceiptIndianRupee,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

const stats = [
  ['₹250Cr+', 'Meta reconciliation'],
  ['₹60Cr+', 'Google reconciliation'],
  ['₹300Cr', 'Turnover supported'],
  ['10th', 'Monthly books close'],
];

const work = [
  {
    icon: BarChart3,
    title: 'Reconciliation',
    kicker: 'DAILY CONTROL',
    text: 'Meta and Google reconciliation, invoice and payment matching, variance analysis, bank and credit-card reconciliation.',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    kicker: 'MONTHLY CLOSE',
    text: 'Purchase-focused bookkeeping and accounting operations, with books completed and ready by the 10th of the following month.',
  },
  {
    icon: ReceiptIndianRupee,
    title: 'GST & TDS',
    kicker: 'COMPLIANCE',
    text: 'Monthly GST and TDS workings, data validation, ITC reconciliation and compliance-ready files from accounting data.',
  },
  {
    icon: Bot,
    title: 'Finance Automation',
    kicker: 'AI + DATA',
    text: 'Claude, Supermetrics, Metabase and Zoho Books used to reduce repetitive finance work and improve process consistency.',
  },
];

const projects = [
  {
    number: '01',
    tag: 'AUDIT / RECONCILIATION',
    title: 'Meta / Facebook',
    amount: '₹250Cr+',
    text: 'Worked on high-value reconciliation across transaction, invoice, card and receipt data, including account-level checks and variance investigation.',
  },
  {
    number: '02',
    tag: 'AUDIT / RECONCILIATION',
    title: 'Google',
    amount: '₹60Cr+',
    text: 'Worked on Google reconciliation across advertising spend, invoices, credit notes, seller billing, books and payment/card data.',
  },
  {
    number: '03',
    tag: 'MONTHLY FINANCE OPERATIONS',
    title: 'Books → Compliance',
    amount: '10th',
    text: 'Complete purchase bookkeeping before monthly close, then use accounting data to prepare GST and TDS workings and compliance-ready files.',
  },
];

const automation = [
  ['01', 'Claude AI', 'Built agents and browser workflows for repetitive finance tasks, including TDS and GST working preparation.'],
  ['02', 'Supermetrics', 'Connected recurring Meta and Google data extraction to support daily reconciliation workflows.'],
  ['03', 'Metabase', 'Pulled internal company reports directly, reducing manual report collection and intervention.'],
  ['04', 'Zoho Books', 'Used bookkeeping data as the source for reconciliation, GST and TDS analysis and monthly compliance workings.'],
];

const skills = [
  'Bookkeeping',
  'Purchase Accounting',
  'Meta Reconciliation',
  'Google Reconciliation',
  'Bank Reconciliation',
  'Credit Card Reconciliation',
  'GST Compliance',
  'GSTR-2B',
  'GSTR-3B',
  'ITC Reconciliation',
  'TDS Compliance',
  'TDS Workings',
  'Audit Support',
  'MIS & Reporting',
  'Claude AI',
  'Supermetrics',
  'Metabase',
  'Zoho Books',
  'Excel',
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ['About', 'Experience', 'Projects', 'Automation', 'Contact'];

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Ronit Patro home">RP<span>.</span></a>
        <div className="desktopNav">
          {nav.map((item) => <a key={item} href={'#' + item.toLowerCase()}>{item}</a>)}
        </div>
        <a className="navCta" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mobileNav">
          {nav.map((item) => (
            <a onClick={() => setOpen(false)} key={item} href={'#' + item.toLowerCase()}>{item}</a>
          ))}
        </div>
      )}

      <section className="hero" id="top">
        <div className="heroGrid" />
        <div className="heroCopy">
          <div className="eyebrow"><span className="pulse" /> FINANCE · ACCOUNTING · AUTOMATION</div>
          <div className="heroIndex">01 / 06</div>
          <h1>Finance, <span>reconciled.</span><br /><em>Processes, automated.</em></h1>
          <p className="lead">
            I&apos;m <strong>Ronit Patro</strong>, a Finance &amp; Accounting professional working across
            bookkeeping, high-value reconciliation, GST &amp; TDS compliance, audit support and AI-driven finance automation.
          </p>
          <div className="heroBtns">
            <a className="primary" href="#experience">Explore my work <ArrowUpRight size={17} /></a>
            <a className="secondary" href="#contact">Contact me</a>
          </div>
          <div className="availability"><span /> Building smarter finance workflows</div>
        </div>

        <div className="heroVisual">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="financeCore">
            <div className="coreRing"><span>FINANCE</span><b>×</b><span>AUTOMATION</span></div>
          </div>
          <div className="floatCard card1">
            <small>RECONCILIATION</small>
            <strong>₹310Cr+</strong>
            <span>Meta + Google projects</span>
          </div>
          <div className="floatCard card2">
            <small>MONTHLY CLOSE</small>
            <strong>10th</strong>
            <span>Books ready by following month</span>
          </div>
          <div className="floatMini"><Zap size={13} /> AI-assisted workflows</div>
        </div>
      </section>

      <section className="stats">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section aboutSection" id="about">
        <div className="sectionHead">
          <span>01 / ABOUT</span>
          <h2>Accounting discipline.<br /><em>Technology mindset.</em></h2>
        </div>
        <div className="aboutGrid">
          <p className="bigText">
            My work sits at the intersection of <strong>accounting, compliance, data and technology.</strong>
            I handle recurring finance operations while continuously looking for ways to remove unnecessary manual steps.
          </p>
          <div className="aboutSide">
            <div className="aboutIcon"><Sparkles size={19} /></div>
            <p>From purchase bookkeeping and monthly tax workings to large-value reconciliations and AI-assisted workflows, I focus on making finance processes <strong>accurate, repeatable and efficient.</strong></p>
            <div className="miniFacts">
              <span><b>01</b> Validate</span>
              <span><b>02</b> Reconcile</span>
              <span><b>03</b> Automate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" id="experience">
        <div className="sectionHead light">
          <span>02 / WHAT I DO</span>
          <h2>Core finance operations.</h2>
        </div>
        <div className="workGrid">
          {work.map(({ icon: Icon, title, kicker, text }) => (
            <div className="workCard" key={title}>
              <div className="workTop"><Icon size={21} /><span>{kicker}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="workArrow"><ArrowDownRight size={16} /></div>
            </div>
          ))}
        </div>
        <div className="closeNote">
          <CheckCircle2 />
          <div>
            <strong>Monthly close discipline</strong>
            <p>Purchase and bookkeeping activities are completed and books are ready by the 10th of the following month, supporting timely GST and TDS compliance.</p>
          </div>
          <span className="closeBadge">CLOSE → 10</span>
        </div>
      </section>

      <section className="section projectsSection" id="projects">
        <div className="sectionHead">
          <span>03 / SELECTED WORK</span>
          <h2>Scale, accuracy &amp; control.</h2>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="projectNo">{project.number}</div>
              <div className="projectMain">
                <span className="tag">{project.tag}</span>
                <h3>{project.title} <b>{project.amount}</b></h3>
                <p>{project.text}</p>
              </div>
              <ArrowUpRight className="projectArrow" />
            </article>
          ))}
        </div>
      </section>

      <section className="section processSection">
        <div className="sectionHead">
          <span>04 / FINANCE FLOW</span>
          <h2>From books to compliance.</h2>
        </div>
        <div className="processFlow">
          {[
            [BookOpen, '01', 'BOOKS', 'Purchase & bookkeeping'],
            [BarChart3, '02', 'RECON', 'Bank · card · Meta · Google'],
            [ShieldCheck, '03', 'TAX', 'GST · ITC · TDS'],
            [FileCheck2, '04', 'REPORT', 'MIS · workings · close'],
          ].map(([Icon, no, title, text], i) => (
            <div className="processItem" key={title}>
              <div className="processIcon"><Icon size={20} /></div>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              {i < 3 && <ChevronRight className="processChevron" size={18} />}
            </div>
          ))}
        </div>
      </section>

      <section className="section automation" id="automation">
        <div className="automationHeader">
          <div className="sectionHead">
            <span>05 / AUTOMATION</span>
            <h2>I automate the repetitive.</h2>
          </div>
          <div className="automationMark"><Bot size={25} /><span>FINANCE × AI</span></div>
        </div>
        <p className="automationIntro">
          I use technology not as a replacement for finance judgment, but to reduce repetitive data collection,
          preparation and browser-based work—leaving more time for validation and analysis.
        </p>
        <div className="autoGrid">
          {automation.map(([no, title, text]) => (
            <div className="autoCard" key={title}>
              <div className="autoNum">{no}</div>
              <div className="autoIcon"><Workflow size={17} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section skillsSection">
        <div className="sectionHead">
          <span>06 / TOOLKIT</span>
          <h2>What I work with.</h2>
        </div>
        <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section education">
        <div className="educationCard">
          <div className="educationIcon"><Landmark size={22} /></div>
          <div>
            <span>EDUCATION</span>
            <h2>B.Com · CMA Intermediate · CMA Final</h2>
            <p>Bachelor of Commerce from Berhampur University · CMA Intermediate cleared · CMA Final pursuing</p>
          </div>
          <div className="educationBadge">FINANCE</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactGlow" />
        <div className="contactInner">
          <span>LET&apos;S CONNECT</span>
          <h2>Let&apos;s talk about<br /><em>finance &amp; automation.</em></h2>
          <p>For finance, accounting, reconciliation, compliance or process-automation opportunities.</p>
          <div className="contactBtns">
            <a href="mailto:YOUR_EMAIL@example.com" className="primary"><Mail size={17} /> Email me</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="secondary lightBtn">LinkedIn <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Ronit Patro</span>
        <span>Finance · Accounting · Automation</span>
      </footer>
    </main>
  );
}
