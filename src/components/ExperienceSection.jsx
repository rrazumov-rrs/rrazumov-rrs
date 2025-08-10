
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
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
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Relevant Experience</h2>
      </div>

      <div className="space-y-6">
        <div className="relative pl-6 border-l-2 border-blue-400/30">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-300">IT Support Intern</h3>
            <p className="text-teal-300 font-medium">Innovatech Ltd.</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              Summer 2023
            </div>
            <p className="text-gray-300 leading-relaxed">
              Provided Tier 1 technical support to 150+ employees, resolving hardware and software issues. Assisted with user account management in Active Directory and configured new workstations.
            </p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-blue-400/30">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
          <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-300">Volunteer Tech Assistant</h3>
            <p className="text-teal-300 font-medium">Community Center</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              2022 - 2023
            </div>
            <p className="text-gray-300 leading-relaxed">
              Helped set up and maintain the computer lab, ensuring network connectivity and security. Taught basic computer literacy and online safety practices to community members.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;