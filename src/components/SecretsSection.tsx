import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Shield, 
  Star, 
  Brain, 
  Heart,
  Code,
  Coffee,
  Gamepad2,
  Music,
  Camera,
  Book
} from 'lucide-react';

const secretData = {
  personalQA: [
    { 
      q: "What's your secret superpower?", 
      a: "I can debug code in my sleep! Seriously, I've solved problems in dreams before. 😴",
      icon: Brain,
      color: "text-primary"
    },
    { 
      q: "Favorite midnight snack while coding?", 
      a: "Instant noodles with extra cheese and a side of energy drink. Health is overrated at 2 AM! 🍜",
      icon: Coffee,
      color: "text-accent"
    },
    { 
      q: "Most embarrassing coding moment?", 
      a: "Spent 6 hours debugging only to find I had a typo in variable name. 'user' vs 'usre' 🤦‍♂️",
      icon: Code,
      color: "text-secondary"
    },
    { 
      q: "Secret hobby nobody knows about?", 
      a: "I collect vintage keyboard switches and can identify them just by sound! Click, clack, magic! ⌨️",
      icon: Music,
      color: "text-primary-glow"
    }
  ],
  technicalQA: [
    { 
      q: "Your controversial tech opinion?", 
      a: "Tabs > Spaces. Fight me! Also, PHP isn't that bad, people just love to hate it. 🔥",
      icon: Code,
      color: "text-accent"
    },
    { 
      q: "Most complex bug you've solved?", 
      a: "Race condition in a multi-threaded app that only occurred on Tuesdays at 3:47 PM. Took 3 weeks! 🐛",
      icon: Brain,
      color: "text-primary"
    },
    { 
      q: "Technology you secretly love but pretend not to?", 
      a: "Internet Explorer 6. Just kidding! It's actually Visual Basic. Don't judge me. 😅",
      icon: Heart,
      color: "text-secondary"
    },
    { 
      q: "Your coding ritual?", 
      a: "Must have exactly 2 monitors, mechanical keyboard, lo-fi music, and a rubber duck named Gerald. 🦆",
      icon: Coffee,
      color: "text-primary-glow"
    }
  ],
  funFacts: [
    { 
      fact: "I once solved a LeetCode Hard problem during a boring lecture and felt like a superhero! 💪",
      icon: Star,
      color: "text-accent"
    },
    { 
      fact: "My first program was a 'Hello World' that took me 3 hours because I forgot semicolons exist. Classic! 😂",
      icon: Code,
      color: "text-primary"
    },
    { 
      fact: "I can type at 90+ WPM but somehow still make typos in variable names. The irony! ⚡",
      icon: Brain,
      color: "text-secondary"
    },
    { 
      fact: "I've memorized Pi to 50 digits not for math, but because a friend bet me I couldn't. Easy money! 🥧",
      icon: Star,
      color: "text-primary-glow"
    },
    { 
      fact: "My GitHub commit history looks like a heart rate monitor during exam season! 📈",
      icon: Heart,
      color: "text-accent"
    },
    { 
      fact: "I once fixed a production bug while on a roller coaster. Adrenaline + coding = magic! 🎢",
      icon: Gamepad2,
      color: "text-primary"
    }
  ],
  exclusiveInsights: [
    {
      title: "My Developer Journey Timeline",
      content: "Started with HTML/CSS → Fell in love with JavaScript → Had a brief affair with Python → Committed to React → Currently flirting with Three.js!",
      icon: Book,
      color: "text-primary"
    },
    {
      title: "Secret Project I'm Working On",
      content: "Building an AI that can predict how many cups of coffee I need based on the complexity of my current bug. It's surprisingly accurate! ☕",
      icon: Coffee,
      color: "text-secondary"
    },
    {
      title: "My Code Review Philosophy",
      content: "Code like someone who knows where you live will maintain it. Comments are love letters to your future self. 💝",
      icon: Heart,
      color: "text-accent"
    }
  ]
};

export default function SecretsSection() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const correctPassword = 'raghava2024'; // In real app, this would be more secure!

  const handleUnlock = () => {
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true);
    } else {
      // Add shake animation or error state
      setPassword('');
    }
  };

  const tabs = [
    { id: 'personal', name: 'Personal Q&A', icon: Heart },
    { id: 'technical', name: 'Technical Q&A', icon: Code },
    { id: 'facts', name: 'Fun Facts', icon: Star },
    { id: 'insights', name: 'Exclusive Insights', icon: Book }
  ];

  if (!isUnlocked) {
    return (
      <section id="secrets" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="glass-effect border-0 shadow-intense neon-border">
              <CardHeader className="text-center">
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-auto mb-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center"
                >
                  <Lock className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <CardTitle className="text-3xl gradient-text mb-4">
                  Secrets of Raghava 🔒
                </CardTitle>
                <p className="text-muted-foreground">
                  This section contains my personal insights, fun facts, and exclusive content. 
                  Enter the secret password to unlock!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter the secret password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-12 text-center text-lg glass-effect border-primary/50 focus:border-primary"
                      onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={handleUnlock}
                      className="w-full bg-gradient-primary hover:bg-gradient-glow shadow-neon text-lg py-6"
                    >
                      <Unlock className="w-5 h-5 mr-2" />
                      Unlock Secrets
                    </Button>
                  </motion.div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Hint for the curious minds:</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>🔍 It's my name + year (lowercase)</p>
                    <p>💡 Format: firstname + 2024</p>
                    <p>🎯 Example pattern: john2024</p>
                  </div>
                </div>

                <div className="text-center">
                  <Badge variant="outline" className="animate-pulse">
                    🎉 Special content awaits inside!
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="secrets" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-6 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center"
          >
            <Unlock className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <h2 className="text-5xl font-bold gradient-text mb-4">🎉 Welcome to My Secret World! 🎉</h2>
          <p className="text-xl text-muted-foreground">
            Congratulations! You've unlocked exclusive content. Enjoy the behind-the-scenes of Raghava! 
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 glass-effect rounded-full p-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-6 py-3 transition-all ${
                    activeTab === tab.id 
                      ? 'bg-gradient-primary text-primary-foreground shadow-neon' 
                      : 'hover:bg-card'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {tab.name}
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'personal' && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {secretData.personalQA.map((qa, index) => {
                const IconComponent = qa.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3 mb-4">
                          <div className={`p-2 rounded-full bg-card ${qa.color}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-lg leading-tight">{qa.q}</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{qa.a}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'technical' && (
            <motion.div
              key="technical"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {secretData.technicalQA.map((qa, index) => {
                const IconComponent = qa.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3 mb-4">
                          <div className={`p-2 rounded-full bg-card ${qa.color}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-lg leading-tight">{qa.q}</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{qa.a}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'facts' && (
            <motion.div
              key="facts"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {secretData.funFacts.map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="glass-effect border-0 shadow-card hover:shadow-neon transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-4 ${fact.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{fact.fact}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'insights' && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              {secretData.exclusiveInsights.map((insight, index) => {
                const IconComponent = insight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="glass-effect border-0 shadow-card hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-full bg-card ${insight.color} flex-shrink-0`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{insight.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Special Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/10 to-secondary/10 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🎊 You're Part of the Inner Circle! 🎊</h3>
              <p className="text-muted-foreground max-w-2xl">
                Thanks for taking the time to explore my secrets! You're now officially part of my inner circle. 
                Feel free to use any of these conversation starters when you reach out to me. 
                I love connecting with curious minds like yourself! 
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}