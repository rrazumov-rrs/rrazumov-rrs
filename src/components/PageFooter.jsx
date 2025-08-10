
import React from 'react';
import { motion } from 'framer-motion';

const PageFooter = () => {
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
    <motion.footer variants={itemVariants} className="text-center mt-16 py-8 border-t border-white/10">
      <p className="text-gray-400">
        © 2024 Jane Smith. Built with React &amp; Tailwind CSS
      </p>
    </motion.footer>
  );
};

export default PageFooter;