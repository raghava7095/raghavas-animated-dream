import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  Play, 
  Filter,
  Code2,
  Database,
  Smartphone,
  Globe,
  Brain,
  Zap
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'GapFinder Explorer',
    category: 'Web Development',
    description: 'Engineered an AI-powered gap analysis tool that identified missing concepts from user input with 90% accuracy, generating tailored learning recommendations. Improved user comprehension by 40% through a clean, responsive UI and interactive topic workflows',
    image: '/gapfinder.png',
    tech: ['React', 'Node.js', 'Express', 'Gemini API'],
    github: 'https://github.com/d4taphant0m/gapfinder-explorer-launch',
    demo: 'https://gapfinder-explorer-launch.vercel.app/'
  },
  {
    id: 2,
    title: 'NoteNexus',
    category: 'Web Development',
    description: 'AI-powered YouTube lecture notes platform that processes videos into summaries, flashcards, and quizzes. Automated study material creation by 70% with secure user authentication (JWT, Google OAuth) and responsive UI.',
    image: '/notenexus.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI API'],
    github: 'https://github.com/raghava7095/frontend-notenexus',
    demo: 'https://frontend-notenexus.vercel.app/dashboard'
  },
  {
    id: 3,
    title: 'BargainBot Ninja',
    category: 'Web Development',
    description: 'AI-powered deal comparison platform that enables users to compare product prices across multiple e-commerce sites in real-time with dynamic UI components and responsive layouts.',
    image: '/bargain.png',
    tech: ['React', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    github: 'https://github.com/raghava7095/bargainbot-ninja',
    demo: 'https://bargainbot-ninja.vercel.app/'
  },
  {
    id: 4,
    title: 'EduConnect LMS',
    category: 'Web Development',
    description: 'Comprehensive Learning Management System (LMS) that streamlines academic, cultural, and skill development activities for college students, featuring AI-based doubt-clearing and user authentication.',
    image: '/lms.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI Chatbot'],
    github: 'https://github.com/raghava7095/mini-project',
    demo: 'https://parthasrikar.github.io/mini-project/'
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    category: 'Web Development',
    description: 'Modern and responsive personal portfolio website showcasing projects, skills, and achievements with a clean UI built using ReactJS and Tailwind CSS.',
    image: '/portfolio.png',
    tech: ['React', 'Tailwind CSS', 'GitHub Pages', 'Vercel'],
    github: 'https://github.com/raghava7095/my_portfolio',
    demo: 'https://my-portfolio-mu-bice-58.vercel.app/'
  },
  {
    id: 6,
    title: 'Skyline Airlines',
    category: 'Web Development',
    description: 'Robust airline management system for managing flights, bookings, crew, and tickets with a visually appealing interface and dynamic animations.',
    image: '/Airports.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/raghava7095/Airlines',
    demo: 'https://bharath78935.github.io/Airlines/Airlines--main/hello.html'
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey - from competitive programming solutions to full-stack applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <div 
                        className="h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="w-full bg-gradient-primary text-xs">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/10 to-secondary/10 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Check out my GitHub profile for more projects and contributions to open source.
              </p>
              <a href="https://github.com/raghava7095" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}