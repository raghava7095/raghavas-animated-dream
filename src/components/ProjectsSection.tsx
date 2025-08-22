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
  Zap,
  Database,
  Smartphone,
  Globe,
  Brain,
  GamepadIcon
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    icon: Globe
  },
  {
    id: 2,
    title: 'Algorithm Visualizer',
    category: 'Data Structures',
    description: 'Interactive web app to visualize sorting and pathfinding algorithms. Built with React and custom animations.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'TypeScript', 'D3.js', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    icon: Brain
  },
  {
    id: 3,
    title: 'Crypto Portfolio Tracker',
    category: 'Web Development',
    description: 'Real-time cryptocurrency portfolio tracking with charts and alerts. Integrated with multiple crypto APIs.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js', 'Chart.js', 'Firebase', 'Crypto APIs'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    icon: Database
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile app for task management with offline sync and collaboration features.',
    image: '/api/placeholder/400/250',
    tech: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    icon: Smartphone
  },
  {
    id: 5,
    title: 'Chess Engine AI',
    category: 'Artificial Intelligence',
    description: 'Chess engine with minimax algorithm and alpha-beta pruning. Includes web interface for gameplay.',
    image: '/api/placeholder/400/250',
    tech: ['Python', 'JavaScript', 'Chess.js', 'Flask'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    icon: GamepadIcon
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    category: 'Web Development',
    description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
    image: '/api/placeholder/400/250',
    tech: ['Vue.js', 'OpenWeather API', 'Mapbox', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    icon: Zap
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Data Structures', 'Artificial Intelligence'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
          <h2 className="text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey - from competitive programming solutions to full-stack applications
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Zap className="w-6 h-6 text-primary mr-2" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-neon transition-all duration-300 group overflow-hidden">
                    <div className="relative overflow-hidden">
                      {/* Project image placeholder with icon */}
                      <div className="h-48 bg-gradient-mesh flex items-center justify-center relative">
                        <IconComponent className="w-16 h-16 text-foreground/30" />
                        <motion.div
                          className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button size="sm" variant="outline" className="neon-border">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          <Button size="sm" className="bg-gradient-primary">
                            <Play className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg group-hover:gradient-text transition-all">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:neon-border transition-all">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-primary-foreground border-primary shadow-neon'
                    : 'glass-effect border-border hover:border-primary/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <div className="h-40 bg-gradient-dark flex items-center justify-center">
                        <IconComponent className="w-12 h-12 text-foreground/20 group-hover:text-primary/50 transition-colors" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant={project.featured ? 'default' : 'secondary'} className="text-xs">
                          {project.featured ? 'Featured' : project.category}
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
                        <Button size="sm" variant="outline" className="flex-1 text-xs">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary text-xs">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
              <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}