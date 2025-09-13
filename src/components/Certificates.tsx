import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'ALX Professional Foundations Certificate',
    issuer: 'ALX Africa',
    date: 'Aug 2025',
  image: '/certificate.png',
  file: '/certificate.png',
    description: 'Awarded for completing the ALX Professional Foundations Program.'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-primary-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 font-mono tracking-tight">Certificates</h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto font-mono">
            My professional certificates and achievements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-primary-900 rounded-2xl shadow-2xl border border-primary-700 p-6 flex flex-col items-center group">
              <div className="w-full h-56 flex items-center justify-center mb-4 overflow-hidden rounded-xl border border-blue-600 bg-primary-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-1 font-mono text-center">{cert.title}</h3>
              <p className="text-primary-200 text-sm mb-2 font-mono text-center">{cert.issuer} &middot; {cert.date}</p>
              <p className="text-primary-300 text-xs mb-4 font-mono text-center">{cert.description}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate: ${cert.title}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary-100 hover:text-blue-600 transition-all duration-300 shadow-xl font-mono border-2 border-blue-600"
              >
                <ExternalLink size={20} />
                <span>View Certificate</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
