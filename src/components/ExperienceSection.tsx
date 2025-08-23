import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Code2, 
  ExternalLink,
  Code,
  GitBranch
} from 'lucide-react';

const experiences = [
  {
    type: 'Hackathon',
    title: 'SusHacks 2025',
    role: 'Full-Stack Developer (Team Member)',
    organization: 'VIIT',
    period: 'April 2025',
    location: 'Visakhapatnam, India',
    description: 'Developed GapFinder Explorer, an AI-powered gap analysis tool that identifies missing concepts in learning materials and generates tailored learning recommendations.',
    achievements: [
      'Secured Top 10 position among 120+ teams',
      'Implemented AI model with 90% accuracy in concept gap identification',
      'Built responsive dashboard with React & Node.js',
      'Created interactive topic workflows that improved user comprehension by 40%'
    ],
    tech: ['React', 'Node.js', 'Express', 'Gemini API', 'MongoDB'],
    icon: Trophy,
    color: 'text-accent'
  },
  {
    type: 'Internship',
    title: 'Software Engineering Intern',
    role: 'Frontend Developer',
    organization: 'Shoppeal Tech',
    period: 'April 2025 - June 2025',
    location: 'Remote',
    description: 'Worked on developing dynamic frontend solutions using modern web technologies and content management systems.',
    achievements: [
      'Engineered a centralized, fully dynamic frontend page using Next.js 15, React.js, and GraphQL',
      'Built a custom Strapi Bulk Importer tool for efficient data onboarding',
      'Optimized 10+ GraphQL queries, reducing load times by 30% on dynamic routes',
      'Collaborated on scalable web architecture design with the founder'
    ],
    tech: ['Next.js 15', 'React', 'GraphQL', 'Strapi', 'Azure'],
    icon: Code2,
    color: 'text-primary'
  },
  {
    type: 'Leadership',
    title: 'Competitive Programming Lead',
    role: 'Mentor & Organizer',
    organization: 'ACM VIIT',
    period: 'April 2025 - Present',
    location: 'Visakhapatnam, India',
    description: 'Leading and mentoring students in competitive programming and organizing coding contests at the college level.',
    achievements: [
      'Mentored 50+ students in data structures and algorithms',
      'Organized bi-weekly coding contests for 100+ participants',
      'Developed practice problems and learning materials',
      'Conducted workshops on advanced algorithms and problem-solving techniques'
    ],
    tech: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
    icon: Code,
    color: 'text-secondary'
  },
  {
    type: 'Internship',
    title: 'Web Developer Intern',
    role: 'Frontend Developer',
    organization: 'MotionCut Pvt Ltd',
    period: 'May 2024 - June 2024',
    location: 'Remote',
    description: 'Developed responsive web applications with a focus on user experience and performance optimization.',
    achievements: [
      'Built a dynamic pricing page with real-time updates',
      'Developed an e-commerce site with secure checkout functionality',
      'Created a task management application with local storage integration',
      'Improved UI/UX by designing interactive components and optimizing performance'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
    icon: GitBranch,
    color: 'text-success'
  }
];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Experience & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through hackathons, competitions, and real-world projects that shaped my development skills
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Professional Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full hidden lg:block" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const IconComponent = experience.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block z-10" />
                    
                    {/* Content card */}
                    <div className="lg:w-5/12 w-full">
                      <Card className="glass-effect border-0 shadow-card hover:shadow-neon transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className={`p-3 rounded-full bg-card ${experience.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <Badge variant="outline">{experience.type}</Badge>
                          </div>
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <div className="space-y-1 text-muted-foreground">
                            <p className="font-semibold text-foreground">{experience.role}</p>
                            <p className="text-sm">{experience.organization}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{experience.description}</p>
                          
                          <div>
                            <h5 className="font-semibold mb-2 text-sm">Key Achievements:</h5>
                            <ul className="space-y-1">
                              {experience.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold mb-2 text-sm">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              {experience.tech.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer for alignment */}
                    <div className="lg:w-5/12 hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/10 to-secondary/10 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always excited about new opportunities and challenges. Let's connect and create something extraordinary!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/in/raghava-dhanukonda-9b3243254/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View LinkedIn
                </Button></a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}