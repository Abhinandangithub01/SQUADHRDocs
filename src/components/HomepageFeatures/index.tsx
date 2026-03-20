import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';




type FeatureItem = {
  title: string;
  emoji: string;
  description: string;
  link: string;
  articles: number;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'User Guide',
    emoji: '📖',
    articles: 10,
    description: 'A comprehensive walkthrough of the SQUAD HR platform for new and existing users.',
    link: '/docs/user-guide/intro',
  },
  {
    title: 'Attendance',
    emoji: '📅',
    articles: 24,
    description: 'Track employee presence, manage shifts, and handle regularizations with ease.',
    link: '/docs/user-guide/attendance/intro',
  },
  {
    title: 'Leave Management',
    emoji: '📄',
    articles: 18,
    description: 'Streamline leave applications, approvals, and balance tracking for your workforce.',
    link: '/docs/user-guide/leave/intro',
  },
  {
    title: 'Performance',
    emoji: '📈',
    articles: 15,
    description: 'Set goals, conduct reviews, and monitor employee growth with our PMS module.',
    link: '/docs/user-guide/pms/intro',
  },
  {
    title: 'Learning',
    emoji: '🎓',
    articles: 32,
    description: 'Empower employees with courses, certifications, and knowledge resources.',
    link: '/docs/user-guide/lms/intro',
  },
  {
    title: 'Director Settings',
    emoji: '🛡️',
    articles: 12,
    description: 'Detailed documentation for administrators to configure system-wide settings.',
    link: '/docs/admin-guide/intro',
  },
  {
    title: 'System Setup',
    emoji: '⚙️',
    articles: 9,
    description: 'Configure roles, permissions, and module settings for your organization.',
    link: '/docs/user-guide/settings/intro',
  },
];

function Feature({title, emoji, description, link}: Omit<FeatureItem, 'articles'>) {
  return (
    <Link to={link} className="dashboard-card">
      <div className="card-icon">{emoji}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-footer" style={{ justifyContent: 'flex-end' }}>
        <span className="read-more-arrow">Read more →</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="padding-vert--xl fade-up" style={{ animationDelay: '0.4s' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Knowledge Library</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Find help documentation and tutorials for everything you need on SQUAD HR.
          </p>
        </div>
        
        <div className="dashboard-grid">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
