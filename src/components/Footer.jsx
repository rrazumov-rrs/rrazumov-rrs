import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '@/lib/animations';

const Footer = () => {
  return (
    <motion.footer variants={itemVariants} className="text-center mt-16 py-8 border-t border-white/10">
      <p className="text-gray-400">
        © 2024 John Doe. Eager to contribute in the IT field.
      </p>
    </motion.footer>
  );
};

export default Footer;