import React from 'react';
import { MessageSquare, Phone, Mail, ExternalLink } from 'lucide-react';
import { profile, contact } from '../data/profile';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <MessageSquare className="text-blue-400" />
          <h2 className="text-3xl font-bold">{contact.heading}</h2>
        </div>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {contact.text}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Icon size={20} />
              <span>{value}</span>
            </a>
          ))}
        </div>

        <a 
          href={`mailto:${profile.email}`} 
          className="btn-primary inline-flex items-center gap-2"
        >
          Get in Touch <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}