import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = ({ data }) => {
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
      className="section education-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🎓</span>
        {data.title}
      </motion.h2>

      <motion.div className="education-list" variants={containerVariants}>
        {data.items?.map((edu, idx) => (
          <motion.div
            key={idx}
            className="education-card"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
          >
            <div className="edu-icon-wrapper">
              <GraduationCap size={24} />
            </div>

            <div className="edu-content">
              <h3 className="school-name">{edu.school}</h3>
              <p className="edu-major">
                {edu.major} · {edu.degree}
              </p>
              <span className="edu-period">
                <Calendar size={14} />
                {edu.period}
              </span>
              {edu.description && (
                <p className="edu-description">{edu.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .education-section {
          max-width: 800px;
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

        .education-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .education-card {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .edu-icon-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          border-radius: 12px;
          color: white;
          flex-shrink: 0;
        }

        .edu-content {
          flex: 1;
        }

        .school-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .edu-major {
          font-size: 0.95rem;
          color: var(--accent-blue);
          font-weight: 500;
          margin-bottom: 8px;
        }

        .edu-period {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
        }

        .edu-description {
          margin-top: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .education-card {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default EducationSection;
