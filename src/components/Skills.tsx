import React from 'react';
import { Star, Database, Monitor, Server } from 'lucide-react';

import {
  SiPython,
  SiGo,
  SiGnubash,
  SiPostgresql,
  SiDjango,
  SiApachekafka,
  SiClickhouse,
  SiApachehadoop,
  SiApachespark,
  SiDocker,
  SiGitlab,
  SiKubernetes,
  SiAnsible,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiElastic,
  SiMinio,
  SiCeph,
} from 'react-icons/si';

const Skills = () => {
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex shrink-0 gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= rating
                ? 'fill-blue-500 text-blue-500'
                : 'fill-gray-200 text-gray-200'
            }
          />
        ))}
      </div>
    );
  };

  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: [
        {
          name: 'Python',
          rating: 5,
          description:
              'Data processing, automation, API integration, and ETL scripting',
          icon: SiPython,
          color: '#3776AB',
        },
        {
          name: 'Go (Golang)',
          rating: 2,
          description: 'Building efficient microservices and tools',
          icon: SiGo,
          color: '#00ADD8',
        },
        {
          name: 'Bash Scripting',
          rating: 4,
          description:   'Linux automation, deployment scripts, cron jobs, and log processing',
          icon: SiGnubash,
          color: '#4EAA25',
        },
        {
          name: 'Networking',
          rating: 4,
          description:
          'TCP/IP, DNS, firewalls, routing fundamentals and service connectivity',
          icon: Server,
          color: '#2563EB',
        },
        {
          name: 'SQL',
          rating: 3,
          description: 'SQL queries, joins, aggregations, CTEs, and relational data modeling',
          icon: SiPostgresql,
          color: '#4169E1',
        },
      ],
    },
    {
      title: 'Big Data & Analytics',
      skills: [
        {
          name: 'Apache Kafka',
          rating: 5,
          description: 'Real-time data streaming, consumer groups, topic design, and monitoring',
          icon: SiApachekafka,
          color: '#231F20',
        },
        {
          name: 'ClickHouse',
          rating: 4,
          description: 'Analytics data modeling, ingestion, and query optimization',
          icon: SiClickhouse,
          color: '#FFCC01',
        },
        {
          name: 'Apache Hadoop',
          rating: 4,
          description: 'Working with HDFS and Parquet files in distributed data environments',
          icon: SiApachehadoop,
          color: '#66CCFF',
        },
        {
          name: 'Data Pipeline Design',
          rating: 4,
          description: 'Designing reliable ETL/ELT workflows, scheduling, validation, and monitoring',
          icon: Database,
          color: '#2563EB',
        },
        {
          name: 'Apache Spark',
          rating: 3,
          description: 'Large-scale data processing frameworks',
          icon: SiApachespark,
          color: '#E25A1C',
        },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        {
          name: 'Docker',
          rating: 5,
          description: 'Containerization, Docker Compose, image optimization, and service deployment',
          icon: SiDocker,
          color: '#2496ED',
        },
        {
          name: 'GitLab CI/CD',
          rating: 5,
          description: 'Designing CI/CD pipelines for testing, building, and automated deployment',
          icon: SiGitlab,
          color: '#FC6D26',
        },
        {
          name: 'Kubernetes',
          rating: 3,
          description: 'Container orchestration and cluster management',
          icon: SiKubernetes,
          color: '#326CE5',
        },
        {
          name: 'Ansible',
          rating: 3,
          description: 'Infrastructure provisioning and configuration using playbooks and roles',
          icon: SiAnsible,
          color: '#231e1e',
        },
        {
          name: 'Terraform',
          rating: 3,
          description: 'Infrastructure provisioning with providers, modules, and state management',
          icon: SiTerraform,
          color: '#844FBA',
        },
      ],
    },
    {
      title: 'Monitoring & Observability',
      skills: [
        {
          name: 'Grafana',
          rating: 5,
          description: 'Building operational dashboards, alerts, and data visualizations',
          icon: SiGrafana,
          color: '#F46800',
        },
        {
          name: 'Prometheus',
          rating: 5,
          description: 'Metrics collection, PromQL, alerting rules, exporters, and monitoring design',
          icon: SiPrometheus,
          color: '#E6522C',
        },
        {
          name: 'System Monitoring',
          rating: 4,
          description: 'Linux performance, service health, capacity tracking, and incident troubleshootin',
          icon: Monitor,
          color: '#2563EB',
        },
        {
          name: 'ELK Stack',
          rating: 3,
          description: 'Log collection, indexing, search, and visualization with Elasticsearch and Kibana',
          icon: SiElastic,
          color: '#117100',
        },
        {
          name: 'Ceph & MinIO',
          rating: 3,
          description:
            'S3-compatible object storage, bucket management, and data platform integration',
          icon: SiCeph,
          color: '#C72E49',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Skills &amp; Expertise
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 bg-blue-600" />

          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Comprehensive technical expertise in data engineering, DevOps
            practices, and cloud infrastructure. Specialized in building
            scalable, reliable systems that power modern data-driven
            organizations.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-8 w-1 rounded-full bg-blue-600" />

                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skillIndex} className="group">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          {/* Technology SVG logo */}
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-white shadow-sm">
                            <Icon
                              size={24}
                              style={{ color: skill.color }}
                              className="transition-transform duration-200 group-hover:scale-110"
                            />
                          </div>

                          <h4 className="truncate text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
                            {skill.name}
                          </h4>
                        </div>

                        <StarRating rating={skill.rating} />
                      </div>

                      <p className="pl-[52px] text-sm leading-relaxed text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-blue-50 px-6 py-3">
            <Star size={20} className="fill-blue-500 text-blue-500" />

            <span className="font-medium text-blue-700">
              Continuously learning and adapting to emerging technologies
            </span>

            <Star size={20} className="fill-blue-500 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
