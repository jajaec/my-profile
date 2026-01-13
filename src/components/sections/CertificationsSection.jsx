import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const CertificationsSection = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="section certifications-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🏆</span>
        {data.title}
      </motion.h2>

      <motion.div className="certifications-grid" variants={containerVariants}>
        {data.items?.map((cert, idx) => (
          <motion.div
            key={idx}
            className="cert-card"
            variants={itemVariants}
            whileHover={{ 
              y: -4, 
              boxShadow: 'var(--shadow-md)',
              borderColor: 'var(--accent-blue)'
            }}
          >
            <div className="cert-icon">
              {cert.icon || <Award size={20} />}
            </div>
            
            <div className="cert-content">
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">
                <Calendar size={12} />
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .certifications-section {
          max-width: 1000px;
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

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .cert-card {
          display: flex;
          gap: 14px;
          padding: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .cert-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-yellow), var(--accent-orange));
          border-radius: 10px;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .cert-content {
          flex: 1;
          min-width: 0;
        }

        .cert-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-issuer {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .cert-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-tertiary);
          padding: 3px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default CertificationsSection;
