'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👨‍💻' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/reviews', label: 'Reviews', icon: '🎬' },
    { href: '/blog', label: 'Blog', icon: '✍️' },
    { href: '/creative', label: 'Creative', icon: '🎨' },
    { href: '/contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <nav className="fixed right-0 top-0 h-full w-20 bg-surface/90 backdrop-blur-md border-l border-border/50 z-50">
      <div className="flex flex-col items-center justify-between h-full py-8">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="block">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-space font-bold text-lg animate-glow">
              R
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                pathname === link.href
                  ? 'bg-primary/20 text-primary shadow-lg shadow-primary/20'
                  : 'text-text/60 hover:text-primary hover:bg-surface/50'
              }`}
              title={link.label}
            >
              <span className="text-xl group-hover:animate-pulse-slow">
                {link.icon}
              </span>
              
              {/* Active indicator */}
              {pathname === link.href && (
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full animate-glow"></div>
              )}
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-2 py-1 bg-surface/90 backdrop-blur-md text-text text-xs font-inter rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {link.label}
              </div>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://github.com/rishabghosh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 text-text/60 hover:text-primary transition-colors duration-200"
            title="GitHub"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/rishabghosh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 text-text/60 hover:text-primary transition-colors duration-200"
            title="LinkedIn"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
} 