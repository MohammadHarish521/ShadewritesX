import CaseStudy from './CaseStudy';
import './ResultsSection.css';

const results = [
  {
    id: '2021260981352210476',
    author: 'Harish',
    handle: '@Harish_521',
    avatar: 'H',
    content: "If you're a founder struggling to grow your X account, you should reach out to me.\n\nI've grown my personal account from 0 to 10.3k in just 6 months.\n\n1st client — I've also scaled another account from 400 to 2.1k in only 20 days\n\n2nd client — account from 0 to 356 followers in a month\n\nIf you're interested in my ghostwriting services, just send me a DM.",
    date: 'Feb 2026',
    likes: 142,
    retweets: 28,
    replies: 19,
  },
  {
    id: '2005723052160721047',
    author: 'Harish',
    handle: '@Harish_521',
    avatar: 'H',
    content: "If you're a founder struggling to grow your X account, you should reach out to me.\n\nI've grown my personal account from 0 to 9.7k in just 4 months.\n\nI've also scaled another account from 400 to 2.1k in only 20 days (his account was dead until 30 Oct).\n\nIf you're interested in my ghostwriting services, just send me a DM.",
    date: 'Jan 2026',
    likes: 97,
    retweets: 15,
    replies: 11,
  },
  {
    id: '1992897532922327227',
    author: 'Harish',
    handle: '@Harish_521',
    avatar: 'H',
    content: "If you're a founder struggling to grow your X account, you should reach out to me.\n\nI've grown my personal account from 0 to 8.6k in just three months.\n\nI've also scaled another account from 400 to 2.1k in only 20 days — the second image is proof.\n\nIf you're interested in my ghostwriting services, just send me a DM.",
    date: 'Jan 2026',
    likes: 234,
    retweets: 41,
    replies: 32,
  },
];

const ResultsSection = () => {
  return (
    <section className="results-section">
      <div className="container">
        <CaseStudy />
        
        <div className="section-header" style={{marginTop: '4rem'}}>
          <span className="section-label">More Success Stories</span>
          <h2 className="section-title">Latest Wins</h2>
        </div>
        <div className="results-grid">
          {results.map((post) => (
            <a
              key={post.id}
              href={`https://x.com/Harish_521/status/${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="result-card"
            >
              <div className="result-card-header">
                <div className="result-avatar">{post.avatar}</div>
                <div className="result-author-info">
                  <span className="result-author-name">{post.author}</span>
                  <span className="result-author-handle">{post.handle}</span>
                </div>
                <svg className="result-x-logo" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <p className="result-card-content" style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
              <span className="result-card-date">{post.date}</span>
              <div className="result-card-stats">
                <span className="result-stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  {post.replies}
                </span>
                <span className="result-stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                  {post.retweets}
                </span>
                <span className="result-stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
