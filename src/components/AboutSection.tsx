import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Trophy, 
  Code2, 
  Brain,
  Download,
  ExternalLink
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about crafting digital experiences and solving complex problems through code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-effect border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <span>Education Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Computer Science Student</h4>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>2021 - Present</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>India</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Pursuing Bachelor's in Computer Science with focus on software development,
                    algorithms, and competitive programming.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-secondary" />
                  <span>What Drives Me</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about creating innovative solutions and pushing the boundaries of what's possible with code. 
                  My journey in competitive programming has sharpened my problem-solving skills, while my projects reflect 
                  my commitment to building meaningful applications that make a difference.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  <span>Quick Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Years Coding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-glow">Top 10%</div>
                    <div className="text-sm text-muted-foreground">LeetCode Ranking</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Skills & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-effect border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  <span>Core Competencies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Go'].map((lang) => (
                        <Badge key={lang} variant="outline" className="hover:neon-border transition-all">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover:glow-effect transition-all">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Web Development', 'System Design'].map((skill) => (
                        <Badge key={skill} className="bg-gradient-primary hover:bg-gradient-glow">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-card">
              <CardHeader>
                <CardTitle>Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
                  <div>
                    <h4 className="font-medium">Advanced Algorithms</h4>
                    <p className="text-sm text-muted-foreground">Mastering graph algorithms and dynamic programming</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-pulse" />
                  <div>
                    <h4 className="font-medium">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground">Building scalable web applications with modern tech stack</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse" />
                  <div>
                    <h4 className="font-medium">Open Source Contribution</h4>
                    <p className="text-sm text-muted-foreground">Contributing to community projects and building my portfolio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                <Download className="w-4 h-4 mr-2" />
                Full Resume
              </Button>
              <Button variant="outline" className="flex-1 neon-border hover:glow-effect">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}