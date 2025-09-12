import { ArrowDown } from 'lucide-react'
import SocialLinks from './SocialLinks'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-700"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] bg-primary-400 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-secondary-400 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[20vw] bg-accent opacity-10 rounded-full blur-2xl z-0" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-primary-400 via-secondary-400 to-accent p-1 shadow-2xl relative">
              <div className="w-full h-full rounded-full flex items-center justify-center text-5xl font-extrabold text-accent bg-glass-100 backdrop-blur-md border-4 border-accent/40 shadow-xl">
                GA
              </div>
              {/* Glassmorphism Card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-56 bg-glass-100 backdrop-blur-md rounded-2xl shadow-lg border border-accent/30 py-3 px-6 flex flex-col items-center gap-1">
                <span className="text-lg font-semibold text-primary-400">Backend Developer</span>
                <span className="text-sm text-secondary-400">Python • APIs • Teamwork</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent to-secondary-400 mb-4 animate-fade-in-up drop-shadow-xl mt-16">
            Giovanni Ayiah-Mensah
          </h1>
          <div className="text-xl md:text-2xl text-neutral-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-semibold text-primary-400">Backend Developer</span>
            <span className="mx-3">•</span>
            <span className="font-semibold text-secondary-400">Python Enthusiast</span>
            <span className="mx-3">•</span>
            <span className="font-semibold text-accent">Team Player</span>
          </div>
          <p className="text-lg md:text-xl text-neutral-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Passionate backend developer focused on Python, API design, and scalable server-side solutions. Experienced in Git, GitHub teamwork, and building secure, high-performance applications. Dedicated to backend excellence and collaborative development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#portfolio"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <SocialLinks />
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-subtle">
            <a href="#about" className="inline-block">
              <ArrowDown size={32} className="text-primary-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
