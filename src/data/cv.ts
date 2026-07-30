// Single source of truth for all resume content. Pages/components read this;
// markup holds no copy. Draft copy (summary, wind-down wording) is marked and
// awaits Elliott's confirmation - see spec section 9.
export interface Social {
  name: string;
  url: string;
}
export interface Work {
  company: string;
  title: string;
  start: string;
  end: string | null;
  achievements: string[];
  softTags?: string[];
  hardTags?: string[];
}
export interface Education {
  school: string;
  degree: string;
}
export interface Project {
  name: string;
  tagline: string;
  link?: string;
  tags?: string[];
}
export interface CV {
  profile: {
    name: string;
    tagline: string;
    location: string;
    photo: string;
    website: string;
  };
  contact: {
    email: string;
    phone: string; // display form (vanity) for screen
    phonePlain: string; // numeric form for print, where there's no tel: link to tap
    phoneHref: string;
    consulting: string; // Otter Crew fractional/advisory offer - secondary CTA
    writing: string; // Otter Crew blog
    socials: Social[];
  };
  about: string;
  work: Work[];
  education: Education[];
  projects: Project[];
}

export const cv: CV = {
  profile: {
    name: 'Elliott Clark',
    tagline:
      'Software engineer & founder - dependable, ML-powered distributed systems.',
    location: 'Franklin, TN',
    photo: '/images/photo.jpg',
    website: 'https://elliottclark.info',
  },
  contact: {
    email: 'elliott.neil.clark@gmail.com',
    phone: '(415) 56-CLARK',
    phonePlain: '(415) 562-5275',
    phoneHref: 'tel:+14155625275',
    consulting: 'https://ottercrew.group/consulting/',
    writing: 'https://ottercrew.group/blog/',
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/elliottneilclark',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/elliottnclark',
      },
    ],
  },
  about:
    "I build distributed systems and ML infrastructure end to end, along with the teams and companies around them. As the sole founder of Batteries Included, I raised a pre-revenue round and shipped a self-driving cloud platform. At Facebook, I was a senior tech lead on the Ads Foundation, keeping the ML-driven ads infrastructure serving billions of people stable, fast, and correct. Before that, I ran some of the largest OLTP key‑value stores in the world. I care about correctness, latency, and scalability in production, and I'm looking to lead teams tackling hard, high-impact problems.",
  work: [
    {
      company: 'Batteries Included',
      title: 'Founder & CEO',
      start: '2021',
      end: '2026',
      achievements: [
        'Founded Batteries Included, incorporated the company, and raised a $1.2M seed from Race Capital to fund a cross-functional team.',
        'Built the team from 1 to 7, recruiting, onboarding, and sprint planning, into a group who shipped 75 releases of beautiful, easy-to-use, open-source software.',
        'Led the creation of a self-driving cloud platform that launches Kubernetes, vector databases, serverless web, and LLM inference with a single button press.',
        'Ran the company beyond the code: marketing, go-to-market, customer discovery, project delivery, and stakeholder management from seed pitch through investor reporting.',
      ],
      softTags: [
        'Fundraising',
        'Team building',
        'SaaS Marketing',
        'Sprint Planning',
        'Customer Outreach',
      ],
      hardTags: [
        'Elixir',
        'AI',
        'ML',
        'LLM Inference',
        'Kubernetes',
        'Grafana',
        'VictoriaMetrics',
        'AWS',
        'Docker',
      ],
    },
    {
      company: 'Facebook',
      title: 'Software Engineer',
      start: '2014',
      end: '2021',
      achievements: [
        'Owned stability, performance, correctness, scalability, and disaster readiness for all of Ads infrastructure.',
        'Directed incident response for critical Ads outages, achieving root-cause resolution within SLA and post incident team mentorship',
        'Created automatic A/B statistical testing and automated CI/CD of the most critical machine learning ads targeting and bidding systems.',
        'Introduced a novel automated traffic-guided fuzzing test for revenue-critical microservices, reducing runtime crashes by up to 90% and increasing revenue, ML/AI capacity, and reliability.',
        "Designed and drove the implementation and production deployment of a unique datastore, with Linux kernel network block device and Open Compute storage hardware, powering Facebook's Dynamic Audience API.",
        'Migrated all of Messenger to use open source HBase, improving performance and security while giving back to the world.',
      ],
      softTags: [
        'Tech Lead',
        'Mentoring',

        'Data Science',
      ],
      hardTags: [
        'C++',
        'Machine Learning',
        'Fuzz Testing',
        'HBase',
        'Hadoop',
        'Linux',
        'Containers',
        'CI/CD',
      ],
    },
    {
      company: 'Cloudera',
      title: 'HBase Engineer',
      start: '2012',
      end: '2014',
      achievements: [
        "Developed, built, debugged, and deployed open source Hadoop based solutions to customers' on premises and in cloud clusters.",
        'Instrumented HBase and HDFS to enable RPC tracing using HTrace and Zipkin; the Dapper like system enables HBase developers to debug and tune their uses of HBase with more confidence.',
        'Created a new compaction algorithm that has 10x better hardware utilization.',
        'Created new UI for HBase Master and Regionserver daemons increasing adoption of HBase.',
      ],
      softTags: ['Customer Outreach'],
      hardTags: [
        'HBase',
        'Hadoop',
        'HDFS',
        'HBase',
        'Java',
        'Distributed Tracing',
      ],
    },
    {
      company: 'StumbleUpon',
      title: 'HBase Engineer',
      start: '2012',
      end: '2012',
      achievements: [
        'Became an Apache HBase committer.',
        'Deployed new versions of HBase to production clusters with no downtime, fixing issues and improving data store performance.',
        'Created new Stochastic Load Balancer that optimizes data locality, request throughput, and data sizes to better utilize server resources.',
      ],
      hardTags: ['HBase', 'Java', 'Load Balancing'],
    },
    {
      company: 'ngmoco;)',
      title: 'Lead Engineer, Data & Analytics',
      start: '2010',
      end: '2012',
      achievements: [
        'Promoted twice into a position managing individual contributors in the Analytics group.',
        'Created Scala server infrastructure, including servlet front-end and Akka back-end services. The new design improved performance, up to 15k messages per second per server, and allowed for new features.',
        'Architected Hadoop jobs using Hadoop, Avro, and HBase that allow executives, designers, and engineers to track revenue and user behavior from more than a billion messages a day.',
        "Built software to start, stop, and add to Hadoop/HBase/Zookeeper clusters on Amazon's EC2 allowing the group to rapidly adopt Hadoop and HBase.",
        'Designed and implemented JavaScript UI to display tens of thousands of data points per day per game in a discoverable HTML interface.',
      ],
      softTags: ['Mentoring', 'Tech Lead', 'Data Science', 'Full-stack'],
      hardTags: [
        'AWS',
        'Scala',
        'Akka',
        'Hadoop',
        'HBase',
        'JavaScript',
        'Python',
      ],
    },
    {
      company: '316 Ventures',
      title: 'Software Development Engineer',
      start: '2009',
      end: '2010',
      achievements: [
        'Built and designed thrillcall.com including frontend, backend, and analytics with one other startup engineer.',
        'Implemented real-time and background content scraping systems to process and display pricing data from external web sources.',
        'Halved page load time by optimizing database access, creating automatic asset minification scripts, configuring caching, and other web development best practices.',
      ],
      softTags: ['Full-stack'],
      hardTags: ['Rails', 'Web Scraping', 'MongoDB'],
    },
    {
      company: 'Microsoft',
      title: 'Software Development Engineer',
      start: '2008',
      end: '2009',
      achievements: [
        'Resolved more than 80 bugs in multiple areas of Windows Presentation Foundation to reach zero bug bar on schedule.',
        'Corrected blocking bugs in WPF to enable Blend and Visual Studio to adopt Windows Presentation Framework.',
        'Received a level promotion in the first year.',
        'Created a hot-fix for a high priority bug in libraries of .NET, enabling Windows customers to type diacritics.',
        'Spearheaded the effort to create a .NET WPF implementation of Microsoft Ribbon; implemented the custom window code to allow integration into the title bar.',
        'Drove customer adoption of WPF solutions by answering questions on MSDN Forums and Codeplex.com.',
      ],
      hardTags: ['C#', '.NET', 'C++', 'WPF'],
    },
    {
      company: 'Microsoft',
      title: 'Software Development Intern',
      start: '2007',
      end: '2007',
      achievements: [
        'Prototyped a new control for use with WPF News Reader.',
        'Collaborated with multiple teams to implement new streams of revenue.',
        'Developed XML tools to deliver MSDN Magazine online using the WPF News Reader SDK.',
      ],
      hardTags: ['C#', '.NET', 'WPF', 'XML'],
    },
  ],
  education: [
    {
      school: 'Georgia Institute of Technology',
      degree: 'BS in Computer Science',
    },
  ],
  projects: [
    {
      name: 'heyya',
      tagline:
        'A snapshot-testing library for Phoenix and LiveView components - catches rendered-markup regressions before they ship.',
      link: 'https://github.com/batteries-included/heyya',
      tags: ['Elixir', 'Phoenix'],
    },
    {
      name: 'rs-poker',
      tagline:
        "A Rust library for poker: fast hand evaluation, range parsing, and Texas Hold'em game logic.",
      link: 'https://github.com/elliottneilclark/rs-poker',
      tags: ['Rust', 'RL Arena', 'Performance'],
    },
    {
      name: 'little-sorry',
      tagline:
        'A Rust library for counterfactual regret minimization - CFR+, DCFR, and predictive variants with zero-allocation solves.',
      link: 'https://github.com/elliottneilclark/little-sorry',
      tags: ['Rust', 'Linear Algebra', 'Quantization'],
    },
    {
      name: 'range-reader',
      tagline:
        "A GPT-style model that uses masked game sequence patterns to predict an opponent's hidden hole cards, using factored embeddings and suit-permutation symmetry.",
      link: 'https://github.com/Otter-Crew/range-reader',
      tags: ['PyTorch', 'Transformers', 'AI', 'ML', 'Python', 'GPT'],
    },
    {
      name: 'HBase',
      tagline:
        'BigTable inspired key value store focusing on consistency and correctness, while delivering world class key value storage speed.',
      link: 'https://hbase.apache.org/',
      tags: ['Java', 'Key-Value Database', 'Distributed'],
    },
    {
      name: 'folly',
      tagline:
        "Facebook's base C++ library providing threading, locking, collections, metrics and other base components of observable performant C++ code.",
      link: 'https://github.com/facebook/folly',
      tags: ['C++', 'Concurrency'],
    },
  ],
};

// Skills section = the set of all work tags, ordered by how often each
// appears across roles. Derived, so the per-role tags stay the single source.
function byFrequency(lists: (string[] | undefined)[]): string[] {
  const counts = new Map<string, number>();
  for (const list of lists) {
    for (const t of list ?? []) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return [...counts.keys()].sort(
    (a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0),
  );
}
export const skills = {
  // Project tags are all hard skills, so they feed the hard list directly.
  hard: byFrequency([
    ...cv.work.map((w) => w.hardTags),
    ...cv.projects.map((p) => p.tags),
  ]),
  soft: byFrequency(cv.work.map((w) => w.softTags)),
};
