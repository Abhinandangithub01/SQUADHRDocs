import React, { useState, useRef } from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';

const MODULES = [
  {
    label: 'Attendance',
    desc: 'Check-in/out, shifts & overtime',
    to: '/docs/user-guide/attendance/intro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Leave Management',
    desc: 'Leave types, approvals & calendars',
    to: '/docs/user-guide/leave/intro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" />
      </svg>
    ),
  },
  {
    label: 'Performance',
    desc: 'Goals, KPIs & review cycles',
    to: '/docs/user-guide/pms/intro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: 'Learning',
    desc: 'Courses, certifications & paths',
    to: '/docs/user-guide/lms/intro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: 'Director',
    desc: 'Dashboards, analytics & reports',
    to: '/docs/admin-guide/intro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: 'System Setup',
    desc: 'Roles, SSO & configuration',
    to: '/docs/user-guide/settings/intro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

function ModulesDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="modules-dropdown-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="modules-trigger">
        Modules
        <span className={`chevron-down modules-chevron${open ? ' open' : ''}`} />
      </button>
      {open && (
        <div className="modules-dropdown-panel">
          <div className="modules-dropdown-grid">
            {MODULES.map((m) => (
              <Link key={m.label} to={m.to} className="modules-dropdown-item" onClick={() => setOpen(false)}>
                <span className="mdi-icon">{m.icon}</span>
                <span className="mdi-text">
                  <span className="mdi-label">{m.label}</span>
                  <span className="mdi-desc">{m.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CustomNavbar() {
  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-left">
        <div className="custom-logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 2L3 13H11.5L9.5 22L21 11H12.5L14.5 2Z" fill="white" />
          </svg>
          <span className="logo-text" style={{ display: 'flex', gap: '6px' }}>
            <span>SQUAD</span><span style={{ opacity: 0.7 }}>|</span><span>HR</span>
          </span>
        </div>
        <div className="custom-nav-links">
          <Link to="/docs/user-guide/attendance/intro">Documentation</Link>
          <ModulesDropdown />
          <Link to="#">Support</Link>
        </div>
      </div>
      <div className="custom-navbar-right">
        <a href="#" className="nav-btn-login">Log in</a>
        <a href="#" className="nav-btn-create">Dashboard</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const handleSearchClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector('input');
    if (input) {
      input.focus();
    }
  };

  return (
    <section className="untitled-hero">
      <CustomNavbar />
      <div className="hero-content">
        <h1>How can we help?</h1>
        <p>Explore our comprehensive documentation for SQUAD HR modules,<br />from attendance tracking to performance management.</p>
        <div className="hero-search-wrap" onClick={handleSearchClick} style={{ cursor: 'text' }}>
          <span className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </span>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}

function KnowledgeLibrary() {
  return (
    <section className="quickfind-section">
      <h2 className="section-title">Knowledge Library</h2>
      <div className="quickfind-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Link to="/docs/user-guide/attendance/intro" className="qf-card">
          <div className="qf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <h3>Attendance</h3>
          <p>Check-in/out tracking, shift management, leave requests, and overtime policies explained.</p>
        </Link>
        <Link to="/docs/user-guide/leave/intro" className="qf-card">
          <div className="qf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22 22 2M22 22 2 2" opacity="0.2" /><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /></svg>
          </div>
          <h3>Leave Management</h3>
          <p>Configure leave types, approval workflows, carry-forward rules, and holiday calendars.</p>
        </Link>
        <Link to="/docs/user-guide/pms/intro" className="qf-card">
          <div className="qf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3>Performance</h3>
          <p>Goal setting, KPI tracking, review cycles, 360° feedback and rating workflows.</p>
        </Link>
        <Link to="/docs/user-guide/lms/intro" className="qf-card">
          <div className="qf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          </div>
          <h3>Learning</h3>
          <p>Course assignments, completion tracking, certifications, and learning path setup.</p>
        </Link>
        <Link to="/docs/admin-guide/intro" className="qf-card">
          <div className="qf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <h3>Director</h3>
          <p>Executive dashboards, org charts, headcount analytics, and strategic workforce reports.</p>
        </Link>
        <Link to="/docs/user-guide/settings/intro" className="qf-card">
          <div className="qf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <h3>System Setup</h3>
          <p>Initial configuration, role permissions, SSO integration, and API authentication guide.</p>
        </Link>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState(true);

  return (
    <section className="faqs-section">
      <h2 className="section-title">General FAQs</h2>
      <div className="faq-item">
        <button className="faq-question" onClick={() => setOpen(!open)}>
          <span>How do I get started with SQUAD HR?</span>
          <span className="faq-toggle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        {open && (
          <div className="faq-answer">
            <p>Welcome to SQUAD HR! To get started, navigate to the <Link to="/docs/user-guide/settings/intro">System Setup</Link> section to configure your initial permissions and modules.</p>
            <p>If you're an employee looking to apply for leave or track attendance, please check the <Link to="/docs/user-guide/attendance/intro">Attendance</Link> or <Link to="/docs/user-guide/leave/intro">Leave Management</Link> modules for quick guides.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="SQUAD HR — Documentation Portal"
      description="Official SQUAD HR Documentation for Attendance, Leave, Performance, and more.">

      <Head>
        <style>{`
          .navbar { display: none !important; }
          .footer { display: none !important; }
        `}</style>
      </Head>

      <main className="untitled-page-container">
        <div className="untitled-page-wrapper">
          <HeroSection />
          <KnowledgeLibrary />
          <FAQs />
        </div>

        <button className="floating-chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.7431 20 9.5441 19.769 8.44111 19.3486L4 21L5.19793 16.8927C3.82909 15.4214 3 13.5539 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" />
          </svg>
        </button>
      </main>
    </Layout>
  );
}
