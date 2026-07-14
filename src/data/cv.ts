// Single source of truth for all résumé content. Pages/components read this;
// markup holds no copy. Draft copy (summary, wind-down wording) is marked and
// awaits Elliott's confirmation — see spec §9.
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
  tags?: string[];
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
    consulting: string; // Otter Crew fractional/advisory offer — secondary CTA
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
      'Software engineer & founder — dependable, ML-powered distributed systems.',
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
    "I build dependable, ML-powered distributed systems end to end — and I have built the team and company around them. As sole founder of Batteries Included I ran the pre-revenue investor round successfully and shipped a self-driving cloud platform that stood up and operated the full hyperscaler stack — Kubernetes, databases, service mesh, and LLM serving — on anyone's hardware from a single button press. Before that I was the senior tech lead for Ads Foundation at Facebook, responsible for the stability, performance, and correctness of the ads infrastructure behind a business used by billions of people. And before that I was a tech lead on some of the largest OLTP key-value stores in the world. I care about correctness, latency, and AI/ML systems that hold up in production, and I am looking to lead teams tackling hard, high-impact problems with modern tooling.",
  work: [
    {
      company: 'Batteries Included',
      title: 'Founder & CEO',
      start: '2021',
      end: '2026',
      achievements: [
        'Founded Batteries Included as sole founder — incorporated the company and started the build alone, then raised a $1.2M seed from Race Capital through persistent solo VC outreach, funding a full cross-functional team.',
        'Led our team in building a self-driving cloud platform that stood up and operated the full production stack from a single button press — provisioning Kubernetes on your own hardware or any cloud, then automatically integrating, configuring, tuning, upgrading, and self-healing every pluggable service with zero hand-written YAML, from databases and service mesh to LLM/ML serving.',
        'Ran the company end to end beyond the code — led marketing and go-to-market, drove customer research and discovery, owned project planning and delivery across the team, and managed investor relations from seed pitch through ongoing reporting.',
      ],
      tags: [
        'Fundraising',
        'Team building',
        'SaaS Marketing',
        'Elixir',
        'AI/ML',
        'LLM Inference',
        'Kubernetes',
        'Serverless',
      ],
    },
    {
      company: 'Facebook',
      title: 'Software Engineer',
      start: '2014',
      end: '2021',
      achievements: [
        'Responsible for all of Ads infrastructure stability, performance, correctness, and disaster preparedness.',
        'Coordinated incident responses and helped solve the toughest production stability events for Ads.',
        'Created automatic A/B statistical testing of the most critical machine learning ads targeting and bidding systems.',
        'Pioneered innovative production traffic guided fuzzing, to ensure the safety and stability of the most revenue critical code.',
        "Designed and led the implementation and production deployment of a unique datastore, with Linux kernel network block device and Open Compute storage hardware, powering Facebook's Dynamic Audience API.",
        'Migrated all of Messenger to use open source HBase, improving performance and security while giving back to the world.',
      ],
      tags: [
        'Tech Lead',
        'C++',
        'Machine Learning',
        'Fuzz Testing',
        'HBase/Hadoop',
        'Linux/Containers',
        'Continuous Deployment',
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
      tags: ['HBase', 'Hadoop/HDFS', 'Java', 'Distributed Tracing'],
    },
    {
      company: 'StumbleUpon',
      title: 'HBase Engineer',
      start: '2012',
      end: '2012',
      achievements: [
        'Became an Apache HBase committer.',
        'Deployed new versions of HBase to production clusters with no downtime, fixing issues and improving data store performance.',
        'Created new Stochastic Load Balancer that takes into consideration data locality, request throughput, and data sizes to better utilize server resources.',
      ],
      tags: ['HBase', 'Java', 'Load Balancing'],
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
      tags: ['Scala', 'Akka', 'Hadoop', 'HBase', 'JavaScript', 'Mentoring'],
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
      tags: ['Full-stack', 'Rails', 'Web Scraping', 'Performance'],
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
        'Led the effort to create a .NET WPF implementation of Microsoft Ribbon; implemented the custom window code to allow integration into the title bar.',
        'Drove customer adoption of WPF solutions by answering questions on MSDN Forums and Codeplex.com.',
      ],
      tags: ['C#/.NET', 'C++', 'WPF'],
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
      tags: ['C#/.NET', 'WPF', 'XML'],
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
      name: 'Heyya',
      tagline:
        'A snapshot-testing library for Phoenix and LiveView components — catches rendered-markup regressions before they ship.',
      link: 'https://github.com/batteries-included/heyya',
      tags: ['Elixir', 'Phoenix', 'Testing'],
    },
    {
      name: 'rs-poker',
      tagline:
        "A Rust library for poker: fast hand evaluation, range parsing, and Texas Hold'em game logic.",
      link: 'https://github.com/elliottneilclark/rs-poker',
      tags: ['Rust', 'RL Arena', 'Poker', 'Bit Manipulation'],
    },
    {
      name: 'little-sorry',
      tagline:
        'A Rust library for counterfactual regret minimization — CFR+, DCFR, and predictive variants with zero-allocation solves.',
      link: 'https://github.com/elliottneilclark/little-sorry',
      tags: ['Rust', 'Linear Algebra', 'Quantization'],
    },
    {
      name: 'range-reader',
      tagline:
        "A GPT-style model that uses masked game sequence patterns to predict an opponent's hidden hole cards, using factored embeddings and suit-permutation symmetry.",
      link: 'https://github.com/Otter-Crew/range-reader',
      tags: ['PyTorch', 'Transformers', 'Poker', 'Hidden Information'],
    },
    {
      name: 'HBase',
      tagline:
        'BigTable inspired key value store focusing on consistency and correctness, while delivering world class key value storage speed.',
      link: 'https://hbase.apache.org/',
      tags: ['Java', 'Key-Value Database', 'Distributed'],
    },
    {
      name: 'Folly',
      tagline:
        "Facebook's base C++ library providing threading, locking, collections, metrics and other base components of observable performant C++ code.",
      link: 'https://github.com/facebook/folly',
      tags: ['C++', 'Concurrency', 'Correctness'],
    },
  ],
};
