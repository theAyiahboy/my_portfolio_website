
import SocialBar from './SocialBar'

export default function About() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-primary-100 relative">
      <SocialBar />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Profile Card with Terminal/Code UI */}
        <div className="flex flex-col items-center md:items-start bg-primary-800 rounded-2xl shadow-2xl p-10 border-2 border-accent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-10 bg-primary-900 flex items-center px-4 gap-2 border-b border-blue-600">
            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            <span className="ml-4 text-xs text-primary-300 font-mono tracking-widest">about.py</span>
          </div>
          <img
            src="/profile.jpg"
            alt="Giovanni Ayiah-Mensah"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 shadow-lg mt-12 mb-6"
          />
          <h2 className="text-2xl font-bold text-blue-600 mb-1 font-mono">Giovanni Ayiah-Mensah</h2>
          <p className="text-primary-200 text-center md:text-left mb-4 font-mono text-sm">Backend Developer (Python) • Prompt Engineer • AI Builder</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-mono border border-blue-600/30">Python</span>
            <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-mono border border-blue-600/30">Prompt Engineering</span>
            <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-mono border border-blue-600/30">Git</span>
            <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-mono border border-blue-600/30">GitHub</span>
          </div>
        </div>
        {/* About & Skills with code block style */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold mb-2 text-blue-600 font-mono">About Me</h2>
          <div className="bg-primary-950 rounded-lg p-6 shadow-inner border border-primary-800 font-mono text-primary-200 text-base leading-relaxed whitespace-pre-line">
            {`Hi, I'm Giovanni Ayiah-Mensah. I'm a Business Information Systems student and backend builder passionate about Python, automation, and AI.\n\nI use prompt engineering, Python, and modern tools to create real solutions for businesses and individuals. My focus: clean code, automation, and making things work smarter.`}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 font-mono">Tech Stack</h3>
              <ul className="flex flex-wrap gap-2 mb-4">
                <li className="bg-primary-900 text-blue-600 px-3 py-1 rounded-full text-xs font-mono border border-blue-600/30">Python</li>
                <li className="bg-primary-900 text-blue-600 px-3 py-1 rounded-full text-xs font-mono border border-blue-600/30">Prompt Engineering</li>
                <li className="bg-primary-900 text-blue-600 px-3 py-1 rounded-full text-xs font-mono border border-blue-600/30">Git</li>
                <li className="bg-primary-900 text-blue-600 px-3 py-1 rounded-full text-xs font-mono border border-blue-600/30">GitHub</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 font-mono">Core Skills</h3>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-xs font-mono border border-primary-700">AI Automation</li>
                <li className="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-xs font-mono border border-primary-700">Problem Solving</li>
                <li className="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-xs font-mono border border-primary-700">Teamwork</li>
                <li className="bg-primary-900 text-primary-200 px-3 py-1 rounded-full text-xs font-mono border border-primary-700">Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
