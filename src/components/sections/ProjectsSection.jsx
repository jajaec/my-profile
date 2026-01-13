import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ExternalLink, Github, ChevronRight } from 'lucide-react';
import BlockRenderer from '../BlockRenderer';

const ProjectsSection = ({ data, onMediaClick }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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

      <div className="projects-layout">
        {/* Project List */}
        <motion.div className="projects-list" variants={containerVariants}>
          {data.items?.map((project, idx) => (
            <motion.div
              key={idx}
              className={`project-card ${selectedProject === idx ? 'selected' : ''}`}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
            >
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
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
              
              <ChevronRight 
                size={18} 
                className={`chevron-icon ${selectedProject === idx ? 'rotated' : ''}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail */}
        <AnimatePresence mode="wait">
          {selectedProject !== null && (
            <motion.div
              key={selectedProject}
              className="project-detail"
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
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
          gap: 12px;
          margin-bottom: 10px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--text-tertiary);
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
          transform: rotate(90deg);
          color: var(--accent-blue);
        }

        .project-detail {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 24px;
          overflow-y: auto;
          max-height: 600px;
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .detail-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .detail-links {
          display: flex;
          gap: 8px;
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
          margin-bottom: 20px;
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
          margin-top: 16px;
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
          .projects-layout {
            grid-template-columns: 1fr;
          }

          .project-detail {
            max-height: none;
          }

          .project-empty {
            display: none;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ProjectsSection;
