export type Course = {
  slug: string;
  category: string;
  name: string;
  icon: string;
  description: string;
  fullDescription: string;
  nqfLevel: number;
  saqaid: string;
  credits: number;
  duration: string;
  outcomes: string[];
  modules: {
    title: string;
    topics: string[];
  }[];
  careerOpportunities: string[];
  purposeAndValue: {
    purpose: string;
    value: string[];
  };
  programDetails: {
    duration: string;
    learningApproach: string;
    requirements: string[];
  };
};

export const coursesData: Course[] = [
  // ICT Courses
  {
    slug: "cloud-administrator",
    category: "ict",
    name: "Occupational Certificate: Cloud Administrator",
    icon: "/icons/cloud-admin.svg",
    description:
      "Learning cloud administration fundamentals, including deployment, configuration, and management of cloud environments.",
    fullDescription:
      "This comprehensive program prepares you for a career in cloud administration. You'll learn to deploy, configure, and manage cloud infrastructure across major platforms such as Micrososft Azure. The course covers essential skills in virtualization, security, monitoring, and automation.",
    nqfLevel: 4,
    saqaid: "118699",
    credits: 149,
    duration: "12 months",
    outcomes: [
      "Deploy and configure cloud infrastructure",
      "Manage virtual machines and containers",
      "Implement cloud security best practices",
      "Monitor and optimize cloud resources",
      "Automate cloud operations using scripting",
    ],
    modules: [
      {
        title: "Knowledge Modules (38 Credits)",
        topics: [
          "Introduction to Cloud Computing, 8 Credits",
          "Cloud Computing Elements, 8 Credits",
          "Containers, Cloud Native and Kubernetes, 4 Credits",
          "Cloud Security, Risks, Vulnerabilities and Mitigation, 3 Credits",
          "Data and Databases in the Cloud, 6 Credits",
          "Fundamentals of Cloud Computing Platforms, 3 Credits",
          "Introduction to Cloud Computing Governance, Legislation and Ethics, 1 Credit",
          "4th Industrial Revolution (4IR) and Future Skills, 4 Credits",
          "Design Thinking Principles for Innovation, 1 Credit",
        ],
      },
      {
        title: "Practical Skill Modules (55 Credits) ",
        topics: [
          "Conduct Effective Sever Maintenance and Optimisation, 8 Credits",
          "Monitor On-Demand Availability of Data Storage, Storage Capacity and Storage Services over the Internet, 8 Credits",
          "Provide Cloud Network Administration and Support for Optimal Performance, 16 Credits",
          "Ensure Integrity of the Cloud Ecosystem by Implementing Security Measures, 8 Credits",
          "Access and Visualise Structured Data Using Spreadsheets, 8 Credits",
          "Participate in a Design Thinking for Innovation Workshop, 3 Credits",
          "Function Ethically and Effectively in the Workplace, 4 Credits",
        ],
      },
      {
        title: "Work Experience Modules (56 Credits) ",
        topics: [
          "On-Demand Availability of Server Resources and Services over the Internet, 20 Credits",
          "On-Demand Availability of Data Storage, Storage Capacity and Storage Services over the Internet, 16 Credits",
          "Ensure Availability and Reliability of Network Connection According to Workflow and Security Protocols, 20 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Cloud Administrator",
      "Cloud Support Engineer",
      "DevOps Engineer",
      "Systems Administrator",
      "Microsoft Azure Administrator",
    ],
    purposeAndValue: {
      purpose:
        "This qualification prepares learners to manage and administer cloud computing environments effectively. It equips students with the technical expertise needed to deploy, configure, and maintain cloud infrastructure across major platforms, addressing the growing demand for cloud professionals in the digital economy.",
      value: [
        "Gain hands-on experience with the Microsoft Azure cloud platform",
        "Develop in-demand skills for the rapidly growing cloud computing industry",
        "Learn automation techniques to improve operational efficiency",
        "Build a strong foundation for advanced cloud certifications",
        "Access to industry-standard tools and real-world cloud environments",
      ],
    },
    programDetails: {
      duration:
        "The program runs for 12 months with flexible learning options designed to accommodate working professionals and full-time students.",
      learningApproach:
        "Blended learning combining online theoretical modules, hands-on labs, virtual instructor-led sessions, and practical cloud projects. Interactive sessions scheduled twice weekly with access to cloud lab environments.",
      requirements: [
        "NQF level 3 qualification (Grade 11)",
        "Basic computer literacy",
        "Understanding of networking concepts (recommended)",
        "English proficiency",
      ],
    },
  },
  {
    slug: "software-developer",
    category: "ict",
    name: "Occupational Certificate: Software Developer",
    icon: "/icons/software-development.svg",
    description:
      "Learning software development fundamentals, including programming languages, application design, and database integration.",
    fullDescription:
      "Become a professional software developer with this comprehensive program covering modern programming languages, application design principles, and database integration. Learn to build scalable web and mobile applications using industry-standard tools and frameworks.",
    nqfLevel: 5,
    saqaid: "118707",
    credits: 220,
    duration: "24 months",
    outcomes: [
      "Develop full-stack web applications",
      "Design and implement databases",
      "Apply object-oriented programming principles",
      "Build RESTful APIs and microservices",
      "Use version control and collaboration tools",
    ],
    modules: [
      {
        title: "Knowledge Modules (66 Credits)",
        topics: [
          "Computers and Computing Systems, 12 Credits",
          "Desktop & Professional Software for Communication, 8 Credits",
          "Automated Web Scraping as a Data Source, 8 Credits",
          "Logical Thinking and Basic Calculations, 2 Credits",
          "Computing Theory, 2 Credits",
          "Software Development with HTML5, Open Source Frameworks & Libraries, 16 Credits",
          "UML as a Standard Modelling Language, 4 Credits",
          "Querying, Manipulating & Presenting Data with/without MVC, 6 Credits",
          "SDLC, Programming Languages, Algorithms & Security, 3 Credits",
          "Governance, Legislation & Ethics, 2 Credits",
          "4IR & Future Skills, 2 Credits",
          "Design Thinking for Innovation, 1 Credit",
        ],
      },
      {
        title: "Practical Skill Modules (89 Credits)",
        topics: [
          "Use Software to Communicate and Visualise Information, 3 Credits",
          "Use & Manage Spreadsheets and Workbooks, 3 Credits",
          "Use Desktop Applications to Analyse, Visualise and Report on Data, 3 Credits",
          "Use a Visual Analytics Platform and Visualisation Tools to Analyse, Visualise and report on Data, 3 Credits",
          "Query and Massage Data, 3 Credits",
          "Apply Logical Thinking and Maths, 3 Credits",
          "Apply Code to use a Software Toolkit/Platform in the Field of Study or Employment, 3 Credits",
          "Develop Software using HTML5, Opensource Frameworks and Libraries, 16 Credits",
          "Design and Build Web Applications, Desktop Graphical User Interfaces or Mobile Apps, 8 Credits",
          "Use a Cloud Automation Platform to Create Solutions, 8 Credits",
          "Develop Software using Python, 12 Credits",
          "Apply the Development Cycle when Developing Software, 16 Credits",
          "Participate in a Design Thinking for Innovation Workshop, 4 Credits",
          "Function Ethically and Effectively in a Team, 4 Credits",
        ],
      },
      {
        title: "Work Experience Modules (65 Credits)",
        topics: [
          "Technical Requirement Analysis & Refinement, 15 Credits",
          "Process Modelling, 15 Credits",
          "Programming for Software Solutions, 25 Credits",
          "Capstone Project: Delivering a real, production-level application, 10 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Software Developer",
      "Full-Stack Developer",
      "Web Developer",
      "Mobile App Developer",
      "Backend Engineer",
    ],
    purposeAndValue: {
      purpose:
        "This qualification develops comprehensive software development competencies, enabling learners to design, build, and maintain professional-grade applications. It bridges the gap between theoretical computer science knowledge and practical software engineering skills required in modern development environments.",
      value: [
        "Master multiple programming languages and frameworks",
        "Build a professional portfolio of real-world projects",
        "Learn GitHub for Version Control & Collaboration",
        "Gain full-stack development capabilities for versatile career options",
        "Access mentorship from experienced software developers",
        "In addition, learners gain access to recognized certifications such as CompTIA A+/N+/S+ and selected Microsoft DP pathways.",
      ],
    },
    programDetails: {
      duration:
        "The comprehensive 24-month program allows for deep learning and mastery of complex software development concepts while building substantial project experience.",
      learningApproach:
        "Project-based learning combining theoretical instruction, coding workshops, pair programming sessions, and capstone projects. Weekly live coding sessions and code reviews with experienced mentors, plus access to online learning materials and development environments.",
      requirements: [
        "Grade 12 with Mathematics or Mathematical Literacy",
        "NQF Level 4 qualification (Alternative)",
        "Computer with at minimum 8GB RAM, Intel core i5 12th gen/AMD Ryzen 5 7500 and 200gb SSD with windows 11",
        "Stable internet connection for collaborative coding",
        "Commitment to regular practice and project work",
      ],
    },
  },
  {
    slug: "cybersecurity-analyst",
    category: "ict",
    name: "Occupational Certificate: Cybersecurity Analyst",
    icon: "/icons/cyber-security.svg",
    description:
      "Learning essential security principles, threat management, and network protection for modern digital environments.",
    fullDescription:
      "Protect organizations from cyber threats with this specialized cybersecurity program. Learn to identify vulnerabilities, implement security measures, and respond to security incidents effectively.",
    nqfLevel: 5,
    saqaid: "118986",
    credits: 173,
    duration: "12 months",
    outcomes: [
      "Identify and assess security vulnerabilities",
      "Implement network security measures",
      "Monitor and respond to security incidents",
      "Conduct security audits and assessments",
      "Apply security frameworks and compliance standards",
      "Use SOC tools, SIEM systems, and security documentation procedures",
    ],
    modules: [
      {
        title: "Knowledge Modules (53 Credits)",
        topics: [
          "Introduction to Cybersecurity, 8 Credits",
          "Fundamentals of Network Security and Defence, 12 Credits",
          "Cybersecurity and Cyber Threats and Attacks, 12 Credits",
          "Introduction to Cybersecurity Governance, Legislation and Ethics, 4 Credits",
          "Fundamentals of Design Thinking and Innovation, 1 Credit",
          "Logical Thinking and Basic Calculations, 3 Credits",
          "Computers, Devices and Computing Systems, 6 Credits",
          "Data and Database Vulnerabilities, 3 Credits",
          "Introduction to 4IR and Future Skills, 4 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (68 Credits)",
        topics: [
          "Ensure Compliance in terms of Legal Cybersecurity Requirements and National and International Standards, 4 Credits",
          "Assess Risks and Vulnerabilities and Current Security Measures, 20 Credits",
          "Implement Protection, Prevention and Detection Measures to Mitigate Risk, Violations and Vulnerabilities, 20 Credits",
          "Apply Logical Thinking and Maths, 6 Credits",
          "Apply Basic Scriptwriting for Cybersecurity Toolsets, 4 Credits",
          "Access and Visualise Structured Data Using Spreadsheets, 5 Credits",
          "Apply Design Thinking Methodologies, 4 Credits",
          "Function Ethically and Effectively as a Member of a Multidisciplinary Team, 5 Credits",
        ],
      },
      {
        title: "Work Experience Modules (52 Credits)",
        topics: [
          "Compliance with Legal Cybersecurity Requirements, 12 Credits",
          "Cybersecurity Risk Assessment and Mitigation, 20 Credits",
          "Cybersecurity Detection, Protection and Prevention Processes, 20 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Cybersecurity Analyst",
      "Security Operations Center (SOC) Analyst",
      "Incident Response Specialist",
      "Network Security Specialist",
      "Security Consultant",
      "Penetration Tester",
    ],
    purposeAndValue: {
      purpose:
        "This qualification addresses the critical need for cybersecurity professionals who can protect organizational assets from evolving cyber threats. It prepares learners to implement security controls, monitor threats, and respond effectively to security incidents in accordance with industry standards and regulations.",
      value: [
        "Enter one of the fastest-growing and most in-demand career fields",
        "Learn to protect critical business assets and data",
        "Gain practical experience with security tools and technologies",
        "Understand compliance requirements including POPIA and ISO 27001",
        "Develop incident response and threat analysis capabilities",
        "Gain recognized vendor certifications such as CompTIA Security+ / CySA+",
      ],
    },
    programDetails: {
      duration:
        "The intensive 12-month program provides focused training in cybersecurity principles, tools, and practices with emphasis on hands-on security labs.",
      learningApproach:
        "Practical security training using virtual labs, simulated attack scenarios, and real-world case studies. Includes security tool workshops, threat hunting exercises, and incident response simulations. Live sessions three times weekly with continuous access to security lab environments.",
      requirements: [
        "Grade 12 or NQF Level 4 qualification",
        "Any relevant NQF 4 IT-related qualification",
        "Reliable high-speed internet connection",
        "Strong analytical and problem-solving mindset",
        "Computer with at minimum 8GB RAM, Intel core i5 12th gen/AMD Ryzen 5 7500 and 200gb SSD with windows 11",
      ],
    },
  },
  {
    slug: "computer-technician",
    category: "ict",
    name: "Occupational Certificate: Computer Technician",
    icon: "/icons/computer-technician.svg",
    description:
      "Learning hardware and software troubleshooting, maintenance, and repair for computer systems.",
    fullDescription:
      "Master the skills needed to diagnose, maintain, and repair computer systems. This hands-on program covers hardware components, operating systems, networking basics, and customer service.",
    nqfLevel: 5,
    saqaid: "101408",
    credits: 282,
    duration: "24 Months",
    outcomes: [
      "Diagnose and repair hardware issues",
      "Install and configure operating systems, hardware components and peripherals",
      "Troubleshoot software problems",
      "Build and upgrade computer systems",
      "Provide technical support to users",
    ],
    modules: [
      {
        title: "Knowledge Modules (109 Credits)",
        topics: [
          "Introduction to Data Communication and Networking, 15 Credits",
          "Basics of Computer Architecture: Hardware, 30 Credits",
          "Basics of Computer Architecture: Software, 30 Credits",
          "Basic Concepts of Sustainable Computer Environment and Green Technologies, 10 Credits",
          "Social Media and Digital Literacy, 5 Credits",
          "End User Computing, 6 Credits",
          "Business communication and customer services, 8 Credits",
          "Ready for work standards, 5 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (73 Credits)",
        topics: [
          "Troubleshoot computer and network faults, 30 Credits",
          "Maintain computer and network security, 8 Credits",
          "Provide support to end Users, 30 Credits",
          "Install computer software and hardware, 5 Credits",
        ],
      },
      {
        title: "Work Experience Modules (100 Credits)",
        topics: [
          "Respond to user inquiries regarding fault request, 30 Credits",
          "Set up equipment for users, check operating system performance and ensure proper installation of cables and software, 25 Credits",
          "Processes of maintaining computer systems and peripherals, 15 Credits",
          "Identify the potential green technologies, processes and procedures for cost effective application and create a sustainable computer environment to reduce e-waste, 10 Credits",
          "Maintain records of daily data communication transactions, problems and remedial actions taken, or installation activities, 20 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Computer Technician",
      "IT Support Specialist",
      "Help Desk Technician",
      "Field Service Technician",
      "PC Repair Specialist",
    ],
    purposeAndValue: {
      purpose:
        "This qualification develops practical competencies in computer hardware and software maintenance, repair, and troubleshooting. It prepares learners to provide essential technical support services across various organizational settings, ensuring smooth operation of computer systems and networks.",
      value: [
        "Gain hands-on experience with computer hardware and software systems",
        "Develop problem-solving skills applicable across IT environments",
        "Learn both in-person and remote support techniques",
        "Build customer service excellence alongside technical skills",
        "Access to hardware labs and diagnostic tools for practical training",
        "Gain access to recognized certifications such as CompTIA A+, CompTIA Network+, Micrososft and CISCO",
      ],
    },
    programDetails: {
      duration:
        "The 24-month program provides extensive hands-on training with computer systems, allowing time for mastery of hardware, software, and troubleshooting techniques.",
      learningApproach:
        "Practical workshop-based learning with access to computer hardware labs, diagnostic tools, and repair equipment. Combines hands-on repair sessions, operating system installations, troubleshooting scenarios, and customer service simulations. Weekly practical labs with theoretical online modules.",
      requirements: [
        "Grade 12 or equivalent qualification",
        "Basic understanding of computer operations",
        "Relevant NQF Level 4 qualification in IT or related field",
      ],
    },
  },
  {
    slug: "data-science-practitioner",
    category: "ict",
    name: "Occupational Certificate: Data Science Practitioner",
    icon: "/icons/data-science.svg",
    description:
      "Learning data analysis, statistical modeling, and machine learning techniques for extracting insights from complex datasets.",
    fullDescription:
      "Unlock the power of data with this comprehensive data science program. Learn to analyze complex datasets, build predictive models, and communicate insights effectively to stakeholders.",
    nqfLevel: 5,
    saqaid: "118708",
    credits: 185,
    duration: "12 months",
    outcomes: [
      "Analyze and visualize complex datasets",
      "Build predictive models using machine learning",
      "Apply statistical methods to business problems",
      "Clean and prepare data for analysis",
      "Communicate data insights effectively",
    ],
    modules: [
      {
        title: "Knowledge Modules (66 Credits)",
        topics: [
          "Introduction to Data Science and Data Analysis, 6 Credits",
          "Logical Thinking and Basic Calculations, 4 Credits",
          "Computers and Computing Systems, 4 Credits",
          "Computing Theory, 2 Credits",
          "Basic Statistics for Data Analytics, 10 Credits",
          "Statistics Essentials for Data Analytics, 4 Credits",
          "Data Science and Data Analysis, 12 Credits",
          " Data Analysis and Visualisation, 16 Credits",
          "Governance, Legislation and Ethics, 3 Credits",
          "Design Thinking and Innovation, 4 Credits",
          "4IR and Future Skills, 1 Credit",
        ],
      },
      {
        title: "Practical Skills Modules (59 Credits)",
        topics: [
          "Apply Logical Thinking and Maths Refresher, 3 Credits",
          "Apply Code to Use a Software Toolkit/Platform in the Field of Study or Employment, 4 Credits",
          "Use Spreadsheets to Analyse and Visualise Data, 3 Credits",
          "Use a Visual Analytics Platform to Analyse and Visualise Data, 4 Credits",
          "Apply Statistical Tools and Techniques, 4 Credits",
          "Collect and Pre-Process Large Amounts of Unruly Data, 12 Credits",
          "Apply Data Analysis Techniques to Uncover Patterns and Trends in Datasets, 12 Credits",
          "Prepare and Present Descriptive Analytic Reports for Decision Making, 12 Credits",
          "Participate in a Design Thinking for Innovation Workshop, 3 Credits",
          "Collaborate Ethically and Effectively in the Workplace, 2 Credits",
        ],
      },
      {
        title: "Work Experience Modules (60 Credits)",
        topics: [
          "Data Collection & Pre-processing, 16 Credits",
          "Statistical Data Analysis, 16 Credits",
          "Data Visualization & Reporting, 16 Credits",
          "Capstone Project Using an Appropriate Toolkit, 12 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Science Practitioner",
      "Analytics Consultant",
      "Insights Analyst",
    ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Data Science Practitioner equips learners with the analytical, statistical, and technical capabilities required to transform raw data into meaningful, actionable insights for business decision-making. As organisations increasingly rely on data-driven strategies, this qualification prepares learners to operate effectively in modern data environments — from data collection and cleaning to modelling, visualisation, and reporting.",
      value: [
        "Master Python and essential data science libraries",
        "Learn to build and evaluate machine learning models",
        "Develop data storytelling and visualization skills",
        "Work with real business datasets and case studies",
        "Gain industry recognized certifications such as Microsoft BI/Microsoft Azure Data Fundamentals ",
      ],
    },
    programDetails: {
      duration:
        "The 12-month program balances theoretical foundations with practical application, providing sufficient time to develop programming skills and analytical thinking.",
      learningApproach:
        "Project-based learning using real-world datasets and business cases. Combines online programming tutorials, data analysis workshops, machine learning projects, and business presentation exercises. Weekly live coding sessions and peer collaboration with access to cloud-based data science platforms.",
      requirements: [
        "Grade 12 with Mathematics",
        "Reliable internet for cloud-based tools and platforms",
        "Strong analytical and logical thinking abilities",
        "Computer with at minimum 8GB RAM, Intel core i5 12th gen/AMD Ryzen 5 7500 and 200gb SSD with windows 11",
      ],
    },
  },

  // BUSINESS COURSES
  {
    slug: "project-manager",
    category: "business",
    name: "Occupational Certificate: Project Manager",
    icon: "/icons/project-management.svg",
    description:
      "Learning project planning, execution, and monitoring using industry-standard methodologies and tools.",
    fullDescription:
      "Lead successful projects from initiation to closure with this comprehensive project management program. Master industry-standard methodologies, tools, and techniques to deliver projects on time and within budget and scope.",
    nqfLevel: 5,
    saqaid: "101869",
    credits: 240,
    duration: "24 months",
    outcomes: [
      "Develop comprehensive project plans",
      "Manage project teams effectively",
      "Document project progress, maintain records, and produce reports",
      "Manage project risks and issues",
      "Communicate with stakeholders",
      "Ensure projects comply with organisational standards, policies, and quality requirements",
    ],
    modules: [
      {
        title: "Knowledge Modules (80 Credits)",
        topics: [
          "Introductory Studies for Project Managers, 4 Credits.",
          "Project Integration Management, 4 Credits",
          "Project Scope Management, 8 Credits",
          "Project Time Management, 8 Credits.",
          "Project Cost Management, 8 Credits.",
          "Project Quality Management, 8 Credits",
          "Project Human Resource Management, 8 Credits",
          "Project Communications Management, 8 Credits",
          "Project Risk Management, 8 Credits",
          "Project Procurement Management, 8 Credits",
          "Project Stakeholder Management, 8 Credits",
        ],
      },
      {
        title: "Practical Skills Modules (100 Credits)",
        topics: [
          "Initiate a project, 4 Credits",
          "Plan and develop a project management approach and scope statement, 8 Credits",
          "Plan and develop a project time line and schedule, 8 Credits",
          "Plan for and project the cost of a project, 8 Credits",
          "Plan project management systems, 8 Credits",
          "Monitor and control the scope of a project, 8 Credits",
          "Control the project delivery schedules and costs, 8 Credits",
          "Control the project quality, 8 Credits.",
          "Manage and control the human resources of a project, 8 Credits",
          "Conduct and control project communication and stakeholder interaction, 8 Credits",
          "Manage and control project risks, 8 Credits",
          "Manage and control project procurement activities, 8 Credits",
          "Manage and control project close-out activities, 8 Credits",
        ],
      },
      {
        title: "Work Experience Modules (60 Credits)",
        topics: [
          "Attend to project initiation management processes, 10 Credits",
          "Attend to project planning processes, 20 Credits",
          "Attend to project execution and control processes, 20 Credits.",
          " Attend to project close out processes, 10 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Qualified Project Managers may find careers in various industries as",
      "Project Managers",
      "Project Coordinators",
      "Program Managers",
      "Project Management Officers (PMO)",
      "Scrum Masters",
    ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Project Manager equips learners with practical and theoretical knowledge to plan, execute, monitor, and successfully close business projects. This programme develops the essential skills required to manage project resources, schedules, budgets, risks, and deliverables while maintaining effective communication with stakeholders.",
      value: [
        "Learn globally recognized project management methodologies such as PMBOK principles and Agile practices ",
        "Develop leadership and team management capabilities",
        "Gain practical experience with industry-standard PM tools",
        "Build skills transferable across all industries and sectors",
        "Prepare for professional project management certifications",
      ],
    },
    programDetails: {
      duration:
        "The comprehensive 24-month program allows learners to develop both theoretical knowledge and practical project management experience through real-world applications.",
      learningApproach:
        "Blended learning combining case study analysis, project simulations, stakeholder management exercises, and capstone projects. Includes weekly interactive sessions, group project work, and mentorship from experienced project managers. Access to project management software and collaboration tools.",
      requirements: [
        "Grade 12 or NQF Level 4 qualification with mathematics and/or business studies",
        "Strong communication and interpersonal skills",
        "Computer literacy and internet access",
      ],
    },
  },
  {
    slug: "contact-centre-manager",
    category: "business",
    name: "Occupational Certificate: Contact Centre Manager",
    icon: "/icons/contact-center-management.svg",
    description:
      "Learn contact centre operations, customer service excellence, and performance management.",
    fullDescription:
      "Excel in managing contact centre operations with this specialized program covering customer service strategies, team management, and performance optimization.",
    nqfLevel: 5,
    saqaid: "99687",
    credits: 285,
    duration: "18 months",
    outcomes: [
      "Manage contact centre operations",
      "Develop customer service strategies",
      "Monitor and improve team performance",
      "Implement quality assurance processes",
      "Analyze customer feedback and metrics",
    ],
    modules: [
      {
        title: "Knowledge Modules (80 Credits)",
        topics: [
          "Introductory studies for Contact Centre Managers, 4 Credits",
          "Communication, 4 Credits",
          "Operational Supervision, 4 Credits",
          "Operational Management, 4 Credits",
          "People Management, 6 Credits",
          "Industrial Relations Management, 8 Credits",
          "Contact Centre Technology, Systems and Processes, 10 Credits",
          "Contact Centre Quality Management, 10 Credits",
          "Supplier management, 10 Credits",
          "Customer management, 10 Credits",
          "Financial management concepts, 10 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (98 Credits)",
        topics: [
          "Provide budgeting services, 4 Credits",
          "Read and interpret financial documents, 8 Credits",
          "Maintain productive and effective work teams, 4 Credits",
          "Develop operational plans and manage performance levels, 8 Credits",
          "Manage service level agreements, 8 Credits",
          "Supervise personnel, 6 Credits",
          "Attend to personnel planning, management and control, 8 Credits",
          "Attend to industrial relations management and control, 8 Credits",
          "Attend to performance and training management and control, 4 Credits",
          "Administer supplier service level agreements, 6 Credits",
          "Attend to customer/client/supplier communication, 8 Credits",
          "Assure the output of the service delivery by agents, 8 Credits",
          "Evaluate MIS reports and ensure system efficiency, 6 Credits",
          "Manage a customer contact process, 8 Credits",
          "Manage process and technology improvement projects, 4 Credits",
        ],
      },
      {
        title: "Work Experience Modules (107 Credits)",
        topics: [
          "Attend to standard financial control procedures in a contact centre environment, 10 Credits",
          "Maintain productive and effective work teams for an operational unit in a contact centre, 12 Credits",
          "Attend to operational target-and standard-setting processes in a contact centre environment, 13 Credits",
          "Attend to team leadership and first-line discipline for an operational unit in a contact centre at supervisory level, 8 Credits",
          "Attend to personnel management processes in a contact centre environment within the delegated functions of line management, 16 Credits.",
          "Attend to customer and supplier relations management processes in a contact centre environment, 16 Credits",
          "Assure quality standards in a contact centre environment, 16 Credits",
          "Attend to process and technology efficiency management processes in a contact centre environment, 16 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Contact Centre Manager",
      "Customer Service Manager",
      "Operations Manager",
      "Quality Assurance Manager",
      "Team Leader",
    ],
    purposeAndValue: {
      purpose:
        "This qualification is aimed at individuals currently employed in contact centre operations who wish to advance into management roles, as well as those seeking to enter the contact center industry. It develops specialized competencies for managing contact centre operations, focusing on customer service excellence, team performance, and operational efficiency. It prepares learners to lead customer-facing teams in delivering exceptional service while meeting business objectives.",
      value: [
        "Master contact centre technologies and workforce management systems",
        "Develop coaching and performance management expertise",
        "Learn quality assurance and customer experience optimization",
        "Gain data analytics skills for performance tracking and improvement",
        "Build leadership capabilities specific to contact centre environments",
      ],
    },
    programDetails: {
      duration:
        "The 18-month program provides comprehensive training in contact centre management with emphasis on practical leadership and operational skills.",
      learningApproach:
        "Applied learning through contact centre simulations, quality monitoring exercises, performance coaching scenarios, and data analysis projects. Weekly sessions include case studies from leading contact centres, customer service role-plays, and KPI analysis workshops.",
      requirements: [
        "Grade 12 or equivalent qualification",
        "Minimum 1 year customer service or contact centre experience",
        "Strong interpersonal and communication abilities",
        "Computer literacy and analytical mindset",
      ],
    },
  },
  {
    slug: "supply-chain-practitioner",
    category: "business",
    name: "Occupational Certificate: Supply Chain Practitioner",
    icon: "/icons/supply-chain.svg",
    description:
      "Learn supply chain operations, logistics management, and inventory control for efficient distribution.",
    fullDescription:
      "Learn procurement, logistics and inventory management to optimise supply chain operations across industries.",
    nqfLevel: 5,
    saqaid: "110942",
    credits: 180,
    duration: "12 months",
    outcomes: [
      "Monitor and coordinate supply chain activities across the procurement, warehousing, and distribution lifecycle",
      "Manage stock, inventory accuracy, storage practices, and order fulfilment",
      "Apply ERP/WMS systems (SAP, Oracle, Sage) to automate supply chain tasks and generate operational reports",
      "Analyse cost, efficiency, and risks, providing actionable recommendations for optimisation",
      "Support procurement and vendor management, including sourcing, ordering, and contract compliance",
      "Implement quality control and compliance measures in line with organisational and regulatory standards",
    ],
    modules: [
      {
        title: "Knowledge Modules (84 Credits)",
        topics: [
          "Introduction to Supply Chain Management, 10 Credits", 
          "Demand Execution Management Operations, 10 Credits",
          "Transport and Distribution Operations, 10 Credits",
          "Inventory Management, 10 Credits",
          "Warehousing and Facilities Operations, 10 Credits",
          "Production Operations, 10 CreditS",
          "Procurement Operations, 10 Credits",
          "Returns Management, 7 Credits",
          "Performance and Contract Management and Improvement of Operations, 7 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (60 Credits)",
        topics: [
          "Translate Operational Plans and Performance Objectives into Operational Schedules for the Supply Chain, 13 Credits",
          "Coordinate and Implement Supply Chain Operational Schedules, 13 Credits",
          "Manage Contract Implementation and Service Level Agreements, 10 Credits",
          "Monitor Implementation of Demand Execution and Customer Relationship Activities, 8 Credits",
          "Monitor Execution of Operational Activities for Transportation, Warehousing and Production, 11 Credits",
          "Monitor Operational Procurement Related Activities, 5 Credits",

        ],
      },
      {
        title: "Work Experience Modules (36 Credits)",
        topics: [
          "Operational Scheduling and Coordination Processes, 22 Credits",
          "Processes for Monitoring and Evaluating Operational Plans, 14 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Supply Chain Practitioner",
      "Logistics Coordinator",
      "Warehouse Controller",
      "Procurement Assistant",
      "Inventory & Stock Control Officer",
    ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Supply Chain Practitioner equips learners with the skills and knowledge required to manage and optimise supply chains within modern business environments. The programme provides practical and theoretical insights into procurement, logistics, inventory management, warehousing, and technology-supported supply chain systems.",
      value: [
        "Understand end-to-end supply chain processes",
        "Learn inventory control and warehouse management techniques",
        "Develop procurement and supplier relationship skills",
        "Gain practical logistics and distribution knowledge",
        "Build a foundation for advanced supply chain roles",
      ],
    },
    programDetails: {
      duration:
        "The 12-month program provides focused training in essential supply chain functions with practical industry applications.",
      learningApproach:
        "Practical learning through supply chain simulations, warehouse management exercises, procurement case studies, and logistics planning projects. Includes inventory management software training, theoretical lectures, practical workshops, ERP/WMS simulations, project-based learning and supplier negotiation workshops.",
      requirements: [
        "Grade 12 or equivalent qualification",
        "Basic business and numerical literacy",
        "Computer literacy for inventory systems",
        "Organizational and detail-oriented mindset",
      ],
    },
  },
  {
    slug: "supply-chain-manager",
    category: "business",
    name: "Occupational Certificate: Supply Chain Manager",
    icon: "/icons/supply-chain-management.svg",
    description:
      "Learning to have oversight of the entire supply chain, including procurement, logistics, and distribution.",
    fullDescription:
      "Develop leadership and strategic skills to manage end-to-end supply chain processes and teams.",
    nqfLevel: 6,
    saqaid: "111357",
    credits: 180,
    duration: "24 months",
    outcomes: [
      "Design, implement, and optimise supply chain systems and business processes",
      "Lead procurement and vendor management, including negotiations and contract management",
      "Analyse demand, plan production, and allocate resources efficiently",
      "Monitor compliance with industry regulations, quality standards, and risk management protocols",
      "Maintain comprehensive documentation, reporting, and KPI tracking for decision-making",
      "Oversee logistics, warehouse management, and distribution operations",
    ],
    modules: [
      {
        title: "Knowledge Modules (76 Credits)",
        topics: [
          "Supply Chain Management Theory, 14 Credits", 
          "Supply Chain Service Delivery Operational Planning, 19 Credits",
          "Operational Performance Management and Improvement, 16 Credits",
          "Risks, Compliance Management and Supply Chain Vulnerability, 12 Credits",
          "Management of Major Programmes and Projects, 15 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (68 Credits)",
        topics: [
          "Translate the Supply Chain, Priorities, Objectives and Targets into Operational Plans and Performance Objectives, 14 Credits", 
          "Align Supply Chain Operational Schedules with Associated Operational Plans and Performance Objectives, 10 Credits", 
          "Develop a Risk Management Strategy, 8 Credits",
          "Develop Procedures for the Implementation of Operational Plans, 12 Credits",
          "Determine Contract Specifications and Service Level Agreements, 6 Credits",
          "Develop Criteria to Monitor Implementation of Operational Plans against Supply Chain Strategy, 9 Credits",
          "Develop Criteria and Evaluate Operational Scheduling Implementation Compliance, 9 Credits",
        ],
      },
      {
        title: "Work Experience Modules (36 Credits)",
        topics: [
          "Operational Planning Processes, 12 Credits",
          "Execution Guidelines Development Processes, 11 Credits",
          "Processes for Monitoring and Evaluating Operational Plans, 13 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Supply Chain Manager", 
      "Procurement Manager", 
      "Operations Manager",
      "Distribution Manager",
      "Logistics Manager",
     ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Supply Chain Manager is designed to develop advanced supply chain leadership and operational management competencies. Learners gain the expertise to oversee end-to-end supply chain functions, including procurement, logistics, warehousing, demand forecasting, production planning, and compliance.",
      value: [
        "Master strategic sourcing and supplier management",
        "Learn supply chain network design and optimization",
        "Develop leadership skills for managing supply chain teams",
        "Gain expertise in performance metrics and continuous improvement",
        "Understand global supply chain trends and technologies",
      ],
    },
    programDetails: {
      duration:
        "The 24-month program combines strategic supply chain concepts with practical management applications suitable for experienced professionals.",
      learningApproach:
        "Strategic learning through advanced case studies, supply chain modeling, procurement strategy development, and capstone projects. Includes supply chain analytics training, vendor negotiation simulations, and network optimization exercises with industry mentors.",
      requirements: [
        "Grade 12 or NQF Level 4 qualification",
        "Recommended: 2-3 years supply chain or operations experience",
        "Strong analytical and strategic thinking abilities",
        "Proficiency with spreadsheets and data analysis",
      ],
    },
  },
  {
    slug: "office-administrator",
    category: "business",
    name: "Occupational Certificate: Office Administrator",
    icon: "/icons/office-admin.svg",
    description:
      "learn office administration, document management, and administrative support for efficient office operations.",
    fullDescription:
      "Gain practical skills in office systems, records management and administration to support business functions.",
    nqfLevel: 5,
    saqaid: "102161",
    credits: 445,
    duration: "42 months",
    outcomes: [
      "Manage office systems, filing structures, electronic records, and correspondence",
      "Maintain organised workflows, documentation processes, and standard operating procedures",
      "Support daily operational activities, including scheduling, task tracking, and resource coordination",
      "Produce professional business documents such as reports, letters, minutes, and presentations",
      "Provide efficient front-desk and customer service support",
      "Use MS Office applications (Word, Excel, PowerPoint, Outlook) at an advanced administrative level",
    ],
    modules: [
      {
        title: "Knowledge Modules (132 Credits)",
        topics: [
          "Effective office administration and management, 10 Credits",
          "Business communication and customer services, 8 Credits",
          "Office protocol, deportment and etiquette, 8 Credits",
          "Apply End User Computing, 6 Credits",
          "Social media and digital literacy, 5 Credits",
          "Introductory project management, 2 Credits",
          "Computerised Project Management, 15 Credits",
          "Basic business calculations, 5 Credits",
          "Resource and procurement management, 15 Credits",
          "Tender and procurement processes, and procedures, 5 Credits.",
          "Document management and record keeping, 15 Credits",
          "Staffing, and people support, 15 Credits",
          "Principles of the National Qualifications Framework (NQF) in relation to Skills development and Workplace Skills Plan (WSP) administration, 12 Credits",
          "Public relations, marketing and advocacy, 6 Credits",
          "Ready for work standards, 5 Credits",
        ],
      },
      {
        title: "Practical Skill Module (155 Credits)",
        topics: [
          "Communication and effective customer relationships, 10 Credits",
          "Manage, coordinate and assist in the administration and clerical support of resources to facilitate the smooth and effective operational activities within the organisation, 15 Credits",
          "Assist in the administration and preparation of the process of tendering of contracts, 15 Credits",
          "Manage meetings, 15 Credits",
          "Payroll processing and pay administration, 15 Credits",
          "Support the recruitment, selection, and induction of staff, 15 Credits",
          "Classify, identify, register, track and dispose of records and information, 15 Credits",
          "Assist in the administration and preparation of the Workplace Skills Plan (WSP), 15 Credits",
          "Provide administrative support to Marketing/Public Relations division, 20 Credits",
          "Prepare, install and dismantle exhibition elements, 10 Credits",
          "Manage a small project, Credits 10",
        ],
      },
      {
        title: "Work Experience Modules (158 Credits)",
        topics: [
          "Perform administrative and meeting support functions to support management, 12 Credits",
          "Handle customer and client's queries and liaison in an office, 8 Credits",
          "Marketing/Public Relations and administrative support, 25 Credits",
          "Assist in planning and coordinating at least two special events/conferences, 20 Credits",
          "Procure and allocate resources, 15 Credits",
          "Solicit tender offers in terms of a set of procedures, 10 Credits",
          "Manage a paperless office, 20 Credits",
          "Supervision, and training of administration staff, 15 Credits",
          "Assist in developing a Workplace Skills Plan according to employee training needs, 8 Credits",
          "Apply ready for work standards to everyday work activities, 25 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Office Administrator",
      "Administrative Assistant",
      "Reception Supervisor / Front Desk Coordinator",
      "Office Coordinator",
      "Executive Assistant (Entry-Level)",
      "Client Services Administrator",
    ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Office Administrator prepares learners to perform essential administrative, organisational, and communication functions within modern offices. The qualification develops a high level of professionalism, digital competence, and operational effectiveness — enabling learners to support business processes, manage office systems, and facilitate smooth workflow within organisations",
      value: [
        "Master essential office software and business applications",
        "Develop professional communication and organizational skills",
        "Learn records and document management best practices",
        "Gain scheduling, meeting, and event coordination expertise",
        "Build versatile skills applicable across all industries",
      ],
    },
    programDetails: {
      duration:
        "The 42-month program provides thorough training in office administration systems and professional business practices. ",
      learningApproach:
        "Practical office simulations using real business scenarios, document management exercises, communication workshops, and scheduling projects. Weekly theory sessions (online, hybrid, or classroom-based) cover office software applications (MS Office Suite), business writing, records systems, and professional etiquette.",
      requirements: [
        "Grade 12 qualification",
        "Strong computer literacy and typing skills",
        "Excellent organizational abilities",
        "Professional communication skills",
      ],
    },
  },
  {
    slug: "office-supervisor",
    category: "business",
    name: "Occupational Certificate: Office Supervisor",
    icon: "/icons/office-supervisor.svg",
    description:
      "Learning office supervision, team leadership, and administrative oversight for efficient office operations.",
    fullDescription:
      "Prepare for supervisory roles in administrative teams, focusing on leadership and operational efficiency.",
    nqfLevel: 5,
    saqaid: "118740",
    credits: 240,
    duration: "24 months",
    outcomes: [
      "Supervise and lead administration teams effectively",
      "Monitor office workflow, set priorities, and ensure compliance with service standards",
      "Allocate tasks, evaluate performance, and provide constructive feedback to staff",
      "Prepare and manage operational and management reports for informed decision-making",
      "Apply problem-solving, conflict resolution, and leadership skills in daily operations",
      "Utilise digital tools and office systems efficiently (MS Office Suite, CRM platforms, email, scheduling software)",
    ],
    modules: [
      {
        title: "Knowledge Modules (75 Credits)",
        topics: [
          "Role, Functions and Fundamentals of Office Supervision, 25 Credits", 
          "Communications, 25 Credits.", 
          "Internal Controls in an Office Environment, 25 Credits"
        ],
      },
      {
        title: "Practical Skill Modules (75 Credits)",
        topics: [
          "Provide Planning Support on Recruitment, Selection and Disciplinary Processes of an Organisation, 10 Credits", 
          "Organising and Coordinating Work Activities, 10 Credits", 
          "Coaching and Mentoring of Personnel Clerks, Filing Clerks and Data Capturers in an Office Environment, 10 Credits",
          "Handle Internal Communications within an Office Environment, 15 Credits",
          "Handle Conflicts and Solve Problems within an Office Environment, 10 Credits",
          "Handle Compliance to Regulations and Company Procedures, 10 Credits",
          "Perform Financial Controls and Reporting in an Office Environment, 10 Credits",
        ],
      },
      {
        title: "Work Experience Modules (90 Credits)",
        topics: [
          "Recruitment, Selection and Discipline Maintenance Support, 10 Credits", 
          "Scheduling and Coordination of Various Activities in and Outside Own Department, 15 Credits", 
          "Coaching, Mentoring and Team Building, 10 Credits",
          "Communications, 25 Credits",
          "Conflict Resolution in an Office, 10 Credits",
          "Office Internal Controls, 10 Credits",
          "Office Financial Controls, 10 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Office Supervisor/Team Leader", 
      "Senior Administrative Officer",
      "Administration Team Leader",
      "Executive Assistant (Advanced Office Management)",
      "Operations Support Supervisor",

    ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Office Supervisor equips learners with advanced skills in office leadership, team supervision, and operational workflow management. This qualification develops both theoretical knowledge and practical competencies required to manage administration teams, optimise office operations, and support organisational decision-making.",
      value: [
        "Develop frontline leadership and people management skills",
        "Learn workflow optimization and process improvement techniques",
        "Gain performance management and coaching capabilities",
        "Master conflict resolution and team motivation strategies",
        "Build career progression pathway from administrator to manager",
      ],
    },
    programDetails: {
      duration:
        "The 24-month program balances supervisory skills development with practical office management applications.",
      learningApproach:
        "Leadership-focused learning through supervisory simulations, performance management case studies, team coordination exercises, and workflow optimization projects. Includes coaching practice sessions, conflict resolution workshops, and operational planning activities.",
      requirements: [
        "Grade 12 qualification",
        "Recommended: 1-2 years office or administrative experience",
        "Strong interpersonal and communication skills",
        "Leadership potential and initiative",
      ],
    },
  },
  {
    slug: "hr-management-administrator",
    category: "business",
    name: "HOC: Human Resource Management Administrator",
    icon: "/icons/hr-management.svg",
    description: "Administration knowledge.",
    fullDescription:
      "Practical HR administration skills including employee records, basic payroll and HR processes.",
    nqfLevel: 5,
    saqaid: "121150",
    credits: 120,
    duration: "12 months",
    outcomes: [
      "Maintain and update HR databases, personnel files, and payroll information accurately.",
      "Support recruitment and selection processes including shortlisting, interview coordination, and onboarding",
      "Administer employee benefits, leave records, and HR-related compliance documentation.",
      "Implement and monitor HR policies, procedures, and labour law compliance.",
      "Prepare HR reports, employee statistics, and management summaries.",
      "Communicate effectively with employees, management, and external stakeholders.",
    ],
    modules: [
      {
        title: "Knowledge Modules (42 Credits)",
        topics: [
          "Introduction to Organisations and Human Resource Management, 4 Credits.", 
          "Data Management and Interpretation, 12 Credits", 
          "Administration of Staff Procurement, 16 Credits",
          "Professional Administration for HRM Service Delivery, 6 Credits",
          "HRM Record Keeping, 4 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (42 Credits)",
        topics: [
          "Collect and Process HRM Data, 12 Credits", 
          "Coordinate and Provide Administrative Services for a Full Range of HRM Processes, 12 Credits", 
          "Coordinate HRM Communication to Enhance Employment Relations, 8 Credits",
          "Compile, Maintain and ensure the Safeguarding of all HRM Records, 10 Credits",
        ],
      },
      {
        title: "Work Experience Modules (36 Credits)",
        topics: [
          "HRM Data Collection and Data Management Processes, 8 Credits", 
          "Administrative Processes for Full Range of HRM Services and Processes, 12 Credits", 
          "Organisational Communication Processes, 8 Credits",
          "Processes for Compiling, Maintaining, and Securing HRM Records, 8 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "HR Administrator", 
      "HR Assistant",
      "Recruitment Support Officer",
      "HR Clerk",
      "Payroll & HR Data Support Officer",
    ],
    purposeAndValue: {
      purpose:
        "This qualification equips learners with practical and theoretical skills to support HR operations across organisations. Learners will develop competencies in managing HR administrative functions, maintaining employee records, assisting in recruitment, administering benefits, and ensuring compliance with HR policies and labour legislation.",
      value: [
        "Learn essential HR systems and employee data management",
        "Understand employment legislation and compliance requirements",
        "Develop recruitment and onboarding support capabilities",
        "Gain practical experience with HR software and tools",
        "Build foundation for advanced HR professional roles",
      ],
    },
    programDetails: {
      duration:
        "The 12-month program provides comprehensive training in HR administration fundamentals and compliance.",
      learningApproach:
        "Applied HR learning through employee lifecycle simulations, records management exercises, recruitment process support, and compliance case studies. Weekly sessions include HR software training, employment law workshops, and professional HR practice scenarios.",
      requirements: [
        "Grade 12 qualification",
        "Strong organizational and record-keeping skills",
        "Confidentiality and professional discretion",
        "Computer literacy and attention to detail",
      ],
    },
  },
  {
    slug: "quality-assurer",
    category: "governance",
    name: "Occupational Certificate: Quality Assurer",
    icon: "/icons/quality-assurer.svg",
    description:
      "Learning quality assurance principles, inspection techniques, and compliance verification for product and service delivery.",
    fullDescription:
      "Understand QA processes, testing and compliance to assure product and service quality.",
    nqfLevel: 5,
    saqaid: "118769",
    credits: 106,
    duration: "12 months",
    outcomes: [
      "Conduct internal audits and inspections according to organisational and industry standards",
      "Implement and monitor quality control processes to ensure products, services, and operations meet predefined standards",
      "Monitor compliance with relevant industry regulations, organisational policies, and statutory requirements",
      "Maintain comprehensive quality documentation, including audit reports, checklists, and improvement records",
      "Contribute to continuous improvement initiatives, identifying opportunities for process optimisation and efficiency",
      "Communicate effectively with stakeholders regarding quality issues and corrective actions",
      "Apply ethical and professional practices in all quality assurance activities",
    ],
    modules: [
      {
        title: "Knowledge Modules (38 Credits)",
        topics: [
          "Quality Management and Quality Management Systems, 11 Credits", 
          "Quality Management and the 4th Industrial Revolution, 3 Credits",
          "Process Management, 6 Credits",
          "Fundamental Management Principles, 4 Credits",
          "Managing Quality Assurance Department or Business Unit, 8 Credits",
          "Risk Profiling, 4 Credits",
          "Internal and External Stakeholders, 2 Credits",
        ],
      },
       {
        title: "Practical Skill Modules (24 Credits)",
        topics: [
          "Implement and Maintain Quality Assurance Processes in Compliance with Regulatory and Customer Requirements, 4 Credits", 
          "Conduct Quality Assurance to Ensure Product/Service Conforms to Standards and Regulatory Requirements, 4 Credits",
          "Manage Documentation and Records within Quality Assurance Processes, 2 Credits",
          "Improve the Effectiveness and Efficiency of Quality Assurance Processes, 2 Credits",
          "Introduce new Products/Service, 2 Credits",
          "Critically Analyse Qualitative and Quantitative Data and Use Information for Improvements, 2 Credits",
          "Lead and Manage Wellbeing and Performance of Staff and Effectiveness of Teams, 2 Credits",
          "Apply Principles of Business ethics and Accountability, 2 Credits",
          "Conduct Internal Audits of the Quality Management System Policies and Procedures, 4 Credits",
        ],
      },
       {
        title: "Work Experience Modules (44 Credits)",
        topics: [
          "Conduct Quality Assurance at Various Stages of the Process, 28 Credits", 
          "Maintain Productive and Effective Work Teams for a Quality Business Unit, 16 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Quality Assurer", 
      "QA Inspector",
      "Junior Quality Auditor",
      "QA Technician",
    ],
    purposeAndValue: {
      purpose:
        "The Occupational Certificate: Quality Assurer develops learners’ competencies in monitoring, evaluating, and ensuring compliance with quality standards across various organisational contexts. This qualification equips learners with the technical, procedural, and analytical skills necessary to implement and maintain robust quality assurance systems, conduct audits, and support continuous improvement initiatives.",
      value: [
        "Master quality inspection and testing methodologies",
        "Learn ISO and industry quality standards",
        "Develop compliance auditing and documentation skills",
        "Gain statistical quality control techniques",
        "Build expertise in continuous improvement processes",
      ],
    },
    programDetails: {
      duration:
        "The focused 12-month program delivers intensive training in quality assurance principles and practical inspection techniques.",
      learningApproach:
        "Hands-on quality assurance training through inspection simulations, testing exercises, compliance audits, and statistical analysis projects. Includes quality management software training, standards interpretation workshops, and industry site visits.",
      requirements: [
        "Grade 12 qualification",
        "Attention to detail and systematic approach",
        "Basic numeracy for statistical analysis",
      ],
    },
  },
  {
    slug: "marketing-coordinator",
    category: "sales",
    name: "Occupational Certificate: Marketing Coordinator",
    icon: "/icons/marketing-coordinator.svg",
    description: "Learning marketing coordination and campaign support.",
    fullDescription:
      "Build practical skills in campaign coordination, content support and basic marketing analytics.",
    nqfLevel: 5,
    saqaid: "118706",
    credits: 175,
    duration: "12 months",
    outcomes: [
      "Coordinate marketing activities",
      "Support campaign execution",
      "Assist with analytics",
      "Coordinate key deliverables of products and services to target market",
      "Coordinate marketing and sales activities across the marketing mix",
    ],
    modules: [
      {
        title: "Knowledge Modules (36 Credits)",
        topics: [
          "Marketing Business skills, 5 Credits", 
          "Ready for Work Standards, 4 Credits", 
          "Campaign /Project Management, 4 Credits",
          "Marketing Business Tools, 8 Credits",
          "Business Calculations, 4 Credits",
          "Customer Relationship Management, 3 Credits.",
          "Business Environment, 4 Credits",
          "Digital Tools, 4 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (36 Credits)",
        topics: [
          "Coordinate Key Deliverables of Products and Services to a Target Market, 7 Credits", 
          "Support the Deliverables Across the Full Spectrum of the Communication Mix, 8 Credits", 
          "Coordinate Marketing and Sales Activities, 8 Credits",
          "Coordinate Customer Relationship Management (CRM) activities, 7 Credits",
          "Undertake Administrative Tasks Related to Marketing Metrics and Processing of Payments, 6 Credits",
        ],
      },
      {
        title: "Work Experience Modules (103 Credits)",
        topics: [
          "Processes and Procedures for Coordinating Key Deliverables of Products and Services to a Target Market, 24 Credits", 
          "Processes and Procedures for Supporting the Deliverables Across the Full Spectrum of the Communication Mix, 20 Credits", 
          "Processes and Procedures for Coordinating Marketing and Sales Activities, 27 Credits",
          "Processes and Procedures for Coordinating Customer Relationship Management Activities, 17 Credits",
          " Processes and Procedures within the Scope of Administrative Tasks Related to Marketing Metrics and Processing of Payments, 15 Credits",
        ],
      },
    ],
    
    careerOpportunities: ["Marketing Coordinator", "Marketing Assistant"],
    purposeAndValue: {
      purpose:
        "This qualification develops practical marketing coordination competencies, enabling learners to support marketing campaigns, coordinate activities, and assist with analytics. It prepares professionals to work effectively within marketing teams across various industries.",
      value: [
        "Learn marketing campaign planning and coordination",
        "Develop content creation and curation skills",
        "Gain digital marketing and social media expertise",
        "Master basic marketing analytics and reporting",
        "Build foundation for marketing management careers",
      ],
    },
    programDetails: {
      duration:
        "The 12-month program provides practical marketing skills with emphasis on campaign coordination and digital platforms.",
      learningApproach:
        "Project-based marketing learning through campaign simulations, content creation exercises, social media management, and analytics projects. Weekly sessions include marketing software training, creative briefing workshops, and campaign performance analysis.",
      requirements: [
        "Grade 12 qualification",
        "Creative thinking and communication skills",
        "Social media familiarity",
        "Computer literacy and basic design sense",
      ],
    },
  },
  {
    slug: "sales-representative",
    category: "sales",
    name: "National Occupational Certificate: Sales Representative",
    icon: "/icons/sales-representative.svg",
    description: "Sales techniques, customer engagement and product knowledge.",
    fullDescription:
      "Learn core selling skills, customer engagement and retail sales fundamentals.",
    nqfLevel: 4,
    saqaid: "121792",
    credits: 155,
    duration: "12 months",
    outcomes: [
      "Conduct thorough customer needs analysis to identify requirements and opportunities",
      "Promote and sell products and services effectively using consultative approaches",
      "Build, maintain, and manage customer relationships for long-term business success",
      "Explain product features, benefits, and value propositions clearly and persuasively",
      "Achieve sales targets and support business growth initiatives",
    ],
    modules: [
      {
        title: "Knowledge Modules (25 Credits)",
        topics: [
          "Customer Relationship Management, 10 Credits", 
          "Marketing, Promotions and Sales, 10 Credits", 
          "Competitors and Positioning Strategies, 5 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (45 Credits)",
        topics: [
          "Manage Customer Relationships within the Scope of a Sales Representative in the Wholesale and Retail Industry, Credits 15", 
          "Market, Promote and Sell Products, 20 Credits", 
          "Implement Product-Positioning Strategies within the Competitive Environment, 10 Credits",
        ],
      },
      {
        title: "Work Experience Modules (85 Credits)",
        topics: [
          "Management of Customer Relationships within the Scope of a Sales Representative in the Wholesale and Retail Industry, 30 Credits", 
          "Marketing, Promoting and Selling Products, 30 Credits", 
          "Implementation of Product Positioning Strategies within the Competitive Environment, 25 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Sales Representative", 
      "Sales Consultant",
      "Field Sales Agent",
      "Retail Sales Associate",
      "Business Development Support",
    ],
    purposeAndValue: {
      purpose:
        "This qualification equips learners with the essential skills to excel in professional sales environments. Learners gain practical expertise in customer engagement, consultative selling, and managing a sales pipeline. The programme develops confidence, communication skills, and strategies for building and maintaining strong client relationships. Graduates are prepared for entry-level sales roles and have a foundation for further development in sales management, business development, or account management.",
      value: [
        "Master proven sales techniques and customer engagement strategies",
        "Develop persuasive communication and negotiation skills",
        "Learn product presentation and demonstration methods",
        "Gain objection handling and closing capabilities",
        "Build confidence for commission-based earning potential",
      ],
    },
    programDetails: {
      duration:
        "The 12-month program delivers intensive sales training with practical customer interaction experience.",
      learningApproach:
        "Experiential sales training through role-play scenarios, customer interaction simulations, product knowledge sessions, and live sales practice. Includes communication workshops, negotiation exercises, and sales psychology training with real-world sales mentorship.",
      requirements: [
        "Grade 10 or equivalent qualification",
        "Strong interpersonal and communication abilities",
        "Self-motivation and resilience",
        "Customer service orientation",
      ],
    },
  },
  {
    slug: "retail-supervisor",
    category: "business",
    name: "Occupational Certificate: Retail Supervisor",
    icon: "/icons/retail-supervisor.svg",
    description:
      "Learn retail operations, inventory management, and customer service excellence in retail environments.",
    fullDescription:
      "Train for supervisory roles in retail, focusing on operations, team management and customer experience.",
    nqfLevel: 5,
    saqaid: "99573",
    credits: 100,
    duration: "12 months",
    outcomes: [
      "Supervise retail staff and allocate tasks effectively",
      "Manage inventory, merchandising, and store layout for operational efficiency",
      "Maintain high standards of customer service",
      "Implement loss prevention and security measures",
      "Prepare reports and monitor retail performance metrics",
      "Use digital tools and retail management systems to support operations",
    ],
    modules: [
      {
        title: "Knowledge Modules (20 Credits)",
        topics: [
          "Concepts and principles of supervising Wholesale or Retail staff, 10 Credits", 
          "Concepts and principles of monitoring and improving performance, 4 Credits", 
          "Concepts and principles for the implementation and maintenance of retail or wholesale operations, 3 Credits",
          "Concepts and principles of enhancing customer service, 3 Credits",
        ],
      },
      {
        title: "Practical Skill Modules (20 Credits)",
        topics: [
          "Supervise retail or wholesale staff, 6 Credits", 
          "Monitor and control the work performance of a team, 6 Credits", 
          "Supervise operations, 4 Credits",
          "Supervise service to internal and external retail and wholesale customers, 2 Credits",
          "Resolve queries and complaints from internal and external retail and wholesale customers, 2 Credits",
        ],
      },
      {
        title: "Work Experience Modules (60 Credits)",
        topics: [
          "Processes and procedures for supervising wholesale or retail staff, 30 Credits", 
          "Processes and procedures for supervising, implementing and maintaining processes and procedures in a specific area of responsibility in a wholesale or retail outlet, 20 Credits", 
          "Processes and procedures for enhancing customer service in a wholesale or retail outlet, 10 Credits",
        ],
      },
    ],
    careerOpportunities: [
      "Retail Supervisor", 
      "Store Manager",
      "Customer Service Lead",
      "Merchandising Controller",
      "Team Leader in Retail Operations",
    ],
    purposeAndValue: {
      purpose:
        "This qualification prepares learners for frontline leadership roles in retail and wholesale environments. Learners develop the skills to supervise staff, manage stock and merchandising, oversee customer service, and drive store performance. Graduates will be ready to implement operational strategies, lead teams, and contribute to business growth.",
      value: [
        "Develop retail team leadership and supervision skills",
        "Learn inventory management and stock control techniques",
        "Master visual merchandising and store presentation",
        "Gain customer service excellence and complaint resolution expertise",
        "Build pathway to store management and retail leadership roles",
      ],
    },
    programDetails: {
      duration:
        "The 12-month program provides extensive retail operations training with emphasis on supervisory skills and customer service.",
      learningApproach:
        "Practical retail training through store simulations, inventory management exercises, team supervision scenarios, and customer service role-plays. Includes POS system training, merchandising workshops, and supervisory leadership development sessions.",
      requirements: [
        "Grade 12 qualification with mathematics litercay and communication",
        "Recommended: retail or customer service experience",
        "Strong interpersonal and organizational skills",
      ],
    },
  },
];

// Helper function to get course by slug
export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug);
}

// Helper function to get all course slugs
export function getAllCourseSlugs(): string[] {
  return coursesData.map((course) => course.slug);
}

// Helper function to get courses by category
export function getCoursesByCategory(category: string): Course[] {
  return coursesData.filter((course) => course.category === category);
}
