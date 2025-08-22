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
  Award, 
  Zap, 
  Code2, 
  Target,
  ExternalLink,
  Medal,
  Star
} from 'lucide-react';

const experiences = [
  {
    type: 'Hackathon',
    title: 'Smart India Hackathon 2023',
    role: 'Team Lead & Full-Stack Developer',
    organization: 'Government of India',
    period: 'Aug 2023',
    location: 'National Level',
    description: 'Led a team of 6 developers to create an AI-powered traffic management system. Implemented real-time analytics dashboard and mobile app for traffic monitoring.',
    achievements: [
      'Secured Top 10 position among 1000+ teams',
      'Implemented ML model for traffic prediction',
      'Built responsive dashboard with React & Node.js'
    ],
    tech: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
    icon: Trophy,
    color: 'text-accent'
  },
  {
    type: 'Internship',
    title: 'Software Development Intern',
    role: 'Frontend Developer',
    organization: 'TechCorp Solutions',
    period: 'Jun 2023 - Aug 2023',
    location: 'Remote',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with backend team to integrate RESTful APIs and optimize application performance.',
    achievements: [
      'Improved app performance by 40%',
      'Implemented new feature reducing user onboarding time',
      'Mentored 2 junior developers'
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest'],
    icon: Code2,
    color: 'text-primary'
  },
  {
    type: 'Competition',
    title: 'ACM ICPC Regional Contest',
    role: 'Competitive Programmer',
    organization: 'ACM',
    period: 'Dec 2022 - Present',
    location: 'Multiple Locations',
    description: 'Participated in prestigious programming competitions, solving complex algorithmic problems under time pressure. Consistently ranked in top percentile.',
    achievements: [
      'Regional Qualifier in ICPC 2023',
      'Solved 500+ problems on various platforms',
      'Specialist rating on Codeforces'
    ],
    tech: ['C++', 'Data Structures', 'Algorithms', 'Dynamic Programming'],
    icon: Medal,
    color: 'text-secondary'
  },
  {
    type: 'Project',
    title: 'Open Source Contributor',
    role: 'Developer & Maintainer',
    organization: 'Various OSS Projects',
    period: 'Jan 2022 - Present',
    location: 'Global',
    description: 'Active contributor to open source projects, focusing on React ecosystem and developer tools. Maintained personal projects with community contributions.',
    achievements: [
      '50+ contributions across repositories',
      'Created npm package with 1K+ downloads',
      'Participated in Hacktoberfest 2022 & 2023'
    ],
    tech: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Git'],
    icon: Star,
    color: 'text-primary-glow'
  }
];

const achievements = [
  {
    title: 'Dean\'s List Scholar',
    description: 'Academic Excellence Award for maintaining GPA above 9.0',
    year: '2023',
    icon: Award
  },
  {
    title: 'Coding Competition Winner',
    description: 'First place in university-level coding competition',
    year: '2023',
    icon: Trophy
  },
  {
    title: 'Innovation Award',
    description: 'Best innovative project in college tech fest',
    year: '2022',
    icon: Zap
  },
  {
    title: 'Leadership Recognition',
    description: 'Outstanding leadership in student technical society',
    year: '2022',
    icon: Target
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

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <Badge variant="outline" className="mb-2">{achievement.year}</Badge>
                      </div>
                      <h4 className="font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
                <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View LinkedIn
                </Button>
                <Button variant="outline" className="neon-border hover:glow-effect">
                  <Users className="w-5 h-5 mr-2" />
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}