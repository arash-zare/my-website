
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "A two-tier multi-objective service placement in container-based fog-cloud computing platforms",
      journal: "Cluster Computing (Springer)",
      date: "Nov 28, 2023",
      description: "Research on optimizing service placement in container-based fog-cloud computing environments using multi-objective optimization techniques.",
      link: "#", // Replace with actual paper link when available
      type: "Journal Article"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Research contributions in cloud computing and container orchestration
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {publication.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="font-medium text-blue-600">{publication.journal}</span>
                        <span>•</span>
                        <span>{publication.date}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {publication.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {publication.description}
                  </p>
                  
                  <a 
                    href={publication.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    View Publication
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
