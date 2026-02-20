import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ExternalLink, 
  Brain, 
  Zap, 
  Server, 
  Wrench,
  FileText,
  Tag,
  Calendar,
  ChevronDown,
  ChevronRight,
  Globe
} from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Zap: Zap,
  Server: Server,
  Wrench: Wrench,
};

const ResourcesSection = ({ data }) => {
  const [expandedCategories, setExpandedCategories] = useState(
    // 기본적으로 모든 카테고리 펼침
    data.categories?.reduce((acc, cat) => ({ ...acc, [cat.name]: true }), {}) || {}
  );

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const handleOpenDoc = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      className="section resources-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">📚</span>
        {data.title}
      </motion.h2>

      <motion.p className="section-description" variants={itemVariants}>
        {data.description}
      </motion.p>

      <motion.div className="resources-list" variants={containerVariants}>
        {data.categories?.map((category, catIdx) => {
          const IconComponent = iconMap[category.icon] || Globe;
          const isExpanded = expandedCategories[category.name];
          
          return (
            <motion.div
              key={catIdx}
              className="resource-category"
              variants={itemVariants}
            >
              <button
                className="category-header"
                onClick={() => toggleCategory(category.name)}
                style={{ '--category-color': category.color }}
              >
                <div className="category-icon" style={{ background: category.color }}>
                  <IconComponent size={20} />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">{category.items?.length || 0}개</span>
                <div className="category-toggle">
                  {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </div>
              </button>

              <motion.div
                className="category-items"
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {category.items?.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    className="resource-item"
                    whileHover={{ x: 4 }}
                    onClick={() => handleOpenDoc(item.docUrl)}
                  >
                    <div className="resource-icon">
                      <FileText size={18} />
                    </div>
                    <div className="resource-info">
                      <h4 className="resource-title">
                        {item.type && (
                          <span className="resource-type-badge" data-type={item.type}>{item.type}</span>
                        )}
                        {item.title}
                      </h4>
                      <p className="resource-description">{item.description}</p>
                      <div className="resource-meta">
                        {item.createdDate && (
                          <span className="resource-date">
                            <Calendar size={10} />
                            등록일: {item.createdDate}
                          </span>
                        )}
                        {item.tags && item.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="tag">
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="resource-action">
                      <ExternalLink size={14} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <style>{`
        .resources-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .resources-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .resource-category {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .category-header:hover {
          background: var(--bg-tertiary);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: white;
          flex-shrink: 0;
        }

        .category-name {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-count {
          padding: 4px 12px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .category-toggle {
          color: var(--text-tertiary);
          transition: transform 0.2s ease;
        }

        .category-items {
          overflow: hidden;
          border-top: 1px solid var(--border-light);
        }

        .resource-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 20px 14px 72px;
          cursor: pointer;
          transition: all 0.15s ease;
          border-bottom: 1px solid var(--border-light);
        }

        .resource-item:last-child {
          border-bottom: none;
        }

        .resource-item:hover {
          background: var(--bg-tertiary);
        }

        .resource-item:hover .resource-action {
          opacity: 1;
          color: var(--accent-blue);
        }

        .resource-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .resource-item:hover .resource-icon {
          background: var(--accent-blue);
          color: white;
        }

        .resource-info {
          flex: 1;
          min-width: 0;
        }

        .resource-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .resource-type-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 2px 8px;
          background: #6b7280; /* 기본값: 회색 */
          color: #fff;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .resource-type-badge[data-type="교육"] {
          background: #3b82f6; /* 파랑 */
        }

        .resource-type-badge[data-type="발표"] {
          background: #ef4444; /* 빨강 */
        }

        .resource-description {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .resource-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .resource-date {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }

        .tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .resource-action {
          color: var(--text-tertiary);
          opacity: 0;
          transition: all 0.15s ease;
          flex-shrink: 0;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .resource-item {
            padding-left: 20px;
          }

          .category-icon {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ResourcesSection;
