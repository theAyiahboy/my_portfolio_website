import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
  ? 'bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 shadow-2xl border-b-2 border-blue-600/80 backdrop-blur-lg'
  : 'bg-gradient-to-r from-primary-900 via-primary-950 to-primary-900 border-b border-blue-600/40'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 h-16">
        {/* Logo and Name with code style */}
        <a href="#home" className="flex items-center group">
          <span className="text-xl md:text-2xl font-bold text-blue-600 tracking-widest select-none whitespace-nowrap group-hover:text-blue-700 transition-colors font-mono">
            &lt;Giovanni /&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-blue-600 font-mono px-3 py-2 rounded hover:text-blue-700 hover:bg-primary-800/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 border-b-2 border-accent/80 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-blue-600 font-mono rounded hover:text-blue-700 hover:bg-primary-800/40 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
