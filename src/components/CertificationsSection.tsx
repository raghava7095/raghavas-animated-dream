import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  Star, 
  Trophy,
  Target,
  Zap,
  Code
} from 'lucide-react';

const certifications = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
    status: 'Earned',
    credentialId: 'Responsive-Web-Design',
    description: 'Learned to build responsive web applications with HTML5, CSS3, and modern web design principles.',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    icon: Award,
    link: 'https://www.freecodecamp.org/certification/raghava18/responsive-web-design',
    tags: ['Web Development', 'Frontend']
  },
  {
    title: 'Frontend Web Developer',
    issuer: 'Infosys Springboard',
    date: '2025',
    status: 'Earned',
    credentialId: 'Frontend-Web-Dev',
    description: 'Comprehensive training in modern frontend development technologies and best practices.',
    skills: ['JavaScript', 'React', 'TypeScript', 'UI/UX'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    icon: Code,
    link: 'https://drive.google.com/file/d/1HtisaKY3CETuMk1wzYkzYzaCSQyWS6SR/view?usp=sharing',
    tags: ['Frontend', 'Web Development']
  },
  {
    title: 'Git and GitHub Essentials',
    issuer: 'EDX',
    date: '2024',
    status: 'Earned',
    credentialId: 'Git-GitHub-Essentials',
    description: 'Mastered version control with Git and collaborative development using GitHub.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    icon: Code,
    link: 'https://www.credly.com/badges/fbd6112c-05ad-45d4-9658-443a61cb8838/linked_in_profile',
    tags: ['Version Control', 'DevOps']
  },
  {
    title: 'Python Demonstrations For Practice',
    issuer: 'Udemy',
    date: '2024',
    status: 'Earned',
    credentialId: 'Python-Practice',
    description: 'Practical Python programming with hands-on exercises and real-world examples.',
    skills: ['Python', 'Algorithms', 'Problem Solving', 'Data Structures'],
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    icon: Code,
    link: 'https://www.udemy.com/certificate/UC-632c49dd-ded6-4119-a9aa-4f8f2ebb5fb5/',
    tags: ['Python', 'Programming']
  },
  {
    title: 'Postman API Fundamentals',
    issuer: 'Postman',
    date: '2024',
    status: 'Earned',
    credentialId: 'Postman-API',
    description: 'Learned API development and testing using Postman, including collections, environments, and automation.',
    skills: ['API Testing', 'Postman', 'REST', 'Automation'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    icon: Code,
    link: 'https://badgr.com/public/assertions/rtn2-CekSdKN6wE_CcPUaw',
    tags: ['API', 'Testing']
  },
  {
    title: 'Relational Database Basics',
    issuer: 'EDX',
    date: '2024',
    status: 'Earned',
    credentialId: 'Relational-DB',
    description: 'Fundamentals of relational databases including SQL, database design, and query optimization.',
    skills: ['SQL', 'Database Design', 'Normalization', 'Query Optimization'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-600/10',
    icon: Code,
    link: 'https://www.credly.com/badges/44ca27e0-8850-49f6-8af6-cd186a4a340d/linked_in_profile',
    tags: ['Database', 'SQL']
  }
];

const achievements = [
  {
    title: 'CodeChef 3-Star Coder',
    description: 'Achieved 3-star rating with consistent performance in monthly contests',
    badge: '⭐⭐⭐',
    color: 'text-yellow-500'
  },
  {
    title: 'LeetCode Knight Badge',
    description: 'Solved 450+ problems and maintained consistent contest participation',
    badge: '🏆',
    color: 'text-orange-400'
  },
  {
    title: 'Codeforces First Contest',
    description: 'Achieved +636 rating and global rank 683 in first Div3 contest',
    badge: '🏆',
    color: 'text-orange-400'
  },
  {
    title: 'Core Web Developer',
    description: 'Contributed to web-based initiatives at AP-SSYM (Sathya Sai Young Messengers)',
    badge: '🌐',
    color: 'text-blue-400'   
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning journey validated through industry-recognized certifications and achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="group perspective-1000"
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-neon transition-all duration-300 h-full group-hover:neon-border">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${cert.bgColor} group-hover:animate-pulse`}>
                          <IconComponent className={`w-6 h-6 ${cert.color}`} />
                        </div>
                        <Badge 
                          variant={cert.status === 'Active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {cert.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:gradient-text transition-all">
                        {cert.title}
                      </CardTitle>
                      <div className="text-muted-foreground">
                        <p className="font-medium text-sm">{cert.issuer}</p>
                        <div className="flex items-center space-x-2 text-xs mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-xs mb-2 text-muted-foreground uppercase tracking-wide">
                          Key Skills
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="text-xs hover:neon-border transition-all cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="w-full text-xs hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary transition-all"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Verify Certificate
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Coding Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{achievement.badge}</div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg mb-2 ${achievement.color}`}>
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Certification Summary</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold gradient-text">18</div>
                  <div className="text-muted-foreground">Active Certifications</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-muted-foreground">Tech Domains</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-secondary">2025</div>
                  <div className="text-muted-foreground">Latest Year</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-muted-foreground">Pass Rate</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
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
              <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                I believe in continuous learning and staying updated with the latest technologies. 
                These certifications represent my commitment to professional growth and technical excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon"
                 onClick={() => window.open('https://www.linkedin.com/in/raghava-dhanukonda-9b3243254/details/certifications/', '_blank', 'noopener,noreferrer')}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View All Certificates
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}