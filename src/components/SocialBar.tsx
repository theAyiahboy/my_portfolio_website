import { Github, Linkedin, Facebook, Twitter } from 'lucide-react'

const socials = [
  {
    icon: <Github size={22} />,
    href: 'https://github.com/Vannidotcom',
    label: 'GitHub',
  },
  {
    icon: <Linkedin size={22} />,
    href: 'https://www.linkedin.com/in/giovanniayiah-mensah',
    label: 'LinkedIn',
  },
  {
    icon: <Facebook size={22} />,
    href: 'https://www.facebook.com/giovanni.mensah.9',
    label: 'Facebook',
  },
  {
    icon: <Twitter size={22} />,
    href: 'https://x.com/theAyiahguy',
    label: 'X',
  },
]

export default function SocialBar() {
  return (
    <div className="fixed top-1/2 right-4 z-50 flex flex-col gap-4 -translate-y-1/2">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-600 shadow-lg rounded-full p-2 hover:bg-blue-700 hover:text-white transition-colors border border-blue-700"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}