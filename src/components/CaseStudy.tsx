import './CaseStudy.css';

const CaseStudy = () => {
    return (
        <section className="case-study">
            <div className="container">
                {/* Header */}
                <div className="case-header">
                    <span className="case-label">Featured Case Study</span>
                    <h2 className="case-title">X Account Growth Through Narrative Sequencing</h2>
                    <p className="case-subtitle">
                        How we revived a dormant account and generated 500K+ impressions in 30 days without ads.
                    </p>
                </div>

                {/* Profiles */}
                <div className="profiles-grid">
                    <div className="profile-card">
                        <div className="profile-avatar">M</div>
                        <div>
                            <div className="profile-role">Strategist</div>
                            <div className="profile-name">Mohammad Harish</div>
                            <div className="profile-desc">Growth Partner</div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-avatar" style={{backgroundColor: 'var(--emerald)'}}>N</div>
                        <div>
                            <div className="profile-role">Client</div>
                            <div className="profile-name">Nishant</div>
                            <div className="profile-desc">Web3 Developer & Founder</div>
                        </div>
                    </div>
                </div>

                {/* 30 Day Results Dashboard */}
                <div className="stats-dashboard">
                    <div className="dashboard-header">
                        <div>
                            <h3 className="dashboard-title">30 Day Performance</h3>
                            <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem'}}>Oct 31 - Nov 30 • Organic Growth</p>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <div style={{color: '#10B981', fontWeight: 'bold'}}>+8,000% Growth</div>
                        </div>
                    </div>
                    <div className="dashboard-grid">
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Impressions</span>
                            <span className="d-stat-value">504.9K</span>
                            <span className="d-stat-sub">Spike after Oct 30</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Engagement Rate</span>
                            <span className="d-stat-value">5.8%</span>
                            <span className="d-stat-sub">High Quality</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Total Engagements</span>
                            <span className="d-stat-value">29.4K</span>
                            <span className="d-stat-sub">Comments & Likes</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Profile Visits</span>
                            <span className="d-stat-value">7.6K</span>
                            <span className="d-stat-sub">High Intent</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Bookmarks</span>
                            <span className="d-stat-value">3.9K</span>
                            <span className="d-stat-sub">Save for Later</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Replies</span>
                            <span className="d-stat-value">2.8K</span>
                            <span className="d-stat-sub">Community</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Likes</span>
                            <span className="d-stat-value">8K</span>
                            <span className="d-stat-sub">Social Proof</span>
                        </div>
                        <div className="dashboard-stat">
                            <span className="d-stat-label">Verified Followers</span>
                            <span className="d-stat-value">220</span>
                            <span className="d-stat-sub">Out of 2.2K Total</span>
                        </div>
                    </div>
                </div>

                {/* Strategy Breakdown */}
                <div className="strategy-section">
                    <h3 className="section-title" style={{fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem'}}>Core Content Strategy</h3>
                    <div className="strategy-grid">
                        <div className="strategy-card">
                            <h4>Phase 1: Belief</h4>
                            <ul>
                                <li>Show long term progress</li>
                                <li>Anchor progress to time</li>
                                <li>Build belief through proof</li>
                            </ul>
                        </div>
                        <div className="strategy-card">
                            <h4>Phase 2: Credibility</h4>
                            <ul>
                                <li>Contrarian execution</li>
                                <li>Reject default paths</li>
                                <li>Establish operator status</li>
                            </ul>
                        </div>
                        <div className="strategy-card">
                            <h4>Phase 3: Activation</h4>
                            <ul>
                                <li>Shift to leadership</li>
                                <li>Validate demand</li>
                                <li>Convert attention to intent</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Post Analysis */}
                <div className="posts-analysis">
                    <h3 className="section-title" style={{fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.5rem'}}>Execution Breakdown</h3>
                    <p style={{textAlign: 'center', color: 'var(--text-subtle)', marginBottom: '2rem'}}>Strategic posts that drove the growth</p>
                    
                    <div className="posts-scroll">
                        {/* Post 1 */}
                        <div className="post-card">
                            <span className="post-header-badge">Transformation</span>
                            <h4 style={{marginBottom: '0.5rem'}}>The Anchor Post</h4>
                            <p className="post-concept">"Three years ago versus now."</p>
                            <div className="post-stats-mini">
                                <span>93K Views</span>
                                <span>1.3K Likes</span>
                                <span>8.9% Eng.</span>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="post-card">
                            <span className="post-header-badge">Contrarian</span>
                            <h4 style={{marginBottom: '0.5rem'}}>The Leveraged Path</h4>
                            <p className="post-concept">"Rejecting internships for freelancing."</p>
                            <div className="post-stats-mini">
                                <span>15K Views</span>
                                <span>263 Likes</span>
                                <span>9.0% Eng.</span>
                            </div>
                        </div>

                        {/* Post 3 */}
                        <div className="post-card">
                            <span className="post-header-badge" style={{background: '#10B981', color: 'white'}}>Viral Hit</span>
                            <h4 style={{marginBottom: '0.5rem'}}>Demand Validation</h4>
                            <p className="post-concept">"Validate demand before teaching."</p>
                            <div className="post-stats-mini">
                                <span>298K Views</span>
                                <span>5.5K Likes</span>
                                <span>2.8K Bookmarks</span>
                            </div>
                        </div>

                        {/* Post 4 */}
                        <div className="post-card">
                            <span className="post-header-badge">Resource</span>
                            <h4 style={{marginBottom: '0.5rem'}}>High Value Curation</h4>
                            <p className="post-concept">"Signal experience through curation."</p>
                            <div className="post-stats-mini">
                                <span>132K Views</span>
                                <span>1.7K Likes</span>
                                <span>724 Bookmarks</span>
                            </div>
                        </div>

                        {/* Post 5 */}
                        <div className="post-card">
                            <span className="post-header-badge">Education</span>
                            <h4 style={{marginBottom: '0.5rem'}}>Authority Thread</h4>
                            <p className="post-concept">"Convert attention into expertise."</p>
                            <div className="post-stats-mini">
                                <span>7.3K Views</span>
                                <span>6.1% Eng.</span>
                                <span>229 Bookmarks</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Insights */}
                <div className="insights-box">
                    <h3>The Formula</h3>
                    <ul className="insights-list">
                        <li>Proof builds Belief</li>
                        <li>Belief builds Trust</li>
                        <li>Trust creates Demand</li>
                        <li>Demand enables Monetization</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default CaseStudy;
