import { CASE_STUDIES } from '../data/services';
import './CaseStudy.css';

const CaseStudy = () => (
  <div className="playbook-case-studies">
    <div className="case-header"><span className="case-label">Client accounts</span><h3 className="case-title">Accounts I write for.</h3><p className="case-subtitle">Two founders. Reported results for the period behind each number. Names stay private.</p></div>
    {CASE_STUDIES.map((study, index) => (
      <article className="stats-dashboard" key={study.id}>
        <div className="dashboard-header"><div><p className="playbook-case-identity">Client 0{index + 1} · Identity kept private</p><h4 className="dashboard-title">{study.summary}</h4><p className="playbook-case-period">{study.period}</p></div></div>
        <dl className="dashboard-grid">{study.stats.map((stat) => <div className="dashboard-stat" key={stat.label}><dt className="d-stat-label">{stat.label}</dt><dd className="d-stat-value">{stat.value}</dd><dd className="d-stat-sub">{stat.note}</dd></div>)}</dl>
      </article>
    ))}
    <p className="playbook-proof-note">Client-reported figures for the periods shown. Percentage changes are shown where supplied. Impressions count views, not unique people. Starting points differ, and these numbers are not a forecast for the next account.</p>
  </div>
);

export default CaseStudy;
