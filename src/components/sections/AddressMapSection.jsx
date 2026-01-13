import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Loader2, Navigation, Copy, Check } from 'lucide-react';

const AddressMapSection = () => {
  const [address, setAddress] = useState('경기도 화성시 시청로 895-20');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const searchAddress = async () => {
    if (!address.trim()) {
      setError('주소를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // 개발 환경에서는 프록시 사용
      const isDev = import.meta.env.DEV;
      const baseUrl = isDev 
        ? '/kakao-api/v2/local/search/address.json'
        : 'https://dapi.kakao.com/v2/local/search/address.json';
      
      const response = await fetch(
        `${baseUrl}?query=${encodeURIComponent(address)}`,
        {
          headers: {
            'Authorization': 'KakaoAK a9bd7c56d3bb0458de036cc050c65041' // 실제 API 키로 교체 필요
          }
        }
      );

      if (!response.ok) {
        throw new Error('API 요청 실패');
      }

      const data = await response.json();

      if (data.documents && data.documents.length > 0) {
        setResult(data.documents[0]);
      } else {
        setError('검색 결과가 없습니다.');
      }
    } catch (err) {
      setError(err.message || '오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyCoordinates = () => {
    if (result) {
      const text = `${result.y}, ${result.x}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openGoogleMaps = () => {
    if (result) {
      const url = `https://www.google.com/maps?q=${result.y},${result.x}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="section address-map-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">📍</span>
        주소 → 좌표 변환
      </motion.h2>

      <motion.p className="section-description" variants={itemVariants}>
        주소를 입력하면 좌표(위도, 경도)를 조회하고 구글 지도에서 위치를 확인할 수 있습니다.
      </motion.p>

      {/* 주소 입력 영역 */}
      <motion.div className="search-container" variants={itemVariants}>
        <div className="search-input-wrapper">
          <MapPin size={20} className="search-icon" />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchAddress()}
            placeholder="주소를 입력하세요 (예: 서울시 강남구 테헤란로 123)"
            className="search-input"
          />
        </div>
        <button
          onClick={searchAddress}
          disabled={isLoading}
          className="search-button"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="spinner" />
              검색 중...
            </>
          ) : (
            <>
              <Search size={18} />
              검색
            </>
          )}
        </button>
      </motion.div>

      {/* 에러 메시지 */}
      {error && (
        <motion.div className="error-message" variants={itemVariants}>
          ⚠️ {error}
        </motion.div>
      )}

      {/* 결과 표시 */}
      {result && (
        <motion.div
          className="result-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* 주소 정보 */}
          <div className="address-info">
            <h3 className="result-title">📌 검색 결과</h3>
            <div className="info-row">
              <span className="info-label">주소</span>
              <span className="info-value">{result.address_name}</span>
            </div>
            {result.road_address && (
              <div className="info-row">
                <span className="info-label">도로명</span>
                <span className="info-value">{result.road_address.address_name}</span>
              </div>
            )}
            {result.address && (
              <div className="info-row">
                <span className="info-label">지번</span>
                <span className="info-value">{result.address.address_name}</span>
              </div>
            )}
          </div>

          {/* 좌표 정보 */}
          <div className="coordinates-card">
            <div className="coord-header">
              <h4>🌐 좌표 정보</h4>
              <button
                onClick={copyCoordinates}
                className="copy-button"
                title="좌표 복사"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? '복사됨!' : '복사'}
              </button>
            </div>
            <div className="coord-grid">
              <div className="coord-item">
                <span className="coord-label">위도 (Latitude)</span>
                <span className="coord-value">{result.y}</span>
              </div>
              <div className="coord-item">
                <span className="coord-label">경도 (Longitude)</span>
                <span className="coord-value">{result.x}</span>
              </div>
            </div>
          </div>

          {/* 구글 지도 버튼 */}
          <button onClick={openGoogleMaps} className="map-button google">
            <Navigation size={20} />
            구글 지도에서 보기
          </button>

          {/* 구글 맵 임베드 - 마커와 확대/축소만 표시 */}
          <div className="map-embed">
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${result.y},${result.x}&z=17&output=embed`}
            />
          </div>

          {/* 원본 JSON */}
          <div className="json-container">
            <h4 className="json-title">📋 API 응답 데이터</h4>
            <pre className="json-content">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </motion.div>
      )}

      <style>{`
        .address-map-section {
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

        .search-container {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        .search-input {
          border: none;
          background: transparent;
          font-size: 1rem;
          color: var(--text-primary);
          outline: none;
          flex: 1;
          width: 100%;
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .search-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .search-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .search-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .error-message {
          padding: 12px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          margin-bottom: 20px;
        }

        .result-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
        }

        .address-info {
          margin-bottom: 20px;
        }

        .result-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .info-row {
          display: flex;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px dashed var(--border-light);
        }

        .info-row:last-child {
          border-bottom: none;
        }

        .info-label {
          min-width: 60px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .info-value {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .coordinates-card {
          background: var(--bg-tertiary);
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 20px;
        }

        .coord-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .coord-header h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .copy-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: var(--bg-hover);
          border: 1px solid var(--border-light);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-button:hover {
          background: var(--accent-blue);
          color: white;
          border-color: var(--accent-blue);
        }

        .coord-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .coord-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .coord-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .coord-value {
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-blue);
        }

        .map-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #4285f4, #1a73e8);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 20px;
        }

        .map-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
        }

        .map-embed {
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .json-container {
          background: var(--bg-tertiary);
          border-radius: 8px;
          overflow: hidden;
        }

        .json-title {
          padding: 12px 16px;
          background: var(--bg-hover);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          border-bottom: 1px solid var(--border-light);
        }

        .json-content {
          padding: 16px;
          margin: 0;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 0.8rem;
          color: var(--text-primary);
          overflow-x: auto;
          line-height: 1.5;
          max-height: 300px;
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .search-container {
            flex-direction: column;
          }

          .search-input-wrapper {
            min-width: 100%;
          }

          .search-button {
            width: 100%;
            justify-content: center;
          }

          .coord-value {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default AddressMapSection;
