import { Github, Linkedin, Facebook, Twitter } from 'lucide-react'

const socialLinks = [
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/giovanni.mensah.9",
    label: "Facebook"
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/giovanniayiah-mensah",
    label: "LinkedIn"
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Vannidotcom",
    label: "GitHub"
  },
  {
    icon: <Twitter size={20} />,
    href: "https://x.com/theAyiahguy",
    label: "X (Twitter)"
  }
]

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}