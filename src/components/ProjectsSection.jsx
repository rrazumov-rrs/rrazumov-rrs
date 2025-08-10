
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, HardDrive, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProjectsSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleProjectClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg">
          <Code className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Personal Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-green-400" />
            <h3 className="text-lg font-semibold text-green-300">Home Lab Network Security Setup</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Designed and implemented a secure home network using a pfSense firewall, VLANs for device segregation, and set up a Pi-hole for network-wide ad blocking and monitoring.
          </p>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleProjectClick}
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
          >
            <Github className="w-3 h-3 mr-1" />
            View Documentation
          </Button>
        </div>

        <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <HardDrive className="w-8 h-8 text-cyan-400" />
            <h3 className="text-lg font-semibold text-cyan-300">Automated Backup Script</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Developed a PowerShell script to automate daily backups of critical files to a network-attached storage (NAS) device, with email notifications for success or failure.
          </p>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleProjectClick}
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
          >
            <Github className="w-3 h-3 mr-1" />
            View on GitHub
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;