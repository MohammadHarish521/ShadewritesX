import { AUTHOR, PROOF } from '../data/services';
import CaseStudy from './CaseStudy';
import './ResultsSection.css';

const ResultsSection = () => (
  <section id="proof" className="results-section">
    <div className="container">
      <div className="section-header"><span className="section-label">From the account I write for myself</span><h2 className="section-title">The same work<br />I do for clients.</h2><p className="playbook-section-description">I write from India and use my own account as the proof. Audience shift below, then a separate look at what X paid that month.</p></div>
      <div className="playbook-proof-grid">
        <article className="playbook-proof-card"><span className="section-label">My audience, before and after</span><div className="playbook-audience-shift"><div><span>Before</span><strong>{PROOF.audienceFrom}</strong></div><span className="playbook-shift-arrow" aria-hidden="true">→</span><div><span>After</span><strong>{PROOF.audienceTo}</strong></div></div><p className="feature-description">From a mostly Indian audience to a larger share of US readers.</p></article>
        <article className="playbook-proof-card"><span className="section-label">Earned on my account</span><p className="playbook-revenue">{PROOF.octoberRevenue}<span>USD</span></p><p className="feature-description">{PROOF.octoberRevenueMonth} · Platform earnings for one month. This is my account, not a client payout.</p></article>
      </div>
      <p className="playbook-proof-note">Reported by <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer">{AUTHOR.name} · {AUTHOR.followers} followers on X</a>. The audience figures are two snapshots of my account. The earnings cover {PROOF.octoberRevenueMonth}. They measure different things, and the audience change is not presented as the cause of the earnings.</p>
      <CaseStudy />
    </div>
  </section>
);

export default ResultsSection;
