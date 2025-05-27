
import React from 'react';
import { Code, Server, Smartphone, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, and modern JavaScript frameworks"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Proficient in Node.js, Express, and RESTful API design"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Experience with MongoDB, PostgreSQL, and database optimization"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native and progressive web app development"
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
              Passionate Developer with 5+ Years Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated full-stack developer who loves creating innovative solutions 
              and bringing ideas to life through code. My journey in web development started 
              with a curiosity about how things work behind the scenes, and it has evolved 
              into a passion for building exceptional user experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in modern JavaScript technologies and have a strong foundation 
              in both frontend and backend development. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Git'].map((tech) => (
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
