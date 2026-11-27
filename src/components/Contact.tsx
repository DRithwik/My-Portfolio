import React from 'react';
import { MessageSquare, Phone, Mail, ExternalLink } from 'lucide-react';
import { profile, contact } from '../data/profile';
import Reveal from './ui/Reveal';
import Tile from './ui/Tile';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      accent: '#34d399',
    },
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      accent: '#a78bfa',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <MessageSquare className="text-blue-400" />
          <h2 className="text-3xl font-bold">{contact.heading}</h2>
        </div>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">{contact.text}</p>

        <div className="flex flex-col md:flex-row gap-5 justify-center mb-10">
          {contactInfo.map(({ icon, label, value, href, accent }, i) => (
            <Reveal key={label} delay={i * 120} className="glow-group">
              <a
                href={href}
                className="glow-card flex items-center gap-4 pl-3 pr-6 py-3 text-left"
                style={{ '--accent': accent } as React.CSSProperties}
              >
                <Tile icon={icon} size="md" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">{label}</span>
                  <span className="text-gray-200">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <a href={`mailto:${profile.email}`} className="btn-primary inline-flex items-center gap-2">
          Get in Touch <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
