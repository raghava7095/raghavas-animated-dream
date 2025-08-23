import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Progress component removed as it's no longer used
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
    username: 'raghava7095',
    rating: 1653,
    maxRating: 1742,
    solved: 480,
    rank: 'Knight Soon',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    achievements: [
      '100 Days Badge 2025',
      'Top 10% Global Ranking',
      'Contest Rating 1742+'
    ],
    recentActivity: 'Solved 60+ problems this month',
    icon: Code
  },
  {
    name: 'CodeChef',
    username: 'raghava7095',
    rating: 1626,
    maxRating: 1626,
    solved: 406,
    rank: '3 Star',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    achievements: [
      '3 Star Rating',
      'Long Challenge Participant',
      '90+ Weekly Contests Participated'
    ],
    recentActivity: 'Soon 4 Star',
    icon: Zap
  },
  {
    name: 'GeeksforGeeks',
    username: 'raghavadhany269',
    rating: 0,
    maxRating: 0,
    solved: 40,
    rank: 'None',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    achievements: [
      'Problem of the Day Streak 02+',
      'Solved 40+ problems',
    ],
    recentActivity: 'Maintained POTD streak',
    icon: Brain
  },
  {
    name: 'Codeforces',
    username: 'raghava7095',
    rating: 636,
    maxRating: 636,
    solved: 3,
    rank: 'Newbie',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    achievements: [
      'Soon Specialist Rating ',
      '1st Contest Participation with rank 683 globally',
    ],
    recentActivity: 'Participated in Div2 Contest',
    icon: Target
  }
];

const contestHistory = [
  { name: 'LeetCode Weekly 250', rank: 150, total: 15000, ratingChange: '+45' },
  { name: 'Codeforces Round #750', rank: 850, total: 20000, ratingChange: '+32' },
  { name: 'LeetCode Biweekly 70', rank: 320, total: 12000, ratingChange: '+28' },
  { name: 'CodeChef Long 2022', rank: 1500, total: 5000, ratingChange: '+50' },
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
                  <div className="text-3xl font-bold gradient-text">900+</div>
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
                  <div className="text-3xl font-bold text-secondary">1742</div>
                  <div className="text-muted-foreground">Highest Rating</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-accent">120+</div>
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
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-sm text-muted-foreground">Rating</h4>
                          <div className="text-xl font-bold">
                            <span className={platform.color}>{platform.rating}</span>
                            {platform.maxRating > platform.rating && (
                              <span className="text-muted-foreground text-sm ml-1">→ {platform.maxRating}</span>
                            )}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-sm text-muted-foreground">Solved</h4>
                          <div className="text-xl font-bold">{platform.solved}+</div>
                        </div>
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
                        <a 
                          href={
                            platform.name === 'LeetCode' ? 'https://leetcode.com/u/raghava7095/' :
                            platform.name === 'CodeChef' ? 'https://www.codechef.com/users/raghava7095' :
                            platform.name === 'GeeksforGeeks' ? 'https://www.geeksforgeeks.org/user/raghavadhany269/' :
                            'https://codeforces.com/profile/raghava7095'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Visit Profile
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

        {/* Contest History - Commented out for future use */}
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Contest History</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {contestHistory.map((contest, index) => (
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
                      <div className="p-3 rounded-full bg-card text-primary">
                        <Code className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{contest.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            Rank {contest.rank} / {contest.total}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">Rating Change: {contest.ratingChange}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
        */}

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
                <a href="#cp" className="w-full sm:w-auto">
                  <Button className="bg-gradient-primary hover:bg-gradient-glow shadow-neon w-full">
                    <Code className="w-5 h-5 mr-2" />
                    View Profiles
                  </Button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="neon-border hover:glow-effect w-full">
                    <Timer className="w-5 h-5 mr-2" />
                    Practice Together
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}