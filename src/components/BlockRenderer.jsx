import { motion } from 'framer-motion';
import { getDriveUrl } from '../utils/helpers';

const BlockRenderer = ({ block, onMediaClick }) => {
  const renderBlock = () => {
    switch (block.type) {
      case 'text':
        return (
          <p className="block-text">{block.value}</p>
        );

      case 'heading':
        return (
          <h3 className="block-heading">{block.value}</h3>
        );

      case 'subheading':
        return (
          <h4 className="block-subheading">{block.value}</h4>
        );

      case 'list':
        return (
          <ul className="block-list">
            {block.items?.map((item, idx) => (
              <li key={idx} className="block-list-item">
                <span className="list-bullet">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'callout':
        return (
          <div className="block-callout">
            <span className="callout-icon">{block.icon || '💡'}</span>
            <div className="callout-content">
              {block.items ? (
                <ul className="callout-list">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="callout-text">{block.value}</p>
              )}
            </div>
          </div>
        );

      case 'image':
        const imageSrc = block.driveId 
          ? getDriveUrl(block.driveId, 'image')
          : block.value;
        
        if (!imageSrc) return null;

        return (
          <div className="block-media">
            <motion.img
              src={imageSrc}
              alt={block.caption || 'Project image'}
              className="block-image"
              whileHover={{ scale: 1.02 }}
              onClick={() => onMediaClick?.({ type: 'image', src: imageSrc, caption: block.caption })}
              referrerPolicy="no-referrer"
            />
            {block.caption && (
              <p className="media-caption">{block.caption}</p>
            )}
          </div>
        );

      case 'video':
        const videoUrl = block.value;
        if (!videoUrl) return null;
        
        // YouTube URL 처리
        const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
        // Google Drive URL 처리
        const isGoogleDrive = videoUrl.includes('drive.google.com');
        // 직접 비디오 파일 (mp4 등)
        const isDirectVideo = videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.ogg');
        
        let videoSrc = videoUrl;
        
        // YouTube embed URL로 변환
        if (isYouTube && !videoUrl.includes('/embed/')) {
          const videoIdMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/);
          if (videoIdMatch) {
            videoSrc = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
          }
        }
        
        // Google Drive preview URL로 변환
        if (isGoogleDrive && !videoUrl.includes('/preview')) {
          const fileIdMatch = videoUrl.match(/\/d\/([^/]+)/);
          if (fileIdMatch) {
            videoSrc = `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
          }
        }

        // 직접 비디오 파일은 video 태그 사용
        if (isDirectVideo) {
          return (
            <div className="block-media">
              <video
                src={videoSrc}
                controls
                className="block-video-native"
                onClick={(e) => e.stopPropagation()}
              >
                브라우저가 비디오를 지원하지 않습니다.
              </video>
              {block.caption && (
                <p className="media-caption">{block.caption}</p>
              )}
            </div>
          );
        }

        // iframe으로 YouTube/Google Drive 처리
        return (
          <div className="block-media">
            <div 
              className="video-wrapper"
              onClick={() => onMediaClick?.({ type: 'video', src: videoSrc, caption: block.caption })}
            >
              <iframe
                src={videoSrc}
                title={block.caption || 'Project video'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="block-video"
              />
            </div>
            {block.caption && (
              <p className="media-caption">{block.caption}</p>
            )}
          </div>
        );

      case 'divider':
        return <hr className="block-divider" />;

      case 'quote':
        return (
          <blockquote className="block-quote">
            {block.value}
          </blockquote>
        );

      case 'code':
        return (
          <pre className="block-code">
            <code>{block.value}</code>
          </pre>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`block-wrapper type-${block.type}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {renderBlock()}

      <style>{`
        .block-wrapper {
          margin-bottom: 12px;
        }

        .block-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-primary);
          white-space: pre-line;
        }

        .block-heading {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 16px;
          margin-bottom: 8px;
        }

        .block-subheading {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 12px;
          margin-bottom: 6px;
        }

        .block-list {
          list-style: none;
          padding: 0;
          margin: 8px 0;
        }

        .block-list-item {
          display: flex;
          gap: 8px;
          padding: 4px 0;
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .list-bullet {
          color: var(--text-tertiary);
          flex-shrink: 0;
        }

        .block-callout {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-secondary);
          border-radius: 6px;
          margin: 12px 0;
        }

        .callout-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .callout-content {
          flex: 1;
        }

        .callout-list {
          margin: 0;
          padding-left: 20px;
          list-style-type: disc;
        }

        .callout-list li {
          margin-bottom: 4px;
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .callout-list li:last-child {
          margin-bottom: 0;
        }

        .callout-text {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
          white-space: pre-line;
          margin: 0;
        }

        .block-media {
          margin: 12px 0;
        }

        .block-image {
          width: 100%;
          max-width: 100%;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s ease;
          aspect-ratio: 16/9;
          object-fit: cover;
          background: var(--bg-secondary);
        }

        .block-image:hover {
          box-shadow: var(--shadow-md);
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          padding-bottom: 0; /* Use aspect-ratio instead of padding hack */
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          background: var(--bg-secondary);
        }

        .block-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .block-video-native {
          width: 100%;
          max-width: 100%;
          border-radius: 8px;
          box-shadow: var(--shadow-sm);
          background: #000;
        }

        .media-caption {
          margin-top: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-align: center;
          font-style: italic;
        }

        .block-divider {
          height: 1px;
          background: var(--border-color);
          border: none;
          margin: 20px 0;
        }

        .block-quote {
          padding: 12px 16px;
          border-left: 3px solid var(--accent-blue);
          background: var(--bg-secondary);
          font-style: italic;
          color: var(--text-primary);
          margin: 12px 0;
          border-radius: 0 6px 6px 0;
        }

        .block-code {
          background: var(--bg-tertiary);
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
          font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-primary);
        }
      `}</style>
    </motion.div>
  );
};

export default BlockRenderer;
