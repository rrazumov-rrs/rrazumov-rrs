
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PageHeader = () => {
  const handleDownloadCV = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

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

  return (
    <motion.header variants={itemVariants} className="text-center mb-16">
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-lg opacity-50"></div>
        <img 
          className="relative w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl object-cover"
          alt="Professional headshot of Jane Smith" src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
      </div>
      
      <motion.h1 
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Jane Smith
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-blue-200 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        IT Support Enthusiast &amp; Cybersecurity Specialist
      </motion.p>
      
      <motion.p 
        className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        A motivated and security-conscious IT professional eager to apply troubleshooting skills and a passion for cybersecurity to solve technical challenges and protect digital assets.
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Button 
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
        
        <Button 
          onClick={handleContactClick}
          variant="outline"
          className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Me
        </Button>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-teal-400" />
          jane.smith.sec@email.com
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-teal-400" />
          +1 (555) 987-6543
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-teal-400" />
          New York, NY
        </div>
      </motion.div>
    </motion.header>
  );
};

export default PageHeader;