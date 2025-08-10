
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import PageHeader from '@/components/PageHeader';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ConnectSection from '@/components/ConnectSection';
import PageFooter from '@/components/PageFooter';
import { motion } from 'framer-motion';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Jane Smith - IT Support &amp; Cybersecurity Specialist</title>
        <meta name="description" content="Resume for Jane Smith, an enthusiastic IT Support professional with a specialization in Cybersecurity, skilled in troubleshooting, network security, and user support." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-6xl mx-auto px-4 py-8"
        >
          <PageHeader />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ExperienceSection />
              <ProjectsSection />
            </div>
            <div className="space-y-8">
              <SkillsSection />
              <EducationSection />
              <ConnectSection />
            </div>
          </div>
          
          <PageFooter />
        </motion.div>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;