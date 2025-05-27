
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "Tehran, Iran",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and modern JavaScript. Worked closely with UX/UI designers to implement pixel-perfect designs.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced page load times by 60%",
        "Introduced TypeScript to the codebase"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Tehran, Iran", 
      period: "2019 - 2020",
      description: "Started my professional journey building websites and learning modern development practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Completed 20+ client projects",
        "Learned React and Node.js",
        "Contributed to open-source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my expertise
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="md:ml-16 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col lg:items-end gap-1">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
