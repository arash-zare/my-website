
import React from 'react';
import { Star } from 'lucide-react';

const Skills = () => {
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating
                ? 'fill-blue-500 text-blue-500'
                : 'fill-gray-200 text-gray-200'
            } transition-colors duration-200`}
          />
        ))}
      </div>
    );
  };

  const skillCategories = [
    {
      title: "Programming & Development",
      skills: [
        { name: "Python", rating: 5, description: "Advanced proficiency in data processing and automation" },
        { name: "Go (Golang)", rating: 4, description: "Building efficient microservices and tools" },
        { name: "Bash Scripting", rating: 4, description: "System automation and deployment scripts" },
        { name: "SQL", rating: 4, description: "Complex queries and database optimization" },
        { name: "JavaScript", rating: 3, description: "Frontend development and automation tools" }
      ]
    },
    {
      title: "Big Data & Analytics",
      skills: [
        { name: "Apache Hadoop", rating: 4, description: "Distributed data processing at scale" },
        { name: "Apache Kafka", rating: 5, description: "Real-time data streaming and processing" },
        { name: "ClickHouse", rating: 4, description: "High-performance analytics database" },
        { name: "Data Pipeline Design", rating: 4, description: "ETL/ELT workflows and optimization" },
        { name: "Apache Spark", rating: 3, description: "Large-scale data processing frameworks" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Kubernetes", rating: 5, description: "Container orchestration and cluster management" },
        { name: "Docker", rating: 5, description: "Containerization and microservices deployment" },
        { name: "Ansible", rating: 4, description: "Infrastructure automation and configuration" },
        { name: "GitLab CI/CD", rating: 4, description: "Continuous integration and deployment" },
        { name: "Terraform", rating: 3, description: "Infrastructure as Code (IaC)" }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Grafana", rating: 4, description: "Advanced dashboards and visualization" },
        { name: "Prometheus", rating: 4, description: "Metrics collection and alerting" },
        { name: "ELK Stack", rating: 3, description: "Log aggregation and analysis" },
        { name: "Minio", rating: 3, description: "Object storage and data management" },
        { name: "System Monitoring", rating: 4, description: "Performance tracking and optimization" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive technical expertise in data engineering, DevOps practices, and cloud infrastructure. 
            Specialized in building scalable, reliable systems that power modern data-driven organizations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-blue-600 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h4>
                      <StarRating rating={skill.rating} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-0">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-blue-50 rounded-full">
            <Star size={20} className="fill-blue-500 text-blue-500" />
            <span className="text-blue-700 font-medium">
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
