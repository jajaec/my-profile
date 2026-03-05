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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // 100을 3구간으로 나누어 태양계 궤도에 배치
  // 67~100: 중심 궤도 (Inner)
  // 34~66: 중간 궤도 (Middle)
  // ~33: 외곽 궤도 (Outer)
  const getOrbits = (items) => {
    const inner = [];
    const middle = [];
    const outer = [];

    items.forEach((item) => {
      if (item.level >= 67) inner.push(item);
      else if (item.level >= 34) middle.push(item);
      else outer.push(item);
    });

    return [
      { radius: 60, duration: 20, items: inner },
      { radius: 105, duration: 30, items: middle },
      { radius: 150, duration: 40, items: outer },
    ];
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
        <span className="orbit-description">
          가운데에 가까울수록 숙련도가 높습니다 💫
        </span>
      </motion.h2>

      <motion.div className="tech-orbit-grid" variants={containerVariants}>
        {data.categories?.map((category, idx) => {
          const IconComponent = iconMap[category.icon] || Code2;
          const orbits = getOrbits(category.items || []);

          return (
            <motion.div
              key={idx}
              className="orbit-card"
              variants={itemVariants}
            >
              <h3 className="orbit-category-name">
                {category.name}
              </h3>
              
              <div className="orbit-system">
                {/* 중앙 태양 (카테고리 아이콘) */}
                <div className="orbit-center">
                  <IconComponent size={32} />
                </div>

                {/* 각 궤도와 행성(스킬)들 */}
                {orbits.map((orbit, orbitIdx) => (
                  <div 
                    key={orbitIdx}
                    className="orbit-track"
                    style={{
                      width: orbit.radius * 2,
                      height: orbit.radius * 2,
                      animationDuration: `${orbit.duration}s`,
                    }}
                  >
                    {orbit.items.map((skill, skillIdx) => {
                      const total = orbit.items.length;
                      const angle = (skillIdx / total) * 360;
                      
                      return (
                        <div
                          key={skillIdx}
                          className="planet-pivot"
                          style={{ transform: `rotate(${angle}deg)` }}
                        >
                          <div
                            className="planet-position"
                            style={{ transform: `translateX(${orbit.radius}px)` }}
                          >
                            <div
                              className="planet-counter-spin"
                              style={{ animationDuration: `${orbit.duration}s` }}
                            >
                              <div
                                className="planet-unrotate"
                                style={{ transform: `rotate(-${angle}deg)` }}
                              >
                                <div className="planet-content">
                                  <div className="planet-dot" />
                                  <span className="planet-label" title={`${skill.name} (${skill.level}%)`}>
                                    {skill.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .orbit-description {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-tertiary);
          margin-left: auto;
          background: var(--bg-secondary);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-light);
        }

        .tech-orbit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .orbit-card {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        
        .orbit-card:hover {
          border-color: var(--accent-blue);
        }

        /* Hover 시 애니메이션 멈춤 */
        .orbit-card:hover .orbit-track,
        .orbit-card:hover .planet-counter-spin {
          animation-play-state: paused;
        }

        .orbit-category-name {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 30px;
          z-index: 10;
        }

        .orbit-system {
          position: relative;
          width: 320px;
          height: 320px;
        }

        .orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: var(--bg-tertiary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
          z-index: 1;
        }

        @keyframes orbit-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes counter-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .orbit-track {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation-name: orbit-spin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          z-index: 5;
        }

        .planet-pivot {
          position: absolute;
          top: 50%;
          left: 50%;
        }

        .planet-position {
          position: absolute;
        }

        .planet-counter-spin {
          position: absolute;
          animation-name: counter-spin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .planet-unrotate {
          position: absolute;
        }

        .planet-content {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-primary);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          transition: all 0.2s ease;
          cursor: default;
        }
        
        .planet-content:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent-blue);
          transform: translate(-50%, -50%) scale(1.1);
          z-index: 20;
        }

        .planet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-blue);
          box-shadow: 0 0 8px var(--accent-blue);
        }

        .planet-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .tech-orbit-grid {
            grid-template-columns: 1fr;
          }
          
          .orbit-description {
            display: none;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default TechStackSection;
