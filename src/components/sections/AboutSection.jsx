import { motion } from 'framer-motion';
import BlockRenderer from '../BlockRenderer';

const AboutSection = ({ data, onMediaClick }) => {
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
      className="section about-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">👋</span>
        {data.title}
      </motion.h2>

      <motion.div className="about-content" variants={itemVariants}>
        {data.blocks?.map((block, idx) => (
          <BlockRenderer
            key={idx}
            block={block}
            onMediaClick={onMediaClick}
          />
        ))}
      </motion.div>

      <style>{`
        .about-section {
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

        .about-content {
          padding: 8px 0;
        }
      `}</style>
    </motion.section>
  );
};

export default AboutSection;
