
import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ConnectSection = () => {
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

  const handleLinkClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
          <User className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Connect</h2>
      </div>

      <div className="space-y-3">
        <Button 
          onClick={handleLinkClick}
          variant="outline" 
          className="w-full justify-start border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
        >
          <Linkedin className="w-4 h-4 mr-3" />
          LinkedIn Profile
        </Button>
        
        <Button 
          onClick={handleLinkClick}
          variant="outline" 
          className="w-full justify-start border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white"
        >
          <Github className="w-4 h-4 mr-3" />
          GitHub Profile
        </Button>
      </div>
    </motion.section>
  );
};

export default ConnectSection;