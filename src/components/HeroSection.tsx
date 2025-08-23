import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Code, Sparkles, ExternalLink } from 'lucide-react';
import ragahavaPhoto from '@/assets/raghava-photo.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >

          {/* Name with Glitch Effect */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl font-bold leading-tight"
            >
              <span className="gradient-text animate-pulse-neon">RAGHAVA</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-4xl font-semibold text-muted-foreground"
            >
              DHANUKONDA
            </motion.h2>
          </div>

          {/* Subtitle with Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-muted-foreground min-h-[32px] flex items-center"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer 🚀',
                1500,
                'Web Developer 💻',
                1500,
                'Competitive Programmer ⚡',
                1500,
                'Problem Solver 🎯',
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-2 text-muted-foreground"
          >
            <MapPin size={18} />
            <span>India • Computer Science Student</span>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-primary hover:text-primary-glow transition-colors cursor-pointer"
          >
            <a href="mailto:raghavadhanukonda709@gmail.com">raghavadhanukonda709@gmail.com</a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://drive.google.com/file/d/1ELJY2MGgh6vbq4ThiKgLklZSuBdoztff/view" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-glow shadow-neon hover:shadow-glow transition-all duration-300"
              >
                Resume
                <ExternalLink className="w-4 h-4 mr-2" />
              </Button>
            </a>
            <a href="https://github.com/raghava7095?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="neon-border hover:glow-effect transition-all duration-300"
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-2"
          >
            {['React', 'MongoDB', 'Node.js', 'DSA', 'C++'].map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="glass-effect hover:neon-border transition-all duration-300 cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Animated Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Glowing background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-mesh rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            />
            
            {/* Main photo container */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden neon-border p-2 glass-effect"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={ragahavaPhoto}
                alt="Raghava Dhanukonda"
                className="w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-2xl"
              />
              
              {/* Holographic overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-2xl pointer-events-none"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating elements around photo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
                style={{
                  top: `${20 + i * 15}%`,
                  right: i % 2 === 0 ? '-10px' : 'auto',
                  left: i % 2 === 1 ? '-10px' : 'auto',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}