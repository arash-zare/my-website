
import React from 'react';
import { Server, Database, Cloud, Monitor } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps Engineering",
      description: "Expert in Kubernetes, Docker, and containerization for scalable deployments"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Big Data Systems", 
      description: "Proficient in Hadoop, Kafka, ClickHouse for large-scale data processing"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Experience with cloud systems and infrastructure management at scale"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "System Monitoring",
      description: "Skilled in Grafana, Prometheus, and ELK Stack for system observability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Data & DevOps Engineer with 2+ Years Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              An energetic Data and DevOps Engineer with over two years of experience in developing 
              and managing data infrastructures and cloud systems. Graduated with a Master's degree 
              in Computer Engineering from Shiraz University.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Played a key role in the Cluster Health Check project at Derak Cloud Company, which 
              led to improved system performance and stability. Skilled in containerization and 
              orchestration using Docker, enabling efficient deployment and scalability of applications.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Go', 'Kubernetes', 'Docker', 'Hadoop', 'Kafka', 'ClickHouse', 'Ansible'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
