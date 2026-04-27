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
      title: "AX 전환 실행력",
      description: "AI, RPA, 자동화 기술을 실제 업무 프로세스에 적용해 조직의 일하는 방식을 개선하는 역량",
      icon: Target,
      color: "#3b82f6" // blue-500
    },
    {
      title: "레거시 시스템 현대화 역량",
      description: "기존 ERP, 기간계, 내부 시스템의 구조와 한계를 이해하고 개선 방향을 설계·추진하는 역량",
      icon: TrendingUp,
      color: "#8b5cf6" // violet-500
    },
    {
      title: "현업 중심 문제해결력",
      description: "기술 자체보다 현업의 반복업무, 비효율, 병목을 파악하고 실질적인 개선안으로 연결하는 역량",
      icon: Users,
      color: "#10b981" // emerald-500
    },
    {
      title: "기술과 조직을 연결하는 리더십",
      description: "개발, 운영, 관리 경험을 바탕으로 팀원과 현업 부서를 연결하고 변화가 정착되도록 이끄는 역량",
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
