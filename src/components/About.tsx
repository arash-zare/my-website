
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
              Data & DevOps Engineer with 3+ Years Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A proactive Data and DevOps Engineer with over three years of hands-on experience in 
              architecting, automating, and maintaining scalable data platforms and cloud infrastructure. 
              Graduated with a Master's degree in Computer Engineering from Shiraz University.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Played a key role in the Cluster Health Check project at Derak Cloud Company, which 
              significantly improved cluster reliability and performance. Skilled in containerization, 
              CI/CD automation, and modern data technologies including Python, Apache Kafka, and ClickHouse.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently open to full time, part-time freelance and contract opportunities in data engineering, 
              infrastructure automation, and cloud solutions.
            </p>

            {/* <div className="flex flex-wrap gap-3">
              {['Open To Work' , 'ًRemote' , 'Part-Time' , 'Project-Based' , 'Contract'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  
                  {tech}
                </span>
              ))}
            </div> */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Open to Work Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to Work
              </span>

              {/* Other Tags */}
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                Full-Time
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                Remote
              </span>
              
              <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full border border-sky-200">
                Part-Time
              </span>
              
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                Project-Based
              </span>
              
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                Contract
              </span>
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
