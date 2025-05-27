
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "Go", level: 85 },
        { name: "Bash Scripting", level: 88 },
        { name: "SQL", level: 82 }
      ]
    },
    {
      title: "Big Data & Infrastructure", 
      skills: [
        { name: "Hadoop", level: 85 },
        { name: "Kafka", level: 88 },
        { name: "ClickHouse", level: 80 },
        { name: "Kubernetes", level: 90 },
        { name: "Docker", level: 92 }
      ]
    },
    {
      title: "DevOps & Monitoring",
      skills: [
        { name: "Ansible", level: 85 },
        { name: "Grafana", level: 88 },
        { name: "Prometheus", level: 82 },
        { name: "ELK Stack", level: 80 },
        { name: "Minio", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build robust data infrastructures and scalable cloud systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
