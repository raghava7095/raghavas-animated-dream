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
  Zap
} from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    status: 'Active',
    credentialId: 'AWS-CCP-2023-RD',
    description: 'Fundamental understanding of AWS Cloud concepts, services, and terminology.',
    skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    icon: Award
  },
  {
    title: 'Google Cloud Associate Engineer',
    issuer: 'Google Cloud',
    date: 'Nov 2023',
    status: 'Active',
    credentialId: 'GCP-ACE-2023-RD',
    description: 'Deploy applications, monitor operations, and manage enterprise solutions on Google Cloud.',
    skills: ['GCP Services', 'Kubernetes', 'Container Management', 'Cloud Architecture'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    icon: Trophy
  },
  {
    title: 'Meta React Developer Certificate',
    issuer: 'Meta (Facebook)',
    date: 'Oct 2023',
    status: 'Active',
    credentialId: 'META-REACT-2023-RD',
    description: 'Professional-level skills in React development and modern JavaScript.',
    skills: ['React.js', 'JSX', 'State Management', 'Component Architecture'],
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    icon: Star
  },
  {
    title: 'MongoDB Developer Path',
    issuer: 'MongoDB University',
    date: 'Sep 2023',
    status: 'Active',
    credentialId: 'MONGO-DEV-2023-RD',
    description: 'Comprehensive understanding of MongoDB database development and operations.',
    skills: ['NoSQL', 'Database Design', 'Aggregation', 'Performance Optimization'],
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    icon: Target
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'Aug 2023',
    status: 'Active',
    credentialId: 'DOCKER-DCA-2023-RD',
    description: 'Expertise in containerization and Docker ecosystem technologies.',
    skills: ['Containerization', 'Docker Compose', 'Container Orchestration', 'DevOps'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    icon: Zap
  },
  {
    title: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Jul 2023',
    status: 'Active',
    credentialId: 'CKA-2023-RD',
    description: 'Demonstrated skills in Kubernetes cluster administration and management.',
    skills: ['Kubernetes', 'Cluster Management', 'Networking', 'Security'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    icon: Award
  }
];

const achievements = [
  {
    title: 'HackerRank 5-Star Problem Solver',
    description: 'Achieved 5-star rating in multiple domains including algorithms and data structures',
    badge: '⭐⭐⭐⭐⭐',
    color: 'text-yellow-400'
  },
  {
    title: 'LeetCode Knight Badge',
    description: 'Solved 450+ problems and maintained consistent contest participation',
    badge: '🏆',
    color: 'text-orange-400'
  },
  {
    title: 'CodeChef 3-Star Coder',
    description: 'Achieved 3-star rating with consistent performance in monthly contests',
    badge: '⭐⭐⭐',
    color: 'text-yellow-500'
  },
  {
    title: 'GitHub Arctic Code Vault Contributor',
    description: 'Code contributions preserved in the GitHub Arctic Code Vault',
    badge: '🧊',
    color: 'text-cyan-400'
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
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
                        <div className="text-xs text-muted-foreground mb-2">
                          Credential ID: <code className="bg-muted px-1 rounded">{cert.credentialId}</code>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full text-xs hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary transition-all"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify Certificate
                        </Button>
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
                  <div className="text-3xl font-bold gradient-text">{certifications.length}</div>
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
                  <div className="text-3xl font-bold text-secondary">2023</div>
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
                <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View All Certificates
                </Button>
                <Button variant="outline" className="neon-border hover:glow-effect">
                  <Trophy className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}