import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Shield, Wrench } from 'lucide-react';
import { itemVariants } from '@/lib/animations';

const Skills = () => {
  return (
    <motion.section variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
          <Wrench className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Technical Skills</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-orange-300 font-semibold mb-3 flex items-center gap-2"><HardDrive className="w-4 h-4"/>IT Support & Networking</h3>
          <div className="flex flex-wrap gap-2">
            {['Troubleshooting', 'Active Directory', 'Windows/Linux OS', 'Ticketing Systems', 'TCP/IP', 'DNS', 'DHCP'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4"/>Cybersecurity</h3>
          <div className="flex flex-wrap gap-2">
            {['Nessus', 'Wireshark', 'Nmap', 'SIEM Concepts', 'Malware Analysis', 'pfSense', 'IAM'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-green-300 font-semibold mb-3 flex items-center gap-2"><Wrench className="w-4 h-4"/>Tools & Scripting</h3>
          <div className="flex flex-wrap gap-2">
            {['PowerShell', 'Bash', 'VMware', 'Git', 'Office 365 Admin'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;