import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Briefcase } from 'lucide-react';

const ExperienceSection = ({ data }) => {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? -1 : idx);
  };

  return (
    <motion.section
      className="section experience-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">💼</span>
        {data.title}
      </motion.h2>

      <div className="timeline">
        {data.items?.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`timeline-item ${expandedIdx === idx ? 'expanded' : ''}`}
            variants={itemVariants}
          >
            <div className="timeline-marker">
              <div className="marker-dot" />
              {idx < data.items.length - 1 && <div className="marker-line" />}
            </div>

            <div className="timeline-content">
              <button
                className="exp-header"
                onClick={() => toggleExpand(idx)}
                aria-expanded={expandedIdx === idx}
              >
                <div className="exp-header-main">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="exp-role">{exp.role}</span>
                </div>
                <div className="exp-header-meta">
                  <span className="exp-period">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`expand-icon ${expandedIdx === idx ? 'rotated' : ''}`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {expandedIdx === idx && (
                  <motion.div
                    className="exp-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="exp-description">{exp.description}</p>

                    <div className="exp-tasks">
                      <h4 className="tasks-title">주요 업무</h4>
                      <ul className="tasks-list">
                        {exp.tasks?.map((task, taskIdx) => (
                          <li key={taskIdx} className="task-item">
                            <span className="task-bullet">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.techStack && (
                      <div className="exp-tech">
                        <h4 className="tech-title">기술 스택</h4>
                        <div className="tech-tags">
                          {exp.techStack.map((tech, techIdx) => (
                            <span key={techIdx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .experience-section {
          max-width: 900px;
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

        .timeline {
          position: relative;
          padding-left: 8px;
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          margin-bottom: 8px;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 16px;
          flex-shrink: 0;
        }

        .marker-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-blue);
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 0 2px var(--accent-blue);
          flex-shrink: 0;
          margin-top: 20px;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: var(--border-color);
          margin-top: 8px;
        }

        .timeline-content {
          flex: 1;
          background: var(--bg-secondary);
          border-radius: 10px;
          border: 1px solid var(--border-light);
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .timeline-item.expanded .timeline-content {
          box-shadow: var(--shadow-sm);
        }

        .exp-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          transition: background 0.15s ease;
        }

        .exp-header:hover {
          background: var(--bg-hover);
        }

        .exp-header-main {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .exp-role {
          font-size: 0.9rem;
          color: var(--accent-blue);
          font-weight: 500;
        }

        .exp-header-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .exp-period {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .expand-icon {
          color: var(--text-tertiary);
          transition: transform 0.3s ease;
        }

        .expand-icon.rotated {
          transform: rotate(180deg);
        }

        .exp-details {
          padding: 0 20px 20px;
          overflow: hidden;
        }

        .exp-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          padding-top: 4px;
          border-top: 1px solid var(--border-light);
          padding-top: 16px;
        }

        .tasks-title,
        .tech-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tasks-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
        }

        .task-item {
          display: flex;
          gap: 8px;
          padding: 4px 0;
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .task-bullet {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .exp-tech {
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            gap: 8px;
          }

          .exp-header-meta {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ExperienceSection;
