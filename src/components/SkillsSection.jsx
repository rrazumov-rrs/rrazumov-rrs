
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const SkillsSection = () => {
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

  const skillsData = {
    "IT Support": {
      skills: ['Troubleshooting', 'Active Directory', 'Hardware Repair', 'Help Desk Ticketing', 'Windows/macOS/Linux'],
      color: 'orange'
    },
    "Cybersecurity": {
      skills: ['Network Security', 'Vulnerability Assessment', 'Firewall Config', 'SIEM Tools', 'Incident Response'],
      color: 'red'
    },
    "Tools & Platforms": {
      skills: ['PowerShell', 'Wireshark', 'pfSense', 'Microsoft 365', 'VMware'],
      color: 'green'
    }
  };

  const colorClasses = {
    orange: {
      bg: 'bg-orange-500/20',
      text: 'text-orange-300',
      border: 'border-orange-500/30'
    },
    red: {
      bg: 'bg-red-500/20',
      text: 'text-red-300',
      border: 'border-red-500/30'
    },
    green: {
      bg: 'bg-green-500/20',
      text: 'text-green-300',
      border: 'border-green-500/30'
    }
  };

  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
          <Award className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Core Competencies</h2>
      </div>

      <div className="space-y-4">
        {Object.entries(skillsData).map(([category, { skills, color }]) => (
          <div key={category}>
            <h3 className={`${colorClasses[color].text} font-semibold mb-3`}>{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className={`px-3 py-1 ${colorClasses[color].bg} ${colorClasses[color].text} rounded-full text-sm border ${colorClasses[color].border}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;