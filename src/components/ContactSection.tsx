import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare,
  Calendar,
  Copy,
  ExternalLink
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'raghavadhanukonda709@gmail.com',
    description: 'Best for detailed discussions',
    href: 'mailto:raghavadhanukonda709@gmail.com',
    color: 'text-primary'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Connect on LinkedIn',
    description: 'Professional networking',
    href: 'https://linkedin.com/in/raghava-dhanukonda-9b3243254',
    color: 'text-blue-400'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'Follow on GitHub',
    description: 'View my code and projects',
    href: 'https://github.com/raghava7095',
    color: 'text-accent'
  }
];

const quickActions = [
  {
    title: 'Schedule a Call',
    description: 'Book a 30-minute chat about opportunities',
    icon: Calendar,
    action: 'Schedule Call',
    color: 'bg-gradient-primary'
  },
  {
    title: 'Download Resume',
    description: 'Get my latest resume in PDF format',
    icon: ExternalLink,
    action: 'Download PDF',
    color: 'bg-gradient-to-r from-secondary to-accent'
  },
  {
    title: 'WhatsApp',
    description: 'Quick messages and instant responses',
    icon: MessageSquare,
    action: 'Chat Now',
    color: 'bg-gradient-to-r from-green-400 to-green-600'
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_0wsbzpb';
    const templateId = 'template_81wmdin';
    const publicKey = 'dTCL0nOFZgySIcuT9';

    try {
      if (!form.current) return;
      
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4 sm:mb-6">Let's Connect</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to collaborate? I'm always excited to discuss new opportunities, projects, or just chat about technology!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 w-full"
          >
            <Card className="glass-effect border-0 shadow-card overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glass-effect border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass-effect border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="glass-effect border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="glass-effect border-border focus:border-primary resize-none min-h-[120px]"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:bg-gradient-glow shadow-neon text-base sm:text-lg py-4 sm:py-6"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <Card className="glass-effect border-0 shadow-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className={`p-2 sm:p-3 rounded-full bg-card ${method.color} group-hover:animate-pulse flex-shrink-0`}>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                        <div className="flex items-center space-x-2">
                          <a
                            href={method.href}
                            className="text-sm hover:text-primary transition-colors truncate"
                          >
                            {method.value}
                          </a>
                          {method.title === 'Email' && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(method.value)}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
            {/* Location */}
            <Card className="glass-effect border-0 shadow-card overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-2 rounded-full bg-card text-primary flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground text-sm">India • Available for Remote Work</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>• Open to remote opportunities</p>
                  <p>• Available for relococation</p>
                  <p>• Flexible with time zones</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-effect border-0 shadow-card bg-gradient-to-r from-primary/10 to-secondary/10 w-full max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Thanks for visiting my portfolio! 🚀</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Whether you're looking for a passionate developer, want to collaborate on a project, 
                or just want to connect and share ideas about technology - I'd love to hear from you. 
                Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}