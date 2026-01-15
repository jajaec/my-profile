import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Sparkles, ShoppingCart, MapPin, Wrench, Lock, X, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const iconMap = {
  ShoppingCart: ShoppingCart,
  MapPin: MapPin,
};

// 비밀번호 (실제 사용 시 더 복잡한 방식으로 관리하세요)
const TOOLS_PASSWORD = 'dldbsgml0611!';

const WebAppsSection = ({ data }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [pendingToolId, setPendingToolId] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

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

  const handleOpenApp = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openToolInNewWindow = (toolId) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const toolUrl = `${baseUrl}?tool=${toolId}`;
    window.open(toolUrl, `tool_${toolId}`, 'width=1200,height=800,resizable=yes,scrollbars=yes');
  };

  const handleToolClick = (toolId) => {
    if (isAuthenticated) {
      // 이미 인증됨 - 바로 새 창으로 도구 열기
      openToolInNewWindow(toolId);
    } else {
      // 비밀번호 입력 필요
      setPendingToolId(toolId);
      setShowPasswordModal(true);
      setPassword('');
      setError('');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === TOOLS_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      if (pendingToolId) {
        openToolInNewWindow(pendingToolId);
      }
      setPendingToolId(null);
      setPassword('');
      setError('');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setPendingToolId(null);
    setPassword('');
    setError('');
  };

  return (
    <motion.section
      className="section webapps-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🌐</span>
        {data.title}
      </motion.h2>

      <motion.p className="section-description" variants={itemVariants}>
        {data.description || "직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다."}
      </motion.p>

      <motion.div className="webapps-grid" variants={containerVariants}>
        {data.items?.map((app, idx) => (
          <motion.div
            key={idx}
            className="webapp-card"
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpenApp(app.url)}
          >
            <div className="webapp-thumbnail">
              {app.thumbnail ? (
                <img src={app.thumbnail} alt={app.title} className="thumbnail-img" />
              ) : (
                <div className="thumbnail-placeholder">
                  <Globe size={48} />
                </div>
              )}
              <div className="webapp-overlay">
                <ExternalLink size={24} />
                <span>열기</span>
              </div>
            </div>

            <div className="webapp-content">
              <div className="webapp-header">
                <h3 className="webapp-title">{app.title}</h3>
                <div className="webapp-badges">
                  {app.isNew && (
                    <span className="new-badge">
                      <Sparkles size={12} />
                      NEW
                    </span>
                  )}
                  {app.requiresLogin && (
                    <span className="login-badge">
                      <Lock size={12} />
                      계정 필요
                    </span>
                  )}
                </div>
              </div>
              
              <p className="webapp-description">{app.description}</p>

              {app.techStack && (
                <div className="webapp-tech">
                  {app.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {app.platform && (
                <div className="webapp-platform">
                  <span className="platform-label">Platform:</span>
                  <span className="platform-value">{app.platform}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Internal Tools Section */}
      {data.internalTools && (
        <>
          <motion.div className="internal-tools-divider" variants={itemVariants}>
            <div className="divider-line"></div>
            <div className="divider-content">
              <Wrench size={16} />
              <span>{data.internalTools.title}</span>
              {!isAuthenticated && <Lock size={14} className="lock-icon" />}
            </div>
            <div className="divider-line"></div>
          </motion.div>

          <motion.p className="internal-tools-description" variants={itemVariants}>
            {data.internalTools.description}
            {!isAuthenticated && " (비밀번호 필요)"}
          </motion.p>

          <motion.div className="internal-tools-grid" variants={containerVariants}>
            {data.internalTools.items?.map((tool, idx) => {
              const IconComponent = iconMap[tool.icon] || Wrench;
              return (
                <motion.div
                  key={idx}
                  className={`internal-tool-card ${!isAuthenticated ? 'locked' : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleToolClick(tool.id)}
                >
                  <div className="tool-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="tool-info">
                    <h4 className="tool-title">{tool.title}</h4>
                    <p className="tool-description">{tool.description}</p>
                  </div>
                  <div className="tool-action">
                    {isAuthenticated ? (
                      <ExternalLink size={16} />
                    ) : (
                      <Lock size={16} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            className="password-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="password-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <X size={20} />
              </button>
              
              <div className="modal-icon">
                <Lock size={32} />
              </div>
              
              <h3 className="modal-title">비밀번호 입력</h3>
              <p className="modal-description">
                내부 개발 도구에 접근하려면 비밀번호를 입력하세요.
              </p>
              
              <form onSubmit={handlePasswordSubmit}>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    className="password-input"
                    autoFocus
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                
                {error && <p className="error-message">{error}</p>}
                
                <button type="submit" className="submit-btn">
                  확인
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .webapps-section {
          max-width: 1200px;
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

        .webapps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .webapp-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .webapp-card:hover {
          border-color: var(--accent-blue);
        }

        .webapp-card:hover .webapp-overlay {
          opacity: 1;
        }

        .webapp-thumbnail {
          position: relative;
          width: 100%;
          height: 160px;
          background: var(--bg-tertiary);
          overflow: hidden;
        }

        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .webapp-card:hover .thumbnail-img {
          transform: scale(1.05);
        }

        .thumbnail-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
          color: white;
          opacity: 0.8;
        }

        .webapp-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .webapp-content {
          padding: 16px;
        }

        .webapp-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 8px;
        }

        .webapp-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          flex: 1;
        }

        .webapp-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          flex-shrink: 0;
        }

        .new-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          border-radius: 4px;
        }

        .login-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-size: 0.7rem;
          font-weight: 500;
          border-radius: 4px;
        }

        .webapp-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .webapp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .tech-tag {
          padding: 3px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .webapp-platform {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
          font-size: 0.8rem;
        }

        .platform-label {
          color: var(--text-tertiary);
        }

        .platform-value {
          color: var(--accent-blue);
          font-weight: 500;
        }

        /* Internal Tools Styles */
        .internal-tools-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 40px 0 16px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--border-light);
        }

        .divider-content {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 8px 16px;
          background: var(--bg-tertiary);
          border-radius: 20px;
        }

        .lock-icon {
          color: var(--accent-purple);
        }

        .internal-tools-description {
          color: var(--text-tertiary);
          font-size: 0.85rem;
          margin-bottom: 16px;
          text-align: center;
        }

        .internal-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .internal-tool-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .internal-tool-card.locked {
          opacity: 0.85;
        }

        .internal-tool-card:hover {
          border-color: var(--accent-purple);
          background: var(--bg-tertiary);
        }

        .internal-tool-card:hover .tool-icon {
          background: var(--accent-purple);
          color: white;
        }

        .tool-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .tool-info {
          flex: 1;
          min-width: 0;
        }

        .tool-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .tool-description {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tool-action {
          color: var(--text-tertiary);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .internal-tool-card:hover .tool-action {
          opacity: 1;
          color: var(--accent-purple);
        }

        /* Password Modal Styles */
        .password-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .password-modal {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 400px;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .modal-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          background: linear-gradient(135deg, var(--accent-purple), #8b5cf6);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 8px;
        }

        .modal-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 24px;
        }

        .password-input-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .password-input {
          width: 100%;
          padding: 12px 48px 12px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          font-size: 1rem;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .password-input:focus {
          outline: none;
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }

        .password-input::placeholder {
          color: var(--text-tertiary);
        }

        .toggle-password-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
        }

        .toggle-password-btn:hover {
          color: var(--text-secondary);
        }

        .error-message {
          color: #ef4444;
          font-size: 0.85rem;
          text-align: center;
          margin-bottom: 16px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, var(--accent-purple), #8b5cf6);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .webapps-grid {
            grid-template-columns: 1fr;
          }
          
          .internal-tools-grid {
            grid-template-columns: 1fr;
          }

          .password-modal {
            padding: 24px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default WebAppsSection;
