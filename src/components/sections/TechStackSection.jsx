import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
  Cog,
  Terminal,
  Globe,
  Smartphone,
  Cpu,
  Monitor,
  Layers,
  Box,
  Settings,
  BarChart3,
  TrendingUp,
  Briefcase,
  Users,
  FileText,
  Target,
  Lightbulb,
  Rocket,
  GitBranch,
} from 'lucide-react';
import { getSkillColor } from '../../utils/helpers';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
  Cog,
  Terminal,
  Globe,
  Smartphone,
  Cpu,
  Monitor,
  Layers,
  Box,
  Settings,
  BarChart3,
  TrendingUp,
  Briefcase,
  Users,
  FileText,
  Target,
  Lightbulb,
  Rocket,
  GitBranch,
};

const TechStackSection = ({ data }) => {
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
      className="section tech-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">⚡</span>
        {data.title}
      </motion.h2>

      <motion.div className="tech-grid" variants={containerVariants}>
        {data.categories?.map((category, idx) => {
          const IconComponent = iconMap[category.icon] || Code2;
          
          return (
            <motion.div
              key={idx}
              className="tech-card"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div className="tech-card-header">
                <IconComponent size={20} className="category-icon" />
                <h3 className="category-name">{category.name}</h3>
              </div>
              
              <div className="skills-list">
                {category.items?.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.1 }}
                        style={{ backgroundColor: getSkillColor(skill.level) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <style>{`
        .tech-section {
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

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .tech-card {
          background: var(--bg-secondary);
          border-radius: 10px;
          padding: 20px;
          border: 1px solid var(--border-light);
          transition: all 0.2s ease;
        }

        .tech-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .category-icon {
          color: var(--accent-blue);
        }

        .category-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .skill-level {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .skill-bar-bg {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default TechStackSection;
