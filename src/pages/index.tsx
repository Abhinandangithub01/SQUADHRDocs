import type { ReactNode } from 'react';
import React from 'react';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">
        <span className="squad">SQUAD</span>
        <span className="sep">|</span>
        <span className="hr">HR</span>
      </div>
      <h1>How can we help?</h1>
      <p className="hero-sub">
        Explore our comprehensive documentation for SQUAD HR modules,<br />
        from attendance tracking to performance management.
      </p>
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input className="search-input" type="text" placeholder="Search for articles, guides, and more..." />
        <button className="search-btn">Search</button>
      </div>
      <div className="quick-links">
        <a className="quick-link" href="#">Getting Started</a>
        <a className="quick-link" href="#">Attendance Setup</a>
        <a className="quick-link" href="#">Payroll Guide</a>
        <a className="quick-link" href="#">API Reference</a>
        <a className="quick-link" href="#">Integrations</a>
      </div>
    </section>
  );
}

function KnowledgeLibrary() {
  return (
    <>
      <div className="divider"></div>
      <section className="library">
        <div className="library-header">
          <h2>Knowledge Library</h2>
          <p>Browse documentation by module to find exactly what you need</p>
        </div>
        <div className="lib-grid">
          <div className="lib-card">
            <div className="lib-card-icon">🗓️</div>
            <h3>Attendance</h3>
            <p>Check-in/out tracking, shift management, leave requests, and overtime policies explained.</p>
            <div className="lib-card-footer">
              <span className="lib-card-count">24 articles</span>
              <span className="lib-card-arrow">Read more →</span>
            </div>
          </div>
          <div className="lib-card">
            <div className="lib-card-icon">🏖️</div>
            <h3>Leave Management</h3>
            <p>Configure leave types, approval workflows, carry-forward rules, and holiday calendars.</p>
            <div className="lib-card-footer">
              <span className="lib-card-count">18 articles</span>
              <span className="lib-card-arrow">Read more →</span>
            </div>
          </div>
          <div className="lib-card">
            <div className="lib-card-icon">📈</div>
            <h3>Performance</h3>
            <p>Goal setting, KPI tracking, review cycles, 360° feedback and rating workflows.</p>
            <div className="lib-card-footer">
              <span className="lib-card-count">31 articles</span>
              <span className="lib-card-arrow">Read more →</span>
            </div>
          </div>
          <div className="lib-card">
            <div className="lib-card-icon">🎓</div>
            <h3>Learning</h3>
            <p>Course assignments, completion tracking, certifications, and learning path setup.</p>
            <div className="lib-card-footer">
              <span className="lib-card-count">15 articles</span>
              <span className="lib-card-arrow">Read more →</span>
            </div>
          </div>
          <div className="lib-card">
            <div className="lib-card-icon">👔</div>
            <h3>Director</h3>
            <p>Executive dashboards, org charts, headcount analytics, and strategic workforce reports.</p>
            <div className="lib-card-footer">
              <span className="lib-card-count">12 articles</span>
              <span className="lib-card-arrow">Read more →</span>
            </div>
          </div>
          <div className="lib-card">
            <div className="lib-card-icon">⚙️</div>
            <h3>System Setup</h3>
            <p>Initial configuration, role permissions, SSO integration, and API authentication guide.</p>
            <div className="lib-card-footer">
              <span className="lib-card-count">20 articles</span>
              <span className="lib-card-arrow">Read more →</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="SQUAD HR — Documentation Portal"
      description="Official SQUAD HR Documentation for Attendance, Leave, Performance, and more.">
      
      {/* Background Animated Elements */}
      <div className="bg-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="dots-pattern"></div>
        <div className="dots-pattern-2"></div>
        <div className="line-accent line-accent-1"></div>
        <div className="line-accent line-accent-2"></div>
      </div>
      
      {/* Main Page Content */}
      <main className="page">
        <HomepageHeader />
        <KnowledgeLibrary />
      </main>
    </Layout>
  );
}
