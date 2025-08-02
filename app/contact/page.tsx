'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(`❌ ${data.error || 'Failed to send message'}`);
      }
    } catch (error) {
      setSubmitMessage('❌ Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rishab-ghosh",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      ariaLabel: "Visit GitHub profile"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rishabghosh",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      ariaLabel: "Visit LinkedIn profile"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rishabghoshh/",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      ariaLabel: "Visit Instagram profile"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 content-slide-in">
            <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
              LET&apos;S CONNECT
            </h1>
            <p className="text-xl font-inter text-text/60 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always down for a convo especially if you have a good story, idea, or hate one of my opinions. (really anything interesting.)
              Hit me up if you want to build something cool together.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Email Section */}
            <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 content-slide-up">
              <h2 className="text-2xl font-space font-bold text-primary mb-6">
                GET IN TOUCH
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text/60 font-inter text-sm">Email</p>
                    <a
                      href="mailto:rishabghosh@utexas.edu"
                      className="text-lg font-inter text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      rishabghosh@utexas.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text/60 font-inter text-sm">Location</p>
                    <p className="text-lg font-inter text-text">Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 content-slide-up" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-space font-bold text-primary mb-6">
                SOCIAL LINKS
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-accent/20 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                    aria-label={social.ariaLabel}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </div>
                    <span className="text-text font-inter font-medium group-hover:text-primary transition-colors duration-200">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 content-slide-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-2xl font-space font-bold text-primary mb-6">
              SEND A MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-medium text-text/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-text/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-inter font-medium text-text/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter resize-none"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${
                  submitMessage.includes('✅') 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {submitMessage}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Fun Note */}
          <div className="mt-12 text-center content-slide-up" style={{animationDelay: '0.3s'}}>
            <p className="text-text/60 font-inter text-sm">
              P.S. If you&apos;re reading this, you&apos;ve made it to the bottom of my website.
              That&apos;s commitment. I like that. 🎰
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 