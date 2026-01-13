import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ExpansionModal = ({ isOpen, onClose, content }) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="modal-content">
              {content.type === 'image' ? (
                <img
                  src={content.src}
                  alt={content.caption || 'Expanded image'}
                  className="modal-image"
                />
              ) : (
                <div className="modal-video-wrapper">
                  <iframe
                    src={content.src}
                    title={content.caption || 'Video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="modal-video"
                  />
                </div>
              )}

              {content.caption && (
                <p className="modal-caption">{content.caption}</p>
              )}
            </div>
          </motion.div>

          <style>{`
            .modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.85);
              z-index: 100;
              backdrop-filter: blur(4px);
            }

            .modal-container {
              position: fixed;
              inset: 0;
              z-index: 101;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 40px;
              pointer-events: none;
            }

            .modal-close-btn {
              position: fixed;
              top: 20px;
              right: 20px;
              background: rgba(255, 255, 255, 0.15);
              border: none;
              color: white;
              padding: 12px;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.2s ease;
              z-index: 102;
              pointer-events: auto;
            }

            .modal-close-btn:hover {
              background: rgba(255, 255, 255, 0.3);
              transform: scale(1.1);
            }

            .modal-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
              pointer-events: auto;
            }

            .modal-image {
              max-width: 85vw;
              max-height: 80vh;
              object-fit: contain;
              border-radius: 8px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .modal-video-wrapper {
              width: 80vw;
              max-width: 1000px;
              aspect-ratio: 16 / 9;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .modal-video {
              width: 100%;
              height: 100%;
            }

            .modal-caption {
              color: rgba(255, 255, 255, 0.85);
              font-size: 0.95rem;
              text-align: center;
              max-width: 600px;
              margin-top: 8px;
            }

            @media (max-width: 768px) {
              .modal-container {
                padding: 20px;
              }

              .modal-video-wrapper {
                width: 95vw;
              }

              .modal-close-btn {
                top: 15px;
                right: 15px;
                padding: 10px;
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExpansionModal;
