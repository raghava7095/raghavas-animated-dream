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
                      <span>2022 - Present</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Visakhapatnam</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <span>Vignan's Institute Of Information Technology</span>
                    <br />
                    <span>CGPA:8.9</span>
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
                I’m passionate about turning ideas into real-world applications and pushing the boundaries of what’s possible with code. Competitive programming has trained me to think critically and solve problems efficiently, while my projects show my love for building meaningful, end-to-end solutions.I enjoy exploring new technologies, learning fast, and applying that knowledge to create products that add value. Whether it’s through hackathons, internships, or leading sessions for my peers, I’ve always been driven by curiosity, collaboration, and the impact technology can have on people’s lives.Beyond tech, my involvement in the Sathya Seva Organisation has helped me grow as a disciplined and empathetic person, which I carry into every team I work with.
                </p>
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
                  <Trophy className="w-6 h-6 text-accent" />
                  <span>Quick Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">900+</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Years Coding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-glow">2+</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
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
  <h4 className="font-medium">Exploring Artificial Intelligence</h4>
  <p className="text-sm text-muted-foreground">
    Innovating with AI through real-world projects while sharing knowledge with the community.
  </p>
</div> 
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <a href="https://drive.google.com/file/d/1ELJY2MGgh6vbq4ThiKgLklZSuBdoztff/view">
              <Button className="flex-1 bg-gradient-primary hover:bg-gradient-glow shadow-neon">
              <ExternalLink className="w-4 h-4 mr-2" />
                Full Resume
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/raghava-dhanukonda-9b3243254/">
              <Button variant="outline" className="flex-1 neon-border hover:glow-effect">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}