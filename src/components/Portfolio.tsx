import { ExternalLink, FileText, Lightbulb, Users, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: "Giovanni Portfolio Website",
    description: "A bright, modern portfolio site built with React, TypeScript, Vite, and Tailwind CSS. Showcases my Python learning, prompt engineering, and real client work.",
    tags: ["Portfolio", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Prompt Engineering"],
    icon: FileText,
    metrics: "Live & maintained",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Vannidotcom/portfolio2025"
  },
  {
    title: "Freelance AI Projects",
    description: "Built websites and tools for clients using prompt engineering and AI (2023–Present). Leveraged AI to automate workflows, content, and business processes.",
    tags: ["Prompt Engineering", "AI", "Web Automation", "Freelance"],
    icon: Lightbulb,
    metrics: "Multiple client projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Builders Avenue Website",
    description: "Developed a business website for Builders Avenue, a company specializing in cement and building materials sales. Used AI tools to streamline content and design.",
    tags: ["Web Development", "AI", "Business", "Client Work"],
    icon: Users,
    metrics: "Launched for client",
    image: "/builders-avenue-logo.JPG"
  },
  {
    title: "Erin Braids Appointment System",
    description: "Created a web-based appointment booking system for Erin Braids. Customers can book hair appointments online, improving business efficiency.",
    tags: ["Web App", "Booking", "Client Work", "AI"],
    icon: FileText,
    metrics: "Used by Erin Braids",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-primary-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-3 font-mono tracking-tight">Portfolio</h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto font-mono">
            Backend & Python projects: clean code, automation, and real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary-900 rounded-2xl shadow-2xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-primary-700 flex flex-col group relative"
            >
              {/* Project Image with code overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-7 flex flex-col h-full gap-2">
                <h3 className="text-xl font-bold text-accent mb-1 font-mono group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary-200 mb-3 text-sm leading-relaxed font-mono">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold shadow font-mono border border-accent/30">
                    {project.metrics}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary-950 text-accent px-2 py-1 rounded text-xs font-mono border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button aria-label={`View case study for ${project.title}`} className="flex-1 bg-accent text-white py-3 px-5 rounded-lg hover:bg-primary-100 hover:text-accent transition-colors duration-300 flex items-center justify-center gap-2 text-base font-bold border-2 border-accent font-mono shadow-lg">
                    <FileText size={18} />
                    <span>View Case Study</span>
                  </button>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Learn more about ${project.title}`}
                      className="flex-1 border-2 border-accent text-accent py-3 px-5 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-base font-bold font-mono shadow-lg bg-primary-100/10"
                    >
                      <ExternalLink size={18} />
                      <span>Learn More</span>
                    </a>
                  ) : (
                    <button
                      className="flex-1 border-2 border-accent text-accent py-3 px-5 rounded-lg bg-primary-900/40 hover:bg-accent/20 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-base font-bold font-mono shadow-lg"
                      aria-label="Learn More (disabled)"
                      disabled
                    >
                      <ExternalLink size={18} />
                      <span>Learn More</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-lg text-primary-200 mb-6 font-mono">
            Want to discuss backend projects, Python, or automation?
          </p>
          <a
            href="#contact"
            aria-label="Get in touch via contact form"
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-100 hover:text-accent transition-all duration-300 transform hover:-translate-y-1 shadow-xl font-mono border-2 border-accent"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
