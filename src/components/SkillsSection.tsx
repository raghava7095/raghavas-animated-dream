import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Users, 
  MessageSquare, 
  Target,
  Zap,
  Palette
} from 'lucide-react';

const technicalSkills = [
  {
    category: 'Programming Languages',
    icon: Code,
    color: 'text-primary',
    skills: [
      { name: 'C++', level: 90, description: 'Competitive Programming, DSA' },
      { name: 'Python', level: 85, description: 'Backend, Scripting, ML' },
      { name: 'JavaScript', level: 88, description: 'Frontend, Node.js, React' },
      { name: 'TypeScript', level: 82, description: 'Type-safe development' },
      { name: 'Java', level: 75, description: 'OOP, Spring Framework' },
    ]
  },
  {
    category: 'Web Technologies',
    icon: Globe,
    color: 'text-secondary',
    skills: [
      { name: 'React.js', level: 90, description: 'Modern UI development' },
      { name: 'Node.js', level: 85, description: 'Backend APIs, Express' },
      { name: 'Next.js', level: 80, description: 'Full-stack React framework' },
      { name: 'Tailwind CSS', level: 92, description: 'Utility-first styling' },
      { name: 'HTML/CSS', level: 95, description: 'Semantic markup, responsive design' },
    ]
  },
  {
    category: 'Databases & Tools',
    icon: Database,
    color: 'text-accent',
    skills: [
      { name: 'MongoDB', level: 85, description: 'NoSQL database design' },
      { name: 'PostgreSQL', level: 80, description: 'Relational database management' },
      { name: 'Git/GitHub', level: 90, description: 'Version control, collaboration' },
      { name: 'Docker', level: 70, description: 'Containerization' },
      { name: 'AWS', level: 65, description: 'Cloud deployment' },
    ]
  },
  {
    category: 'Mobile & Other',
    icon: Smartphone,
    color: 'text-primary-glow',
    skills: [
      { name: 'React Native', level: 75, description: 'Cross-platform mobile apps' },
      { name: 'Flutter', level: 70, description: 'Dart-based mobile development' },
      { name: 'GraphQL', level: 78, description: 'API query language' },
      { name: 'Firebase', level: 80, description: 'Backend as a service' },
      { name: 'Redux', level: 82, description: 'State management' },
    ]
  }
];

const softSkills = [
  {
    name: 'Problem Solving',
    icon: Brain,
    level: 95,
    description: '500+ competitive programming problems solved'
  },
  {
    name: 'Team Collaboration',
    icon: Users,
    level: 88,
    description: 'Experience in hackathons and group projects'
  },
  {
    name: 'Communication',
    icon: MessageSquare,
    level: 85,
    description: 'Technical documentation and presentation skills'
  },
  {
    name: 'Leadership',
    icon: Target,
    level: 80,
    description: 'Led development teams in multiple projects'
  },
  {
    name: 'Adaptability',
    icon: Zap,
    level: 90,
    description: 'Quick learner, stays updated with tech trends'
  },
  {
    name: 'Creativity',
    icon: Palette,
    level: 85,
    description: 'Innovative solutions and UI/UX design thinking'
  }
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive arsenal of technologies and soft skills that drive my development journey
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={category.category} variants={itemVariants}>
                  <Card className="glass-effect border-0 shadow-card h-full hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-card ${category.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span>{category.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold">{skill.name}</h4>
                              <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </div>
                            <Badge variant="outline" className="ml-2">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={skill.level} 
                              className="h-2"
                            />
                            <motion.div
                              className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="glass-effect border-0 shadow-card hover:shadow-neon transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-gradient-primary group-hover:animate-pulse">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-2">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Proficiency</span>
                              <Badge variant="secondary">{skill.level}%</Badge>
                            </div>
                            <div className="relative">
                              <div className="w-full bg-muted rounded-full h-2">
                                <motion.div
                                  className="h-full bg-gradient-primary rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ 
                                    duration: 1.2, 
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                languages, and methodologies to stay at the forefront of software development. 
                My passion for learning drives me to tackle challenging problems and create innovative solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}