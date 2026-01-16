import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ExternalLink, Github, ChevronRight, ChevronDown, X, Building2 } from 'lucide-react';
import BlockRenderer from '../BlockRenderer';

const ProjectsSection = ({ data, onMediaClick }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const projectRefs = useRef([]);
  const detailRef = useRef(null);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleProjectClick = (idx) => {
    const isOpening = selectedProject !== idx;
    setSelectedProject(isOpening ? idx : null);
    
    if (isOpening) {
      if (isMobile && projectRefs.current[idx]) {
        // 모바일: 해당 카드를 화면 상단으로 스크롤
        setTimeout(() => {
          projectRefs.current[idx].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      } else if (!isMobile && detailRef.current) {
        // 데스크톱: 상세 정보 박스가 보이도록 스크롤
        setTimeout(() => {
          detailRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
          });
        }, 100);
      }
    }
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  // 모바일용 인라인 상세정보 컴포넌트
  const MobileProjectDetail = ({ project, onClose }) => (
    <motion.div
      className="mobile-project-detail"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mobile-detail-content">
        <div className="detail-header">
          <h3 className="detail-title">{project.title}</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {project.links && (
          <div className="detail-links">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        )}

        <div className="detail-tech-stack">
          {project.techStack?.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="detail-blocks">
          {project.blocks?.map((block, idx) => (
            <BlockRenderer
              key={idx}
              block={block}
              onMediaClick={onMediaClick}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="section projects-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🚀</span>
        {data.title}
      </motion.h2>

      <div className={`projects-layout ${isMobile ? 'mobile' : ''}`}>
        {/* Project List */}
        <motion.div className="projects-list" variants={containerVariants}>
          {data.items?.map((project, idx) => (
            <div 
              key={idx} 
              className="project-item-wrapper"
              ref={el => projectRefs.current[idx] = el}
            >
              <motion.div
                className={`project-card ${selectedProject === idx ? 'selected' : ''}`}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                onClick={() => handleProjectClick(idx)}
              >
                <div className="project-card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    {project.company && (
                      <span className="meta-item company-tag">
                        <Building2 size={14} />
                        {project.company}
                      </span>
                    )}
                    <span className="meta-item">
                      <Calendar size={14} />
                      {project.period}
                    </span>
                    <span className="meta-item">
                      <User size={14} />
                      {project.role}
                    </span>
                  </div>

                  <div className="project-tech-preview">
                    {project.techStack?.slice(0, 4).map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 4 && (
                      <span className="tech-badge more">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                {isMobile ? (
                  <ChevronDown 
                    size={18} 
                    className={`chevron-icon ${selectedProject === idx ? 'rotated' : ''}`}
                  />
                ) : (
                  <ChevronRight 
                    size={18} 
                    className={`chevron-icon ${selectedProject === idx ? 'rotated' : ''}`}
                  />
                )}
              </motion.div>

              {/* 모바일: 카드 바로 아래에 상세정보 표시 */}
              {isMobile && (
                <AnimatePresence>
                  {selectedProject === idx && (
                    <MobileProjectDetail 
                      project={project} 
                      onClose={closeDetail}
                    />
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </motion.div>

        {/* 데스크톱: 오른쪽에 상세정보 표시 */}
        {!isMobile && (
          <>
            <AnimatePresence mode="wait">
              {selectedProject !== null && (
                <motion.div
                  key={selectedProject}
                  className="project-detail"
                  ref={detailRef}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="detail-header">
                    <h3 className="detail-title">
                      {data.items[selectedProject].title}
                    </h3>
                    
                    {data.items[selectedProject].links && (
                      <div className="detail-links">
                        {data.items[selectedProject].links.github && (
                          <a
                            href={data.items[selectedProject].links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="detail-link"
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                        )}
                        {data.items[selectedProject].links.demo && (
                          <a
                            href={data.items[selectedProject].links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="detail-link"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="detail-tech-stack">
                    {data.items[selectedProject].techStack?.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="detail-blocks">
                    {data.items[selectedProject].blocks?.map((block, idx) => (
                      <BlockRenderer
                        key={idx}
                        block={block}
                        onMediaClick={onMediaClick}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Empty State */}
            {selectedProject === null && (
              <div className="project-empty">
                <div className="empty-icon">📂</div>
                <p>프로젝트를 선택하면 상세 내용을 볼 수 있습니다.</p>
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        .projects-section {
          max-width: 1200px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .projects-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 24px;
          min-height: 500px;
          align-items: start;
        }

        .projects-layout.mobile {
          display: block;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-item-wrapper {
          display: flex;
          flex-direction: column;
        }

        .project-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .project-card:hover {
          background: var(--bg-hover);
          border-color: var(--border-color);
        }

        .project-card.selected {
          background: var(--bg-tertiary);
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 1px var(--accent-blue);
        }

        .project-card-content {
          flex: 1;
          min-width: 0;
        }

        .project-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .project-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin-bottom: 10px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .meta-item.company-tag {
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .project-tech-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-badge {
          padding: 2px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .tech-badge.more {
          background: var(--accent-blue);
          color: white;
        }

        .chevron-icon {
          color: var(--text-tertiary);
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .chevron-icon.rotated {
          transform: rotate(180deg);
          color: var(--accent-blue);
        }

        /* 데스크톱 상세정보 */
        .project-detail {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 24px;
          overflow-y: auto;
          max-height: calc(100vh - 120px);
          position: sticky;
          top: 40px;
          align-self: flex-start;
        }

        /* 모바일 인라인 상세정보 */
        .mobile-project-detail {
          overflow: hidden;
          margin-top: 12px;
          margin-bottom: 8px;
        }

        .mobile-detail-content {
          padding: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-left: 4px solid var(--accent-blue);
          border-radius: 10px;
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .detail-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .close-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-light);
          border-radius: 6px;
          padding: 6px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.15s ease;
        }

        .close-btn:hover {
          background: var(--accent-red);
          color: white;
          border-color: var(--accent-red);
        }

        .detail-links {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .detail-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--bg-tertiary);
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .detail-link:hover {
          background: var(--accent-blue);
          color: white;
        }

        .detail-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .tech-tag {
          padding: 4px 12px;
          background: var(--bg-tertiary);
          border-radius: 5px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .detail-blocks {
          margin-top: 12px;
        }

        .project-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px dashed var(--border-color);
          border-radius: 10px;
          padding: 48px;
          text-align: center;
          color: var(--text-tertiary);
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        @media (max-width: 1024px) {
          .project-card.selected {
            border-radius: 10px;
            box-shadow: 0 0 0 2px var(--accent-blue);
          }

          .chevron-icon.rotated {
            transform: rotate(180deg);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ProjectsSection;
