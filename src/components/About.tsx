import React from 'react';
import { Server, Database, Cloud, Monitor } from 'lucide-react';
import { useLanguage } from '@/i18n';

const highlightIcons = [
  <Cloud className="w-8 h-8" />,
  <Database className="w-8 h-8" />,
  <Server className="w-8 h-8" />,
  <Monitor className="w-8 h-8" />,
];

const About = () => {
  const { t } = useLanguage();
  const highlights = t.about.highlights.map((item, index) => ({
    ...item,
    icon: highlightIcons[index],
  }));

  const badgeTags = [
    { label: t.about.badges.fullTime, className: 'bg-blue-50 text-blue-700 border-blue-200' },
    { label: t.about.badges.remote, className: 'bg-blue-50 text-blue-700 border-blue-200' },
    { label: t.about.badges.partTime, className: 'bg-sky-50 text-sky-700 border-sky-200' },
    { label: t.about.badges.projectBased, className: 'bg-purple-50 text-purple-700 border-purple-200' },
    { label: t.about.badges.contract, className: 'bg-amber-50 text-amber-700 border-amber-200' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.heading}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {t.about.subheading}
            </h3>
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-2">
              {/* Open to Work Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t.about.badges.openToWork}
              </span>

              {/* Other Tags */}
              {badgeTags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${tag.className}`}
                >
                  {tag.label}
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
