import { useState, useEffect } from 'react';
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
import MallReportSection from './components/sections/MallReportSection';
import AddressMapSection from './components/sections/AddressMapSection';
import BookmarksSection from './components/sections/BookmarksSection';

import data from './data.json';
import bookmarksData from './bookmarks.json';

import './App.css';

// URL 파라미터에서 tool 값 가져오기
function getToolFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('tool');
}

// 팝업 모드 컴포넌트 (도구만 표시)
function ToolPopup({ toolId }) {
  const toolTitles = {
    mallReport: '자사몰 매출 확인',
    addressMap: '주소 좌표 변환',
  };

  return (
    <div className="tool-popup-container">
      <header className="tool-popup-header">
        <h1>{toolTitles[toolId] || '도구'}</h1>
      </header>
      <main className="tool-popup-content">
        {toolId === 'mallReport' && <MallReportSection />}
        {toolId === 'addressMap' && <AddressMapSection />}
      </main>
      <style>{`
        .tool-popup-container {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }
        .tool-popup-header {
          padding: 16px 24px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        .tool-popup-header h1 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }
        .tool-popup-content {
          padding: 24px;
        }
        .tool-popup-content .section {
          padding: 0;
        }
      `}</style>
    </div>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('about');
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupTool, setPopupTool] = useState(null);

  useEffect(() => {
    const tool = getToolFromUrl();
    if (tool) {
      setPopupTool(tool);
    }
  }, []);

  const handleMediaClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  // 팝업 모드인 경우 도구만 표시
  if (popupTool) {
    return <ToolPopup toolId={popupTool} />;
  }

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
      case 'bookmarks':
        return <BookmarksSection data={bookmarksData} />;
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

