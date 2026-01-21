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
import ResourcesSection from './components/sections/ResourcesSection';
import AnalyticsSection from './components/sections/AnalyticsSection';

import { useAllSheetData } from './hooks/useSheetData';
import { logPageView, logInitialVisit } from './utils/logger';

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
  
  // Google Sheets에서 데이터 가져오기
  const { data, loading, error } = useAllSheetData();

  useEffect(() => {
    const tool = getToolFromUrl();
    if (tool) {
      setPopupTool(tool);
    } else {
      // 초기 방문 로그 기록
      logInitialVisit();
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

  // 로딩 상태
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>데이터를 불러오는 중...</p>
        <style>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: var(--bg-primary);
            color: var(--text-primary);
            gap: 16px;
          }
          .loading-spinner {
            width: 48px;
            height: 48px;
            border: 4px solid var(--border-color);
            border-top-color: var(--accent-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // 에러 상태
  if (error || !data) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>데이터를 불러올 수 없습니다</h2>
        <p>Google Sheets 연결을 확인해 주세요.</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          다시 시도
        </button>
        <style>{`
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: var(--bg-primary);
            color: var(--text-primary);
            gap: 16px;
            text-align: center;
            padding: 24px;
          }
          .error-icon {
            font-size: 48px;
          }
          .error-container h2 {
            font-size: 1.5rem;
            margin: 0;
          }
          .error-container p {
            color: var(--text-secondary);
            margin: 0;
          }
          .retry-button {
            margin-top: 16px;
            padding: 12px 24px;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: opacity 0.2s;
          }
          .retry-button:hover {
            opacity: 0.9;
          }
        `}</style>
      </div>
    );
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
        return <WebAppsSection data={data.liveDemo} />;
      case 'education':
        return <EducationSection data={data.education} />;
      case 'certifications':
        return <CertificationsSection data={data.certifications} />;
      case 'resources':
        return <ResourcesSection data={data.resources} />;
      case 'bookmarks':
        return <BookmarksSection data={data.bookmarks} />;
      case 'analytics':
        return <AnalyticsSection />;
      default:
        return <AboutSection data={data.about} {...sectionProps} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        profile={data.profile}
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          logPageView(section); // 섹션 변경 로그 기록
        }}
      />

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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

