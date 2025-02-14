// src/data/experienceData.ts

type Job = {
    title: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string;
    dates: string;
    description: string[]; // Ensure description is always an array
};

const experienceData: Job[] = [
    {
      title: "CEO & AI Consultant",
      company: "Unified Software Solutions",
      location: "Remote",
      startDate: "2021",
      endDate: "Present",
      dates: "2021 – Present",
      description: [
        "Founded and scaled Unified Software Solutions, leading AI-driven business solutions for finance and government sectors.",
        "Developed custom AI models for predictive analytics, business intelligence, and financial risk management.",
        "Led a team of over 150 developers and AI engineers in delivering high-performance enterprise solutions.",
        "Secured multiple government contracts, including DARPA and SOCOM projects, integrating AI into national security solutions."
      ]
    },
    {
      title: "Quantitative Researcher",
      company: "WorldQuant",
      location: "Remote",
      startDate: "2023",
      endDate: "Present",
      dates: "2023 – Present",
      description: [
        "Conducted quantitative financial modeling and algorithmic trading strategies.",
        "Developed machine learning models to optimize investment decisions and risk assessments.",
        "Utilized big data analytics to identify market trends and anomalies in financial markets."
      ]
    },
    {
      title: "Technical Strategy Consultant",
      company: "Riffe Enterprises",
      location: "Remote",
      startDate: "July 2017",
      endDate: "Feb 2021",
      dates: "July 2017 – Feb 2021",
      description: [
        "Provided strategic technology consulting for businesses integrating AI and cloud computing.",
        "Advised on cybersecurity frameworks, ensuring compliance with NIST and DoD security protocols.",
        "Developed financial models to evaluate ROI on technology investments and digital transformation initiatives."
      ]
    },
    {
      title: "Financial Advisor",
      company: "Morgan Stanley / Merrill Lynch / JP Morgan",
      location: "USA",
      startDate: "2013",
      endDate: "2017",
      dates: "2013 – 2017",
      description: [
        "Managed high-net-worth client portfolios, focusing on investment strategies and risk mitigation.",
        "Developed custom financial models for wealth preservation and growth.",
        "Consulted clients on market trends, tax optimization, and alternative investment strategies."
      ]
    },
    {
      title: "Teller",
      company: "Think Mutual Bank",
      location: "Minnesota, USA",
      startDate: "2012",
      endDate: "2013",
      dates: "2012 – 2013",
      description: [
        "Managed client accounts, assisting with mortgage loans, credit analysis, and financial planning.",
        "Conducted risk assessments for business and personal banking customers.",
        "Developed sales strategies to grow the bank’s customer base through financial education and advisory services."
      ]
    },
    {
      title: "United States Marine Corps",
      company: "U.S. Military Service",
      location: "Various Deployments",
      startDate: "2003",
      endDate: "2011",
      dates: "2003 – 2011",
      description: [
        "Served as a Marine in combat deployments, leading and training personnel in high-stakes environments.",
        "Deployed to Fallujah and the Korengal Valley, gaining extensive leadership and operational experience.",
        "Became a Chief Instructor of Water Survival and Assistant Martial Arts Instructor for Marine Corps Base Hawaii.",
        "Represented the Marine Corps as a member of the All-Marine Boxing Team before transitioning to recruiting duty.",
        "Developed and executed high-level security operations, demonstrating expertise in risk management and crisis response."
      ]
    }
  ];
  
  export { experienceData };
  export type { Job };
  export default experienceData;
