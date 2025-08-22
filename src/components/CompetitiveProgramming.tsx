import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Target, 
  Zap, 
  TrendingUp, 
  Calendar, 
  ExternalLink,
  Code,
  Brain,
  Timer,
  Star
} from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    username: 'raghava_codes',
    rating: 1800,
    maxRating: 1850,
    solved: 450,
    total: 2500,
    rank: 'Knight',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    achievements: [
      '50 Days Badge 2023',
      'Top 15% Global Ranking',
      'Contest Rating 1800+'
    ],
    recentActivity: 'Solved 5 problems this week',
    icon: Code
  },
  {
    name: 'Codeforces',
    username: 'raghava_cf',
    rating: 1450,
    maxRating: 1520,
    solved: 200,
    total: 8000,
    rank: 'Specialist',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    achievements: [
      'Specialist Rating Achieved',
      '25+ Contest Participations',
      'Solved Div2 C Problems'
    ],
    recentActivity: 'Participated in Div2 Contest',
    icon: Target
  },
  {
    name: 'GeeksforGeeks',
    username: 'raghava_gfg',
    rating: 1650,
    maxRating: 1700,
    solved: 300,
    total: 1500,
    rank: 'Expert',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    achievements: [
      'Problem of the Day Streak 50+',
      'Expert Level Achieved',
      'Weekly Contest Top 100'
    ],
    recentActivity: 'Maintained POTD streak',
    icon: Brain
  },
  {
    name: 'CodeChef',
    username: 'raghava_cc',
    rating: 1580,
    maxRating: 1620,
    solved: 180,
    total: 4000,
    rank: '3 Star',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    achievements: [
      '3 Star Rating',
      'Long Challenge Participant',
      'Monthly Contest Regular'
    ],
    recentActivity: 'Solved medium difficulty problems',
    icon: Zap
  }
];

const skillBreakdown = [
  { skill: 'Dynamic Programming', level: 85, problems: 120 },
  { skill: 'Graph Algorithms', level: 80, problems: 95 },
  { skill: 'Data Structures', level: 90, problems: 150 },
  { skill: 'Greedy Algorithms', level: 75, problems: 80 },
  { skill: 'String Algorithms', level: 70, problems: 65 },
  { skill: 'Number Theory', level: 65, problems: 45 }
];

const recentAchievements = [
  {
    title: 'LeetCode Weekly Contest Top 500',
    date: 'Dec 2023',
    description: 'Achieved top 500 ranking in weekly contest #375',
    icon: Trophy,
    color: 'text-accent'
  },
  {
    title: 'Codeforces Rating Milestone',
    date: 'Nov 2023',
    description: 'Reached highest rating of 1520 (Specialist)',
    icon: TrendingUp,
    color: 'text-primary'
  },
  {
    title: '50 Day Streak on GeeksforGeeks',
    date: 'Oct 2023',
    description: 'Maintained problem of the day solving streak',
    icon: Calendar,
    color: 'text-secondary'
  },
  {
    title: 'Binary Search Mastery',
    date: 'Sep 2023',
    description: 'Solved 50+ binary search problems',
    icon: Target,
    color: 'text-primary-glow'
  }
];

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Competitive Programming</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharpening problem-solving skills through algorithmic challenges across multiple platforms
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold gradient-text">1130+</div>
                  <div className="text-muted-foreground">Problems Solved</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-muted-foreground">Active Platforms</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-secondary">1850</div>
                  <div className="text-muted-foreground">Highest Rating</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-muted-foreground">Contest Participations</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Platform Statistics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              const solvedPercentage = (platform.solved / platform.total) * 100;
              
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-neon transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg ${platform.bgColor}`}>
                            <IconComponent className={`w-6 h-6 ${platform.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{platform.name}</CardTitle>
                            <p className="text-muted-foreground text-sm">@{platform.username}</p>
                          </div>
                        </div>
                        <Badge className={`${platform.bgColor} ${platform.color} border-0`}>
                          {platform.rank}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Rating Display */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">{platform.rating}</div>
                          <div className="text-sm text-muted-foreground">
                            Max: {platform.maxRating}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">{platform.solved}</div>
                          <div className="text-sm text-muted-foreground">Problems Solved</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{solvedPercentage.toFixed(1)}%</span>
                        </div>
                        <Progress value={solvedPercentage} className="h-2" />
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-semibold mb-2">Recent Achievements</h5>
                        <div className="space-y-1">
                          {platform.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm">
                              <Star className="w-3 h-3 text-accent" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{platform.recentActivity}</span>
                        <Button size="sm" variant="outline" className="text-xs">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Algorithm Mastery</h3>
          <Card className="glass-effect border-0 shadow-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {skillBreakdown.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{skill.skill}</h4>
                      <div className="text-right">
                        <Badge variant="secondary">{skill.level}%</Badge>
                        <div className="text-sm text-muted-foreground">{skill.problems} solved</div>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3" />
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recentAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-card ${achievement.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{achievement.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {achievement.date}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        </div>
                      </div>
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
              <h3 className="text-2xl font-bold mb-4">Let's Code Together!</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Want to practice together or discuss algorithms? Let's connect and solve some challenging problems!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon">
                  <Code className="w-5 h-5 mr-2" />
                  View Profiles
                </Button>
                <Button variant="outline" className="neon-border hover:glow-effect">
                  <Timer className="w-5 h-5 mr-2" />
                  Practice Together
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}