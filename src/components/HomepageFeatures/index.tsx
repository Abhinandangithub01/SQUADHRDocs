import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'User Guide',
    image: '/img/user-guide.png',
    description: (
      <>
        Comprehensive guides for employees to navigate Attendance, Leave, PMS, and LMS.
      </>
    ),
    link: '/docs/user-guide/attendance/intro',
  },
  {
    title: 'Admin Guide',
    image: '/img/admin-guide.png',
    description: (
      <>
        Detailed documentation for administrators to configure settings, manage users, and system rules.
      </>
    ),
    link: '/docs/admin-guide/intro',
  },
];

function Feature({title, image, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6 margin-bottom--lg')}>
      <Link to={link} className={styles.featureCard}>
        <div className={styles.featureImageContainer}>
          <img src={image} className={styles.featureImage} alt={title} />
        </div>
        <div className="padding-horiz--md padding-bottom--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
