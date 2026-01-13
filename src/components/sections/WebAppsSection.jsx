import { motion } from 'framer-motion';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

const WebAppsSection = ({ data }) => {
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

  const handleOpenApp = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      className="section webapps-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🌐</span>
        {data.title}
      </motion.h2>

      <motion.p className="section-description" variants={itemVariants}>
        {data.description || "직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다."}
      </motion.p>

      <motion.div className="webapps-grid" variants={containerVariants}>
        {data.items?.map((app, idx) => (
          <motion.div
            key={idx}
            className="webapp-card"
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpenApp(app.url)}
          >
            {/* Card Header with Thumbnail */}
            <div className="webapp-thumbnail">
              {app.thumbnail ? (
                <img src={app.thumbnail} alt={app.title} className="thumbnail-img" />
              ) : (
                <div className="thumbnail-placeholder">
                  <Globe size={48} />
                </div>
              )}
              <div className="webapp-overlay">
                <ExternalLink size={24} />
                <span>열기</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="webapp-content">
              <div className="webapp-header">
                <h3 className="webapp-title">{app.title}</h3>
                {app.isNew && (
                  <span className="new-badge">
                    <Sparkles size={12} />
                    NEW
                  </span>
                )}
              </div>
              
              <p className="webapp-description">{app.description}</p>

              {app.techStack && (
                <div className="webapp-tech">
                  {app.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {app.platform && (
                <div className="webapp-platform">
                  <span className="platform-label">Platform:</span>
                  <span className="platform-value">{app.platform}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .webapps-section {
          max-width: 1200px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .webapps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .webapp-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .webapp-card:hover {
          border-color: var(--accent-blue);
        }

        .webapp-card:hover .webapp-overlay {
          opacity: 1;
        }

        .webapp-thumbnail {
          position: relative;
          width: 100%;
          height: 160px;
          background: var(--bg-tertiary);
          overflow: hidden;
        }

        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .webapp-card:hover .thumbnail-img {
          transform: scale(1.05);
        }

        .thumbnail-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
          color: white;
          opacity: 0.8;
        }

        .webapp-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .webapp-content {
          padding: 16px;
        }

        .webapp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .webapp-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .new-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          border-radius: 4px;
        }

        .webapp-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .webapp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .tech-tag {
          padding: 3px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .webapp-platform {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
          font-size: 0.8rem;
        }

        .platform-label {
          color: var(--text-tertiary);
        }

        .platform-value {
          color: var(--accent-blue);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .webapps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default WebAppsSection;
