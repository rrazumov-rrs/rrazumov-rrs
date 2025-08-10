import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

const Education = () => {
  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Education & Certifications</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-indigo-300">B.S. in Information Technology</h3>
          <p className="text-purple-300 font-medium">State University</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            2019 - 2023
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-indigo-300">CompTIA Security+</h3>
          <p className="text-purple-300 font-medium">CompTIA</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            2024
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;