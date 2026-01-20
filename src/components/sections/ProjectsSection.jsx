import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ExternalLink, Github, ChevronDown, Building2, FolderKanban } from 'lucide-react';
import BlockRenderer from '../BlockRenderer';

const ProjectsSection = ({ data, onMediaClick }) => {
  const [expandedIdx, setExpandedIdx] = useState(0);

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

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? -1 : idx);
  };

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

      <div className="projects-list">
        {data.items?.map((project, idx) => (
          <motion.div
            key={idx}
            className={`project-card ${expandedIdx === idx ? 'expanded' : ''}`}
            variants={itemVariants}
          >
            <div className="project-header" onClick={() => toggleExpand(idx)}>
              <div className="header-main">
                <div className="title-row">
                  <div className="title-group">
                    <FolderKanban size={20} className="project-icon" />
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  
                  <div className="header-actions">
                    {project.links && (
                      <div className="quick-links" onClick={(e) => e.stopPropagation()}>
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn github"
                            title="View Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn demo"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    )}
                    <button 
                      className={`expand-btn ${expandedIdx === idx ? 'rotated' : ''}`}
                      aria-label="Toggle details"
                    >
                      <ChevronDown size={20} />
                    </button>
                  </div>
                </div>

                <div className="meta-row">
                  <div className="meta-info">
                    {project.company && (
                      <span className="meta-badge company">
                        <Building2 size={12} />
                        {project.company}
                      </span>
                    )}
                    <span className="meta-text role">
                      <User size={12} />
                      {project.role}
                    </span>
                    <span className="meta-divider">|</span>
                    <span className="meta-text date">
                      <Calendar size={12} />
                      {project.period}
                    </span>
                  </div>
                </div>

                {project.techStack && (
                  <div className="header-tech">
                    {project.techStack.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <AnimatePresence>
              {expandedIdx === idx && (
                <motion.div
                  className="project-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="body-inner">
                    <div className="description-box">
                      <h4 className="section-label">Project Overview</h4>
                      <p className="project-desc">{project.description}</p>
                    </div>

                    <div className="content-blocks">
                      {project.blocks?.length > 0 && (
                        <h4 className="section-label">Gallery & Details</h4>
                      )}
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
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <style>{`
        .projects-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .project-card:hover {
          border-color: var(--border-color);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .project-card.expanded {
          border-color: var(--accent-blue);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
        }

        .project-header {
          padding: 16px 20px;
          cursor: pointer;
          background: transparent;
          transition: background 0.15s ease;
        }

        .project-header:hover {
          background: var(--bg-hover);
        }

        .header-main {
          display: flex;
          flex-direction: column;
          gap: 8px; /* Reduced from 12px */
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .quick-links {
          display: flex;
          gap: 6px;
        }

        .icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .icon-btn:hover {
          background: var(--accent-blue);
          color: white;
          border-color: var(--accent-blue);
          transform: translateY(-1px);
        }

        .expand-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          color: var(--text-tertiary);
          cursor: pointer;
          transition: transform 0.3s ease, color 0.2s ease;
        }

        .expand-btn.rotated {
          transform: rotate(180deg);
          color: var(--accent-blue);
        }

        .meta-row {
          display: flex;
          align-items: center;
        }

        .meta-info {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 0.75rem;
        }

        .meta-badge.company {
          background: rgba(139, 92, 246, 0.1);
          color: #a78bfa;
        }

        .meta-text {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .meta-text.role {
          font-weight: 500;
          color: var(--text-primary);
        }

        .meta-divider {
          color: var(--border-color);
          font-size: 0.8rem;
        }

        .header-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 2px;
        }

        .tech-chip {
          padding: 2px 8px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          border: 1px solid var(--border-light);
          font-weight: 500;
        }

        .project-body {
          overflow: hidden;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-light);
        }

        .body-inner {
          padding: 20px;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .description-box {
          margin-bottom: 20px;
        }

        .project-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .content-blocks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          align-items: start;
        }

        /* 기본적으로 모든 블록은 전체 너비를 차지 */
        .content-blocks .block-wrapper {
          grid-column: 1 / -1;
          margin-bottom: 0 !important;
        }

        /* 이미지와 비디오만 2분할 (PC) */
        .content-blocks .block-wrapper.type-image,
        .content-blocks .block-wrapper.type-video {
          grid-column: span 1;
        }

        @media (max-width: 768px) {
          .content-blocks {
            grid-template-columns: 1fr;
          }
          
          .content-blocks .block-wrapper.type-image,
          .content-blocks .block-wrapper.type-video {
            grid-column: 1 / -1;
          }

          .title-row {
            flex-direction: column;
            gap: 12px;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
            padding-left: 32px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ProjectsSection;
