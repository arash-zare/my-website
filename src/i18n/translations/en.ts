import type { Translation } from '../types';

export const en: Translation = {
  meta: {
    title: 'Arash Zare - Data Infrastructure & Cloud Systems Specialist',
    description:
      'Professional portfolio of Arash Zare - Data Infrastructure & Cloud Systems Specialist expert in building robust data infrastructures and scalable cloud systems',
  },

  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    publications: 'Publications',
    experience: 'Experience',
    contact: 'Contact',
    langSwitchLabel: 'فارسی',
  },

  hero: {
    name: 'Arash Zare',
    role: 'Data & DevOps Engineer',
    tagline:
      'Building reliable data pipelines, automated infrastructure, and scalable cloud systems. Specialized in Python, Docker, Apache Kafka, and Kubernetes.',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
  },

  about: {
    heading: 'About Me',
    subheading: 'Data & DevOps Engineer with 3+ Years Experience',
    paragraphs: [
      "A proactive Data and DevOps Engineer with over three years of hands-on experience in architecting, automating, and maintaining scalable data platforms and cloud infrastructure. Graduated with a Master's degree in Computer Engineering from Shiraz University.",
      'Played a key role in the Cluster Health Check project at Derak Cloud Company, which significantly improved cluster reliability and performance. Skilled in containerization, CI/CD automation, and modern data technologies including Python, Apache Kafka, and ClickHouse.',
      'Currently open to full time, part-time freelance and contract opportunities in data engineering, infrastructure automation, and cloud solutions.',
    ],
    badges: {
      openToWork: 'Open to Work',
      fullTime: 'Full-Time',
      remote: 'Remote',
      partTime: 'Part-Time',
      projectBased: 'Project-Based',
      contract: 'Contract',
    },
    highlights: [
      {
        title: 'DevOps Engineering',
        description: 'Expert in Kubernetes, Docker, and containerization for scalable deployments',
      },
      {
        title: 'Big Data Systems',
        description: 'Proficient in Hadoop, Kafka, ClickHouse for large-scale data processing',
      },
      {
        title: 'Cloud Infrastructure',
        description: 'Experience with cloud systems and infrastructure management at scale',
      },
      {
        title: 'System Monitoring',
        description: 'Skilled in Grafana, Prometheus, and ELK Stack for system observability',
      },
    ],
  },

  skills: {
    heading: 'Skills & Expertise',
    subheading:
      'Comprehensive technical expertise in data engineering, DevOps practices, and cloud infrastructure. Specialized in building scalable, reliable systems that power modern data-driven organizations.',
    footerNote: 'Continuously learning and adapting to emerging technologies',
    categories: [
      {
        title: 'Programming & Development',
        skills: [
          {
            name: 'Python',
            description: 'Data processing, automation, API integration, and ETL scripting',
          },
          {
            name: 'Go (Golang)',
            description: 'Building efficient microservices and tools',
          },
          {
            name: 'Bash Scripting',
            description: 'Linux automation, deployment scripts, cron jobs, and log processing',
          },
          {
            name: 'Networking',
            description: 'TCP/IP, DNS, firewalls, routing fundamentals and service connectivity',
          },
          {
            name: 'SQL',
            description: 'SQL queries, joins, aggregations, CTEs, and relational data modeling',
          },
        ],
      },
      {
        title: 'Big Data & Analytics',
        skills: [
          {
            name: 'Apache Kafka',
            description: 'Real-time data streaming, consumer groups, topic design, and monitoring',
          },
          {
            name: 'ClickHouse',
            description: 'Analytics data modeling, ingestion, and query optimization',
          },
          {
            name: 'Apache Hadoop',
            description: 'Working with HDFS and Parquet files in distributed data environments',
          },
          {
            name: 'Data Pipeline Design',
            description: 'Designing reliable ETL/ELT workflows, scheduling, validation, and monitoring',
          },
          {
            name: 'Apache Spark',
            description: 'Large-scale data processing frameworks',
          },
        ],
      },
      {
        title: 'DevOps & Infrastructure',
        skills: [
          {
            name: 'Docker',
            description: 'Containerization, Docker Compose, image optimization, and service deployment',
          },
          {
            name: 'GitLab CI/CD',
            description: 'Designing CI/CD pipelines for testing, building, and automated deployment',
          },
          {
            name: 'Kubernetes',
            description: 'Container orchestration and cluster management',
          },
          {
            name: 'Ansible',
            description: 'Infrastructure provisioning and configuration using playbooks and roles',
          },
          {
            name: 'Terraform',
            description: 'Infrastructure provisioning with providers, modules, and state management',
          },
        ],
      },
      {
        title: 'Monitoring & Observability',
        skills: [
          {
            name: 'Grafana',
            description: 'Building operational dashboards, alerts, and data visualizations',
          },
          {
            name: 'Prometheus',
            description: 'Metrics collection, PromQL, alerting rules, exporters, and monitoring design',
          },
          {
            name: 'System Monitoring',
            description: 'Linux performance, service health, capacity tracking, and incident troubleshooting',
          },
          {
            name: 'ELK Stack',
            description: 'Log collection, indexing, search, and visualization with Elasticsearch and Kibana',
          },
          {
            name: 'Ceph & MinIO',
            description: 'S3-compatible object storage, bucket management, and data platform integration',
          },
        ],
      },
    ],
  },

  projects: {
    heading: 'Featured Projects',
    subheading:
      "Here are some of the projects I've worked on that showcase my skills in data infrastructure and DevOps engineering",
    
    code: 'Code',
    viewMore: 'View More Projects on GitHub',
    items: [
      {
        title: 'Health Check Cluster Monitoring System',
        description:
          'Comprehensive cluster health monitoring system developed at Derak Cloud Company. This project significantly improved system performance and stability through real-time monitoring and alerting capabilities.',
      },
      {
        title: 'Multi-Cluster Big Data CLI Automation Suite',
        description:
          'Modular CLI automation framework developed at Derak Cloud using Bashly and Docker Compose to streamline lifecycle management, configuration synchronization, and orchestration for ClickHouse, ELK Stack, Hadoop (HDFS/YARN), and PrestoDB clusters across dev and prod environments.',
      },
      {
        title: 'Deep Learning with PyTorch for Police Force',
        description:
          'Advanced machine learning solution designed for law enforcement applications. Implemented deep learning models using PyTorch for data analysis and pattern recognition to support police operations.',
      },

      {
        title: 'NetFlow & Log Forwarding Stack',
        description:
          'Scalable log forwarding and network traffic monitoring pipeline. Collects system, network, and container logs using syslog-ng, processes NetFlow/sFlow/IPFIX via goflow2, and streams parsed events into RabbitMQ queues.',
      },
    ],
  },

  publications: {
    heading: 'Publications',
    subheading: 'Research contributions in cloud computing and container orchestration',
    viewPublication: 'View Publication',
    items: [
      {
        title:
          'A two-tier multi-objective service placement in container-based fog-cloud computing platforms',
        journal: 'Cluster Computing (Springer)',
        date: 'Nov 28, 2023',
        description:
          'Research on optimizing service placement in container-based fog-cloud computing environments using multi-objective optimization techniques.',
        type: 'Journal Article',
      },
    ],
  },

  experience: {
    heading: 'Work Experience',
    subheading: 'My professional journey as a Data & DevOps Engineer',
    keyAchievements: 'Key Achievements:',
    items: [
      {
        title: 'Freelance Software & Linux Systems Developer',
        company: 'Self-Employed / Academic Projects',
        location: 'Shiraz, Fars, Iran',
        period: '2020 - 2022 (2 years)',
        description:
          'Delivered customized web applications and system automation solutions for academic and small business clients during university studies. Focused on Python/Django backend development, Linux server administration, and task automation scripts.',
        achievements: [
          'Developed and deployed modular web applications using Django, Flask, and relational databases (PostgreSQL/SQLite)',
          'Configured and maintained Linux servers (Ubuntu/CentOS), managing user permissions, SSH, Nginx reverse proxy, and system services',
          'Automated recurring workflows, log parsing, and data collection tasks using custom Bash and Python scripts',
          'Containerized student and client projects using Docker to ensure reproducible deployment environments',
        ],
      },
      {
        title: 'Graduate Teaching Assistant (Cloud Computing)',
        company: 'Shiraz University',
        location: 'Shiraz, Fars, Iran',
        period: 'Fall 2023 (1 Semester)',
        description:
          'Served as a Graduate Teaching Assistant for the advanced Cloud Computing course under the supervision of Prof. Dr. Khunjush at the Department of Computer Engineering.',
        achievements: [
          'Mentored and guided graduate and undergraduate students through practical cloud computing concepts, virtualization, and distributed systems',
          'Designed and evaluated hands-on lab assignments focusing on containerization (Docker), Linux virtualization, and cloud infrastructure architectures',
          'Conducted problem-solving sessions and technical Q&A to help students troubleshoot distributed system assignments',
          'Assisted in grading term projects, technical reports, and final examinations',
        ],
      },
      {
        title: 'Data Engineer',
        company: 'Derak Cloud Company',
        location: 'Shiraz, Fars, Iran',
        period: '2022 - Present (2 years 6 months)',
        description:
          'Developed and maintained data infrastructure and cloud systems at Derak Cloud Company. Specialized in building scalable data pipelines and implementing DevOps practices for improved system reliability and performance.',
        achievements: [
          'Led the Cluster Health Check project improving system performance and stability',
          'Implemented containerization using Docker for efficient deployment and scalability',
          'Built robust data processing pipelines using big data technologies',
          'Managed cloud infrastructure and monitoring systems',
        ],
      },
    ],
  },

  contact: {
    heading: 'Get In Touch',
    subheading:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about data engineering and DevOps.",
    letsConnect: "Let's Connect",
    followMe: 'Follow Me',
    contactInfo: {
      email: { title: 'Email', value: 'arash.funlife@gmail.com' },
      phone: { title: 'Phone', value: '+98 930 361 2266' },
      location: { title: 'Location', value: 'Shiraz, Fars, Iran' },
    },
    form: {
      heading: 'Send Me a Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectPlaceholder: "What's this about?",
      message: 'Message',
      messagePlaceholder: 'Tell me about your project or just say hello!',
      send: 'Send Message',
      toastTitle: 'Email Client Opened!',
      toastDescription: 'Your default email client should open with the message pre-filled.',
    },
  },
};
