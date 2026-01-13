import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import ExpansionModal from './components/ExpansionModal';

import AboutSection from './components/sections/AboutSection';
import TechStackSection from './components/sections/TechStackSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import WebAppsSection from './components/sections/WebAppsSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';

import data from './data.json';

import './App.css';

function AppContent() {
  const [activeSection, setActiveSection] = useState('about');
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMediaClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  const renderSection = () => {
    const sectionProps = {
      onMediaClick: handleMediaClick,
    };

    switch (activeSection) {
      case 'about':
        return <AboutSection data={data.about} {...sectionProps} />;
      case 'techStack':
        return <TechStackSection data={data.techStack} />;
      case 'experience':
        return <ExperienceSection data={data.experience} />;
      case 'projects':
        return <ProjectsSection data={data.projects} {...sectionProps} />;
      case 'webApps':
        return <WebAppsSection data={data.webApps} />;
      case 'education':
        return <EducationSection data={data.education} />;
      case 'certifications':
        return <CertificationsSection data={data.certifications} />;
      default:
        return <AboutSection data={data.about} {...sectionProps} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        profile={data.profile}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="section-wrapper"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <ExpansionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
