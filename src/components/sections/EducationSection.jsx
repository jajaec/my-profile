import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, BookOpen, Building, Laptop, Award } from 'lucide-react';

// 교육 유형별 설정
const educationTypes = {
  elementary: { icon: BookOpen, colorClass: 'elementary', label: '초등학교' },
  middle: { icon: BookOpen, colorClass: 'middle', label: '중학교' },
  high: { icon: School, colorClass: 'high', label: '고등학교' },
  university: { icon: GraduationCap, colorClass: 'university', label: '대학교' },
  graduate: { icon: GraduationCap, colorClass: 'graduate', label: '대학원' },
  academy: { icon: Building, colorClass: 'academy', label: '학원/교육기관' },
  bootcamp: { icon: Laptop, colorClass: 'bootcamp', label: '부트캠프' },
  online: { icon: Laptop, colorClass: 'online', label: '온라인 교육' },
  certification: { icon: Award, colorClass: 'certification', label: '자격 과정' },
  other: { icon: BookOpen, colorClass: 'other', label: '기타' },
};

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

  const getEducationType = (type) => {
    return educationTypes[type] || educationTypes.university;
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
        {data.items?.map((edu, idx) => {
          const eduType = getEducationType(edu.type);
          const IconComponent = eduType.icon;
          
          return (
            <motion.div
              key={idx}
              className="education-card"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div className={`edu-icon-wrapper ${eduType.colorClass}`}>
                <IconComponent size={24} />
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
          );
        })}
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

        /* 초등학교 - 연두색 */
        .edu-icon-wrapper.elementary {
          background: linear-gradient(135deg, #84cc16, #22c55e);
        }

        /* 중학교 - 청록색 */
        .edu-icon-wrapper.middle {
          background: linear-gradient(135deg, #14b8a6, #06b6d4);
        }

        /* 고등학교 - 파란색 */
        .edu-icon-wrapper.high {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
        }

        /* 대학교 - 파랑/보라 (기본) */
        .edu-icon-wrapper.university {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        }

        /* 대학원 - 보라/분홍 */
        .edu-icon-wrapper.graduate {
          background: linear-gradient(135deg, #8b5cf6, #d946ef);
        }

        /* 학원/교육기관 - 주황색 */
        .edu-icon-wrapper.academy {
          background: linear-gradient(135deg, #f59e0b, #ea580c);
        }

        /* 부트캠프 - 빨간색 */
        .edu-icon-wrapper.bootcamp {
          background: linear-gradient(135deg, #ef4444, #f97316);
        }

        /* 온라인 교육 - 하늘색 */
        .edu-icon-wrapper.online {
          background: linear-gradient(135deg, #0ea5e9, #38bdf8);
        }

        /* 자격 과정 - 금색 */
        .edu-icon-wrapper.certification {
          background: linear-gradient(135deg, #eab308, #fbbf24);
        }

        /* 기타 - 회색 */
        .edu-icon-wrapper.other {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
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
