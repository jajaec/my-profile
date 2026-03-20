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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // 숙련도 구분 함수
  const getProficiencyLabel = (level) => {
    if (level >= 67) return '상';
    if (level >= 34) return '중';
    return '하';
  };

  // 은은하고 차분한 파스텔 톤 컬러 팔레트 (너무 튀지 않게)
  const categoryColors = [
    '#6b8cae', // Muted steel blue
    '#6bb99b', // Muted sage green
    '#9d88b5', // Muted lavender
    '#c8925e', // Muted ochre
    '#c9768a', // Muted rose
    '#6ba8a0', // Muted teal
  ];

  return (
    <motion.section
      className="section tech-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="tech-grid" variants={containerVariants}>
        {data.categories?.map((category, idx) => {
          const IconComponent = iconMap[category.icon] || Code2;
          const color = categoryColors[idx % categoryColors.length];

          return (
            <motion.div
              key={idx}
              className="tech-card"
              variants={itemVariants}
            >
              <div className="tech-card-header">
                <div 
                  className="tech-card-iconbox"
                  style={{ background: `${color}15`, color: color }}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className="tech-card-title">{category.name}</h3>
              </div>
              
              <div className="tech-card-divider" />

              <div className="skills-list">
                {category.items?.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-label" style={{ color: color }}>
                        {getProficiencyLabel(skill.level)}
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIdx * 0.1 + 0.3 }}
                        style={{ backgroundColor: color, opacity: 0.6 }}
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

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .tech-card {
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-light);
          padding: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .tech-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .tech-card-iconbox {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
          white-space: pre-line;
        }

        .tech-card-divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 24px;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .skill-label {
          font-size: 0.9em;
          font-weight: 700;
        }

        .skill-bar-track {
          height: 4px;
          background: var(--border-color); /* Darker track for contrast */
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 2px;
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
