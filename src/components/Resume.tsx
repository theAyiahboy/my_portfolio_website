

export default function Resume() {
    // Data arrays
    const experience = [
      {
        role: 'Assistant Manager',
        company: 'Fruits Haven',
        period: 'Nov 2021 – Present',
        details: [
          'Manage sales, inventory, and operations for a busy retail business.',
          'Built and maintain a Python-based bookkeeping and reporting system.',
          'Use AI and automation to streamline daily business tasks.'
        ]
      },
      {
        role: 'Freelance AI Developer',
        company: 'Self-Employed',
        period: '2023 – Present',
        details: [
          'Use prompt engineering and AI to build websites and automate workflows for clients.',
          'Delivered multiple web and automation projects for small businesses.',
          'Specialize in using AI tools to solve real business problems.'
        ]
      },
      {
        role: 'Web Developer',
        company: 'Builders Avenue',
        period: '2024',
        details: [
          'Developed a business website for a building materials company.',
          'Used AI tools to streamline content and design.',
          'Improved online presence and customer engagement.'
        ]
      },
      {
        role: 'Web App Developer',
        company: 'Erin Braids',
        period: '2024',
        details: [
          'Created a web-based appointment booking system for a hair stylist.',
          'Enabled customers to book appointments online.',
          'Improved business efficiency and customer experience.'
        ]
      },
      {
        role: 'Portfolio Creator',
        company: 'Personal Project',
        period: '2025',
        details: [
          'Designed and built this portfolio site using React, TypeScript, and Tailwind CSS.',
          'Showcase for Python, prompt engineering, and client work.',
          'Continuously updated with new skills and projects.'
        ]
      }
    ];

    const education = [
      {
        degree: 'BBA Business Information Systems',
        school: 'University of Education, Winneba',
        period: '2023/2024 – Present',
        details: [
          'Relevant coursework: Python, Information Systems, Business Analytics, Digital Transformation.'
        ]
      },
      {
        degree: 'Professional Foundations Program',
        school: 'ALX Africa',
        period: 'Aug 2025',
        details: [
          'Completed intensive program in professional skills, digital literacy, and remote work.'
        ]
      },
      {
        degree: 'Programming 2025 (Python)',
        school: 'mooc.fi, University of Helsinki',
        period: '2025 – Present',
        details: [
          'Studying Python programming and software development.'
        ]
      }
    ];


    return (
      <section id="resume" className="py-28 bg-gradient-to-b from-primary-900 via-primary-950 to-primary-900 text-primary-100">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-3 font-mono tracking-tight">Resume</h2>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto font-mono">
              Professional experience, education, and certifications.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-accent mb-6 font-mono">Experience</h3>
            {experience.map((item: any, idx: number) => (
              <div key={idx} className="mb-10 bg-primary-950 rounded-xl p-7 shadow-lg border border-primary-800 font-mono">
                <h4 className="text-lg font-bold text-accent mb-1">{item.role}</h4>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <span className="text-primary-100 font-medium">{item.company}</span>
                  <span className="text-primary-300 text-xs">{item.period}</span>
                </div>
                <ul className="list-disc list-inside text-primary-200 text-xs pl-4">
                  {item.details.map((detail: string, i: number) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-accent mb-6 font-mono">Education</h3>
            {education.map((item: any, idx: number) => (
              <div key={idx} className="mb-10 bg-primary-950 rounded-xl p-7 shadow-lg border border-primary-800 font-mono">
                <h4 className="text-lg font-bold text-accent mb-1">{item.degree}</h4>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <span className="text-primary-100 font-medium">{item.school}</span>
                  <span className="text-primary-300 text-xs">{item.period}</span>
                </div>
                <ul className="list-disc list-inside text-primary-200 text-xs pl-4">
                  {item.details.map((detail: string, i: number) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          {/* Download CV */}
          <div className="text-center mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume PDF"
              className="inline-block bg-accent text-primary-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-100 hover:text-accent transition-all duration-300 transform hover:-translate-y-1 shadow-xl font-mono border-2 border-accent"
            >
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
