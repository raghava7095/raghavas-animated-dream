import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Menu, X, Download, ExternalLink } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Secrets', href: '#secrets' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      // Check if the click is outside the menu and not on the menu button
      if (menuRef.current && !menuRef.current.contains(target) && 
          !target.closest('button[aria-label*="menu"]')) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            RAGHAVA
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-foreground hover:text-primary transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/raghava7095"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-primary transition-colors p-2"
              title="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raghava-dhanukonda-9b3243254/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-primary transition-colors p-2"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/raghava_.27.03/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-primary transition-colors p-2"
              title="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
            <a href="https://drive.google.com/file/d/1G4jDE8VfV_SnZ_6V1pTccjPPd7pBilFg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="neon-border hover:glow-effect transition-all duration-300"
              >
                Resume
                <ExternalLink className="w-4 h-4 mr-2" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden mt-4 glass-effect rounded-lg p-6 w-full absolute left-0 right-0 z-50"
              style={{ top: '100%' }}
            >
              <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <a 
                    href="https://github.com/raghava7095" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/raghava-dhanukonda-9b3243254/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/raghava_.27.03/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary"
                    title="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a href="https://drive.google.com/file/d/1ELJY2MGgh6vbq4ThiKgLklZSuBdoztff/view" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" size="sm" className="neon-border w-full">
                      <Download size={16} className="mr-2" />
                      Resume
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
