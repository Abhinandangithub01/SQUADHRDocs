import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="heroBanner">
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

      <div className="container">
        <div className="hero-eyebrow">
          <span className="squad">SQUAD</span>
          <span className="sep">|</span>
          <span className="hr">HR</span>
        </div>
        <h1 className="heroTitle">How can we help?</h1>
        <p className="heroSubtitle">
          Explore our comprehensive documentation for SQUAD HR modules,<br />
          from attendance tracking to performance management.
        </p>
        
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input className="search-input" type="text" placeholder="Search for articles, guides, and more..." />
          <button className="search-btn">Search</button>
        </div>

        <div className="quick-links">
          <Link className="quick-link" to="/docs/user-guide/getting-started">Getting Started</Link>
          <Link className="quick-link" to="/docs/user-guide/attendance/setup">Attendance Setup</Link>
          <Link className="quick-link" to="/docs/user-guide/payroll">Payroll Guide</Link>
          <Link className="quick-link" to="/docs/user-guide/api">API Reference</Link>
          <Link className="quick-link" to="/docs/user-guide/integrations">Integrations</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Official SQUAD  HR Documentation for Attendance, Leave, Performance, and more.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
