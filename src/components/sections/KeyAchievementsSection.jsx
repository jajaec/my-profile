import { motion } from 'framer-motion';
import { Target, TrendingUp, Anchor, Users } from 'lucide-react';

const KeyAchievementsSection = ({ data }) => {
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

  // Hardcoded achievements for now as requested, matching the new recruitment tone
  const achievements = [
    {
      title: "전사 DX 과제 기획 및 AX(AI 전환) 주도",
      description: "단순한 툴 도입을 넘어, 현업 부서의 실질적인 업무 효율성을 높이는 디지털 전환(DX, RPA)을 안착시키고 AI 전환(AX)을 주도합니다.",
      icon: Target,
      color: "#3b82f6" // blue-500
    },
    {
      title: "레거시와 신기술의 통합 풀사이클 수행",
      description: "ERP, POS, B2C부터 RPA, AI까지 시스템 파편화를 막고 유기적으로 연결하는 문제 해결에 집중합니다.",
      icon: TrendingUp,
      color: "#8b5cf6" // violet-500
    },
    {
      title: "실행형 IT Leadership",
      description: "팀 운영 및 우선순위 조정, 현업과의 유연한 커뮤니케이션으로 실현 가능한 솔루션을 딜리버리합니다.",
      icon: Users,
      color: "#10b981" // emerald-500
    },
    {
      title: "다양한 도메인 경험 (제조/유통/물류)",
      description: "제조업과 유통/물류 도메인의 현장 이해도를 바탕으로 실무 시스템을 개발하고 안정적으로 운영합니다.",
      icon: Anchor,
      color: "#f59e0b" // amber-500
    }
  ];

  const badges = [
    { label: "15+ Years", type: "primary" },
    { label: "Team Lead", type: "secondary" },
    { label: "ERP / POS / B2C", type: "accent" },
    { label: "RPA / AI", type: "accent" },
    { label: "Manufacturing + Retail Domains", type: "outline" }
  ];

  return (
    <motion.section
      id="section-keyAchievements"
      className="section achievements-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🎯</span>
        Key Area of Expertise
      </motion.h2>

      <motion.div className="badges-container" variants={itemVariants}>
        {badges.map((badge, idx) => (
          <span key={idx} className={`achievement-badge badge-${badge.type}`}>
            {badge.label}
          </span>
        ))}
      </motion.div>

      <motion.div className="achievements-grid" variants={containerVariants}>
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx} 
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
            >
              <div className="achievement-icon-wrapper" style={{ background: `${item.color}15`, color: item.color }}>
                <Icon size={24} />
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <style>{`
        .achievements-section {
          padding-bottom: 2rem;
        }

        .badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 2rem;
        }

        .achievement-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .badge-primary {
          background: var(--accent-blue);
          color: white;
        }

        .badge-secondary {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          color: white;
        }

        .badge-accent {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .badge-outline {
          background: transparent;
          color: var(--text-secondary);
          border: 1px dashed var(--text-tertiary);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .achievement-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .achievement-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .achievement-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default KeyAchievementsSection;
