import { motion } from 'framer-motion';
import { Download, Sparkles, Target, Code2, TrendingUp, Briefcase, Lightbulb } from 'lucide-react';

const AboutSection = ({ data, profile }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // 핵심 역량 아이콘 매핑
  const competencyIcons = [
    { icon: Sparkles, color: '#8b5cf6' },
    { icon: Code2, color: '#3b82f6' },
    { icon: TrendingUp, color: '#10b981' },
    { icon: Briefcase, color: '#f59e0b' },
  ];

  // blocks에서 섹션별 데이터 추출
  const sections = [];
  let currentSection = null;

  data.blocks?.forEach((block) => {
    if (block.type === 'heading') {
      // 새 섹션 시작
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: block.value,
        texts: [],
        items: [],
      };
    } else if (block.type === 'text' && currentSection) {
      currentSection.texts.push(block.value);
    } else if (block.type === 'list' && currentSection) {
      currentSection.items = block.items || [];
    }
  });

  // 마지막 섹션 추가
  if (currentSection) {
    sections.push(currentSection);
  }

  return (
    <motion.section
      className="section about-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-header-row">
        <motion.h2 className="section-title" variants={itemVariants}>
          <span className="title-icon">👋</span>
          {data.title}
        </motion.h2>
        
        {profile?.resumeLink && (
          <motion.a 
            href={profile.resumeLink}
            className="resume-download-btn"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            <span>이력서 다운로드</span>
          </motion.a>
        )}
      </div>

      {sections.map((section, sectionIdx) => {
        const isListSection = section.items.length > 0;
        
        if (isListSection) {
          // 리스트가 있는 섹션 (핵심 역량 등)
          return (
            <motion.div key={sectionIdx} className="competency-section" variants={itemVariants}>
              <div className="competency-header">
                <Target size={22} />
                <h3 className="competency-title">{section.title}</h3>
              </div>
              <div className="competency-grid">
                {section.items.map((item, idx) => {
                  const IconComponent = competencyIcons[idx % competencyIcons.length].icon;
                  const iconColor = competencyIcons[idx % competencyIcons.length].color;
                  return (
                    <motion.div
                      key={idx}
                      className="competency-card"
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="competency-icon" style={{ background: `${iconColor}15`, color: iconColor }}>
                        <IconComponent size={20} />
                      </div>
                      <span className="competency-text">{item}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        } else {
          // 텍스트만 있는 섹션 (간략 소개 등)
          return (
            <motion.div key={sectionIdx} className="intro-card" variants={itemVariants}>
              <div className="intro-header">
                <div className="intro-icon-wrapper">
                  <Sparkles size={24} />
                </div>
                <h3 className="intro-title">{section.title}</h3>
              </div>
              <div className="intro-content">
                {section.texts.map((text, idx) => (
                  <p key={idx} className="intro-text">{text}</p>
                ))}
              </div>
            </motion.div>
          );
        }
      })}

      <style>{`
        .about-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 28px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        /* 간략 소개 카드 */
        .intro-card {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }

        .intro-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6, #10b981);
        }

        .intro-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .intro-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          border-radius: 12px;
          color: white;
        }

        .intro-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .intro-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
          padding-left: 16px;
          border-left: 3px solid var(--accent-blue);
          white-space: pre-wrap;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .intro-text:first-child {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 500;
          border-left-color: #8b5cf6;
        }

        /* 핵심 역량 섹션 */
        .competency-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 24px;
        }

        .competency-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .competency-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .competency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .competency-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          cursor: default;
          transition: all 0.2s ease;
        }

        .competency-card:hover {
          border-color: var(--accent-blue);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .competency-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .competency-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .intro-card, .competency-section {
            padding: 20px;
          }

          .competency-grid {
            grid-template-columns: 1fr;
          }

          .intro-text {
            padding-left: 12px;
          }
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 16px;
          }
          .about-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default AboutSection;

