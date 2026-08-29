// Supported languages for the site.
export type Language = 'en' | 'fa';

export interface HighlightItem {
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface PublicationItem {
  title: string;
  journal: string;
  date: string;
  description: string;
  type: string;
}

export interface ContactInfoItem {
  title: string;
  value: string;
}

// The full shape of a single language's content.
// Every locale file must satisfy this interface, which keeps the
// two translations in sync and gives autocomplete across the app.
export interface Translation {
  meta: {
    title: string;
    description: string;
  };

  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    publications: string;
    experience: string;
    contact: string;
    langSwitchLabel: string;
  };

  hero: {
    name: string;
    role: string;
    tagline: string;
    viewWork: string;
    getInTouch: string;
  };

  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    badges: {
      openToWork: string;
      fullTime: string;
      remote: string;
      partTime: string;
      projectBased: string;
      contract: string;
    };
    highlights: HighlightItem[];
  };

  skills: {
    heading: string;
    subheading: string;
    categories: SkillCategory[];
    footerNote: string;
  };

  projects: {
    heading: string;
    subheading: string;
    items: ProjectItem[];
    liveDemo: string;
    code: string;
    viewMore: string;
  };

  publications: {
    heading: string;
    subheading: string;
    items: PublicationItem[];
    viewPublication: string;
  };

  experience: {
    heading: string;
    subheading: string;
    items: ExperienceItem[];
    keyAchievements: string;
  };

  contact: {
    heading: string;
    subheading: string;
    letsConnect: string;
    contactInfo: {
      email: ContactInfoItem;
      phone: ContactInfoItem;
      location: ContactInfoItem;
    };
    followMe: string;
    form: {
      heading: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      toastTitle: string;
      toastDescription: string;
    };
  };
}
