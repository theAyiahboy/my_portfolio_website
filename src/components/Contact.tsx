import { useState } from 'react'
import { Phone, MapPin, Send, Facebook, Linkedin, Github, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone/WhatsApp",
    value: "+233 59 554 1775",
    link: "tel:+233595541775"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ghana",
    link: null
  },
  {
    icon: MessageCircle,
    title: "Email",
    value: "giovanniayiahmensah@gmail.com",
    link: "mailto:giovanniayiahmensah@gmail.com"
  }
];

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/giovanni.mensah.9"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/giovanniayiah-mensah"
  },
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/Vannidotcom"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    url: "https://wa.me/233595541775"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
  <section id="contact" className="py-20 bg-secondary-900">
  <div className="container mx-auto px-6">
  <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-secondary-50 max-w-3xl mx-auto">
              Let's discuss backend projects, Python development, or how we can work together to achieve great things.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-8">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary-700 rounded-lg">
                      <info.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-secondary-50 hover:text-accent transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary-50">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4 mb-12">
                <a
                  href="https://wa.me/233595541775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary-700 text-white p-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 border border-primary-600"
                >
                  <MessageCircle size={24} />
                  WhatsApp
                </a>
                <a
                  href="tel:+233595541775"
                  className="flex items-center gap-3 bg-primary-700 text-white p-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 border border-primary-600"
                >
                  <Phone size={24} />
                  Call Now
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-accent mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-700 text-white rounded-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110 border border-primary-600"
                      title={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-50 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-700 bg-primary-900 text-secondary-50 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-50 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-700 bg-primary-900 text-secondary-50 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-secondary-50 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-700 bg-primary-900 text-secondary-50 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-50 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-700 bg-primary-900 text-secondary-50 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, question, or how we can work together..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-700 text-accent py-4 px-6 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-primary-600"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Professional Quote */}
          <div className="text-center mt-16 p-8 bg-primary-900 rounded-xl border border-primary-700">
            <h4 className="text-2xl font-bold text-accent mb-4">Giovanni Ayiah-Mensah</h4>
            <p className="text-lg text-secondary-50 italic">
              "Professional backend developer dedicated to innovation, Python excellence, and transformative results."
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-primary-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary-50">
                © 2025 Giovanni Ayiah-Mensah. All rights reserved.
              </p>
              <p className="text-sm text-secondary-50">
                Built with backend passion for professional excellence
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-accent hover:text-primary-700 transition-colors duration-200"
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
