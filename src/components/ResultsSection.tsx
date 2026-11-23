import { AUTHOR, PROOF } from '../data/playbook';
import CaseStudy from './CaseStudy';
import './ResultsSection.css';

const ResultsSection = () => (
  <section id="proof" className="results-section">
    <div className="container">
      <div className="section-header"><span className="section-label">From my own account</span><h2 className="section-title">Small shifts.<br />A whole new audience.</h2><p className="playbook-section-description">Building from India. Learning to reach US readers. A change in audience, alongside a separate look at earnings from X.</p></div>
      <div className="playbook-proof-grid">
        <article className="playbook-proof-card"><span className="section-label">My audience, before & after</span><div className="playbook-audience-shift"><div><span>Before</span><strong>{PROOF.audienceFrom}</strong></div><span aria-hidden="true">↗</span><div><span>After</span><strong>{PROOF.audienceTo}</strong></div></div><p className="feature-description">From a mostly Indian audience to reaching US readers.</p></article>
        <article className="playbook-proof-card"><span className="section-label">Earned from X</span><p className="playbook-revenue">{PROOF.octoberRevenue}<span>USD</span></p><p className="feature-description">{PROOF.octoberRevenueMonth} · Platform earnings for one month.</p></article>
      </div>
      <p className="playbook-proof-note">Reported by <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer">{AUTHOR.name} · {AUTHOR.followers} followers on X</a>. The audience figures are two account snapshots; the earnings cover {PROOF.octoberRevenueMonth}. They measure different things and do not establish that the audience change caused the earnings.</p>
      <CaseStudy />
    </div>
  </section>
);

export default ResultsSection;
