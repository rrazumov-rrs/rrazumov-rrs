import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { itemVariants } from '@/lib/animations';

const handleProjectClick = () => {
  toast({
    title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
  });
};

const Projects = () => {
  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Cybersecurity & IT Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <img  
            className="w-full h-32 object-cover rounded-lg mb-4"
            alt="Diagram of a home network lab"
           src="https://images.unsplash.com/photo-1593432477343-730191a137ad" />
          <h3 className="text-lg font-semibold text-green-300 mb-2">Home Network Security Lab</h3>
          <p className="text-gray-300 text-sm mb-4">
            Designed and built a segmented home network using pfSense to practice firewall rule configuration, intrusion detection with Suricata, and network monitoring.
          </p>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={handleProjectClick}
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
            >
              <Github className="w-3 h-3 mr-1" />
              View on GitHub
            </Button>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <img  
            className="w-full h-32 object-cover rounded-lg mb-4"
            alt="Command line interface showing a script running"
           src="https://images.unsplash.com/photo-1618423691238-005c23e8f851" />
          <h3 className="text-lg font-semibold text-green-300 mb-2">PowerShell Automation Scripts</h3>
          <p className="text-gray-300 text-sm mb-4">
            Developed a series of PowerShell scripts to automate user onboarding, system health checks, and log analysis, improving efficiency and reducing manual errors.
          </p>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={handleProjectClick}
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
            >
              <Github className="w-3 h-3 mr-1" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;