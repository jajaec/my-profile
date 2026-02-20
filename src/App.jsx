import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  User, Code2, Briefcase, FolderGit2,
  GraduationCap, Award, Library, Rocket,
} from 'lucide-react';

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

// 스크롤 모드에서 렌더링할 섹션 순서 (Analytics 제외)
const scrollSections = [
  'about',
  'techStack',
  'experience',
  'projects',
  'education',
  'certifications',
  'resources',
  'webApps',
];

// 별도 페이지로 렌더링할 섹션
const pageSections = ['analytics', 'bookmarks'];

// 섹션 메타 정보 (헤더 타이틀 + 아이콘)
const sectionMeta = {
  about: { label: 'About', icon: User },
  techStack: { label: 'Tech Stack', icon: Code2 },
  experience: { label: 'Experience', icon: Briefcase },
  projects: { label: 'Projects', icon: FolderGit2 },
  education: { label: 'Education', icon: GraduationCap },
  certifications: { label: 'Certifications', icon: Award },
  resources: { label: 'Resources', icon: Library },
  webApps: { label: 'Live Demo', icon: Rocket },
};

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
  const [isPageMode, setIsPageMode] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupTool, setPopupTool] = useState(null);
  const isScrollingRef = useRef(false);
  const mainContentRef = useRef(null);
  
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

  // IntersectionObserver로 현재 보이는 섹션 감지
  useEffect(() => {
    if (isPageMode || loading || error || !data) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace('section-', '');
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    // 각 섹션 요소를 관찰
    scrollSections.forEach((id) => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isPageMode, loading, error, data]);

  const handleSectionChange = useCallback((section) => {
    logPageView(section);

    if (pageSections.includes(section)) {
      setIsPageMode(true);
      setActiveSection(section);
      return;
    }

    // 페이지 모드에서 스크롤 모드로 복귀
    if (isPageMode) {
      setIsPageMode(false);
      setActiveSection(section);
      // 모드 전환 후 스크롤은 다음 렌더 사이클에서 실행
      setTimeout(() => {
        const el = document.getElementById(`section-${section}`);
        if (el) {
          isScrollingRef.current = true;
          el.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => { isScrollingRef.current = false; }, 1000);
        }
      }, 100);
      return;
    }

    // 스크롤 모드에서 메뉴 클릭 → 스크롤 이동
    setActiveSection(section);
    const el = document.getElementById(`section-${section}`);
    if (el) {
      isScrollingRef.current = true;
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => { isScrollingRef.current = false; }, 1000);
    }
  }, [isPageMode]);

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

  const sectionProps = {
    onMediaClick: handleMediaClick,
  };

  return (
    <div className="app-container">
      <Sidebar
        profile={data.profile}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="main-content" ref={mainContentRef}>
        {isPageMode ? (
          <div className="section-wrapper">
            {activeSection === 'analytics' && <AnalyticsSection />}
            {activeSection === 'bookmarks' && <BookmarksSection data={data.bookmarks} />}
          </div>
        ) : (
          <div className="scroll-content">
            {scrollSections.map((sectionId) => {
              const meta = sectionMeta[sectionId];
              const Icon = meta.icon;
              return (
                <div key={sectionId} id={`section-${sectionId}`} className="scroll-section">
                  <div className="scroll-section-header">
                    <Icon size={20} />
                    <span>{meta.label}</span>
                  </div>
                  {sectionId === 'about' && <AboutSection data={data.about} {...sectionProps} />}
                  {sectionId === 'techStack' && <TechStackSection data={data.techStack} />}
                  {sectionId === 'experience' && <ExperienceSection data={data.experience} />}
                  {sectionId === 'projects' && <ProjectsSection data={data.projects} {...sectionProps} />}
                  {sectionId === 'education' && <EducationSection data={data.education} />}
                  {sectionId === 'certifications' && <CertificationsSection data={data.certifications} />}
                  {sectionId === 'resources' && <ResourcesSection data={data.resources} />}
                  {sectionId === 'webApps' && <WebAppsSection data={data.liveDemo} />}
                </div>
              );
            })}

          </div>
        )}
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
