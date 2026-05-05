export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = {
  Programming: ["Python", "JavaScript", "SQL", "TypeScript", "HTML", "CSS"],
  Tools: [
    "Visual Studio",
    "PyCharm",
    "Eclipse",
    "Git",
    "Docker",
    "Apache Airflow",
    "dbt",
    "n8n",
    "Jupyter",
    "Selenium",
    "Cursor",
    "Claude",
    "Portianer",
  ],
  Cloud: ["Amazon Web Services", "Azure API Management", "Google Cloud"],
  Databases: [
    "PostgreSQL",
    "SQL Server",
    "BigQuery",
    "MySQL",
    "Oracle",
    "MongoDB",
  ],
};

export const EXPERIENCE = [
  {
    role: "Full Stack Developer (Full-time)",
    company: "Carus Digital GmbH",
    period: "08/2022 – Present",
    location: "Leipzig, Germany",
    bullets: [
      "Deliver end-to-end development and technical support for Payroll, Accounting and HR management softwares.",
      "Design and implement new features, resolve bugs, and improve performance in web applications.",
      "Ensure secure data handling, optimize workflows, and improve overall operational efficiency.",
      "Work with Python (Django), JavaScript (React/Vue), PostgreSQL and RESTful APIs",
      "Design and maintain CI/CD pipelines to automate build, testing, and deployment processes, ensuring reliable and consistent releases across environments.",
      "Actively contribute to sprint planning and collaborating with cross-functional teams to define, estimate, and deliver features aligned with product goals.",
      "Manage deployment of application releases, coordinating rollout, monitoring system performance, and resolving issues to ensure stable production environments.",
      "Manage containerized deployments using Docker and leverage AWS services such as EC2, ECS, Lambda, S3, and RDS to build and operate cloud-native solutions.",
    ],
  },
  {
    role: "Master Thesis (Part-time)",
    company: "Fraunhofer IEM",
    period: "Jul 2021 – Feb 2022",
    location: "Paderborn, Germany · Remote",
    bullets: [
      "Conducted in-depth research on digital B2B platforms to create a comprehensive monitoring approach.",
      "Collaborated with experts at Fraunhofer IEM to align the monitoring strategy with industry standards.",
      "Analyzed operational data to identify key performance indicators for effective platform management.",
      "Designed a state-of-the-art architecture for monitoring B2B platforms and developed a recommendation system to enhance performance.",
    ],
  },
  {
    role: "Full Stack Engineer (Part-time)",
    company: "UNITY AG",
    period: "Sep 2020 – Feb 2022",
    location: "Büren, Germany",
    bullets: [
      "Developed both frontend and backend components for the Unity Consulting and Innovation Platform (UCIP) using Vue.js, Python and Azure SQL Database.",
      "Automated the generation of PowerPoint slides by creating a Python server with FastAPI integrated with the Vue application.",
      "Utilized Azure Cloud Services, Azure API Management, Git, Docker, and Kubernetes to enhance project efficiency and deployment.",
    ],
  },
  {
    role: "Web Developer (Part-time)",
    company: "Trainings-Online GmbH",
    period: "Mar 2020 – Aug 2020",
    location: "Bielefeld, Germany",
    bullets: [
      "Administered and maintained the ColdFusion App and Database server to ensure optimal performance.",
      "Developed the frontend of the Campus Management System using HTML, CSS, JavaScript and TypeScript enhancing user experience.",
      "Created and deployed an online url link shortener system utilizing JavaScript, HTML, CSS, ColdFusion Server, and MySQL database.",
    ],
  },
  {
    role: "Software Developer (Part-time)",
    company: "Universität Paderborn",
    period: "Nov 2018 – Nov 2019",
    location: "Paderborn, Germany",
    bullets: [
      "Designed and prototyped user interfaces for static analysis tools, enhancing user experience.",
      "Developed and maintained software analysis platform utilizing HTML, CSS, Javascript, Python and C++.",
      "Conducted scripting and data extraction to support user studies, providing insights for product improvements.",
    ],
  },
  {
    role: "Unity 3D Game Developer (Full-time)",
    company: "Pocket Club Pvt. Ltd.",
    period: "Mar 2017 – Sep 2017",
    location: "Islamabad, Pakistan",
    bullets: [
      "Developed engaging 3D mobile games using the Unity game engine and C#.",
      "Designed comprehensive game plans to enhance user experience and gameplay.",
      "Implemented and tested various functionalities for Android mobile games.",
    ],
  },
  {
    role: "Software Development (Internship)",
    company: "Robotic Sensing and Ambient Intelligence Lab",
    period: "Aug 2015 – Jul 2016",
    location: "Islamabad, Pakistan",
    bullets: [
      "Developed a web service to analyze server access logs, focusing on anomaly detection and reporting.",
      "Designed different dashboards to visualize data related to server logs and anomalies.",
      "Utilized a technology stack including HTML, CSS, JavaScript, Node.js, API Integration, D3 Graphs and Distributed Database.",
    ],
  },
  {
    role: "Software Developer (Internship)",
    company: "Apollo Telecom Pvt. Ltd.",
    period: "Jul 2015 – Aug 2015",
    location: "Islamabad, Pakistan",
    bullets: [
      "Developed Windows Desktop Applications using C#, enhancing user experience and functionality.",
      "Collaborated with senior developers to design application architecture and implement features.",
      "Gained hands-on experience in software development practices and agile methodologies.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master in Computer Science",
    institution: "Universität Paderborn",
    period: "2017 – 2022",
    location: "Paderborn, Germany",
    details: "GPA: 2,2",
  },
  {
    degree: "Bachelor in Computer Science",
    institution: "COMSATS University",
    period: "2012 – 2016",
    location: "Islamabad, Pakistan",
  },
];

export const CERTIFICATIONS = [
  { name: "Data Engineering Foundations", pdf: "/certifications/data-engineering-foundations.pdf" },
  { name: "Microservices Foundations Professional Certificate", pdf: "/certifications/Microservices_Foundations.pdf" },
  { name: "DevOps Professional Certificate", pdf: "/certifications/devops-professional-certificate.pdf" },
  { name: "Docker Foundations Professional Certificate", pdf: "/certifications/docker-foundations-professional-certificate.pdf" },
  { name: "Career Essentials in Project Management", pdf: "/certifications/career-essentials-in-project-management.pdf" },
  { name: "Career Essentials in GitHub Professional Certificate", pdf: "/certifications/career-essentials-in-github-professional-certificate.pdf" },
  { name: "Building Chatbot with OpenAI and LangChain", pdf: "/certifications/building-chatbot-with-openai-and-langchain.pdf" },
  { name: "Enterprise Architecture in Practice", pdf: "/certifications/enterprise-architecture-in-practice.pdf" },
  { name: "Master SQL with PostgreSQL", pdf: "/certifications/master-sql-with-postgresql.pdf" },
  { name: "Managing Projects with Azure DevOps", pdf: "/certifications/Azure_DevOps.pdf" },
  { name: "Data Analysis with Python", pdf: "/certifications/data-analysis-with-python.pdf" },
  { name: "Data Science with Python", pdf: "/certifications/data-science-with-python.pdf" },
  { name: "Data Visualization with Python", pdf: "/certifications/data-visualization-with-python.pdf" },
  { name: "AWS Cloud Computing Essentials", pdf: "/certifications/aws-cloud-computing-essentials.pdf" },
  { name: "Build with Amazon EC2", pdf: "/certifications/build-with-amazon-ec2.pdf" },
  { name: "Managing Amazon Simple Storage Service (Amazon S3)", pdf: "/certifications/managing-amazon-s3.pdf" },
  { name: "AWS Lambda functions", pdf: "/certifications/aws-lambda-functions.pdf" },
];

export const PROJECTS = [
  {
    name: "Data Analyzer with AI Chatbot",
    description:
      "A web application integrated with an AI chatbot that allows users to upload and analyze datasets through natural language queries. Powered by OpenAI and LangChain for intelligent data insights. It's frontend is deployed on Vercel and backend is deployed on Render.",
    tech: ["Vue.js", "Python", "FastAPI", "JavaScript", "TypeScript", "OpenAI", "LangChain", "Vercel", "Render"],
    github: "https://github.com/HaseebAhmad23/data-analyzer-with-chatbot",
    liveUrl: "https://data-analyzer-with-chatbot.vercel.app/",
  },
  {
    name: "Todos Application Manager",
    description:
      "A fullstack todo application for task management featuring an automated workflow pipeline. Supports creating, updating, and tracking tasks with a clean and responsive interface.",
    tech: ["Python", "Flask", "JavaScript", "PostgreSQL", "Docker", "n8n"],
    github: "https://github.com/HaseebAhmad23/todos-app",
    liveUrl: null,
  },
  {
    name: "ELT Data Pipeline",
    description:
      "An end-to-end ELT pipeline that extracts data from PostgreSQL, loads it into Google BigQuery, orchestrates the workflow using Apache Airflow running in Docker containers and and then transforms raw BigQuery data into analytics-ready dimensional models using dbt.",
    tech: ["Python", "Apache Airflow", "PostgreSQL", "BigQuery", "dbt", "Docker"],
    github: "https://github.com/HaseebAhmad23/elt-data-pipeline",
    liveUrl: null,
  },
  {
    name: "Customer Insights Dashboard",
    description:
      "A SaaS analytics customer insights dashboard tool. It tracks user signups, feature usage, and engagement behaviour, then segments users into Active, Medium, and At Risk categories. The backend is Django REST Framework with a custom engagement scoring engine, and the frontend is React with Recharts for live data visualisation.",
    tech: ["React.js", "Recharts", "Python", "Django", "JavaScript", "SQLite", "Docker"],
    github: "https://github.com/HaseebAhmad23/customer-insights-dashboard",
    liveUrl: null,
  },
  {
    name: "Portfolio Website",
    description:
      "A portfolio website built with a responsive frontend layout to showcase my experience, skills, certifications, and projects. It's deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/HaseebAhmad23/portfolio-website",
    liveUrl: "https://www.haseebstudios.de/",
  },
];

export const LANGUAGES = [
  { name: "German", level: "Basic" },
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
];
