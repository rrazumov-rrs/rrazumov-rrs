import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

const Experience = () => {
  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Relevant Experience</h2>
      </div>

      <div className="space-y-6">
        <div className="relative pl-6 border-l-2 border-purple-400/30">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
          <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-300">IT Support Intern</h3>
            <p className="text-blue-300 font-medium">Innovatech Ltd.</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              Summer 2023
            </div>
            <p className="text-gray-300 leading-relaxed">
              Provided technical assistance and troubleshooting for hardware and software issues. Assisted in network configuration and user account management in an Active Directory environment.
            </p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-purple-400/30">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-300">Help Desk Volunteer</h3>
            <p className="text-blue-300 font-medium">Community Tech Center</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              2022 - 2023
            </div>
            <p className="text-gray-300 leading-relaxed">
              Assisted community members with technical problems, including malware removal, software installation, and basic networking. Developed strong customer service and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;