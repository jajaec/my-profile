import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Users, Search, Loader2 } from 'lucide-react';

const MallReportSection = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    // 기본값: 어제 날짜
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  });
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReport = async () => {
    setIsLoading(true);
    setError(null);
    setReportData(null);

    try {
      // 개발 환경에서는 프록시 사용, 배포 환경에서는 직접 호출
      const isDev = import.meta.env.DEV;
      const apiUrl = isDev 
        ? `/api/google/get_mall_daily_report?dt=${selectedDate}`
        : `https://order.iroyal.kr/google/get_mall_daily_report?dt=${selectedDate}`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('API 요청 실패');
      }

      const data = await response.json();
      
      if (data.result) {
        setReportData(data.data);
      } else {
        setError('데이터를 가져올 수 없습니다.');
      }
    } catch (err) {
      setError(err.message || '오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('ko-KR').format(value);
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
      className="section mall-report-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🛒</span>
        자사몰 매출 확인
      </motion.h2>

      <motion.p className="section-description" variants={itemVariants}>
        날짜를 선택하고 조회 버튼을 클릭하면 해당 날짜의 매출 데이터를 확인할 수 있습니다.
      </motion.p>

      {/* 날짜 선택 영역 */}
      <motion.div className="date-picker-container" variants={itemVariants}>
        <div className="date-input-wrapper">
          <Calendar size={20} className="date-icon" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-input"
          />
        </div>
        <button
          onClick={fetchReport}
          disabled={isLoading}
          className="fetch-button"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="spinner" />
              조회 중...
            </>
          ) : (
            <>
              <Search size={18} />
              조회하기
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
      {reportData && (
        <motion.div
          className="report-results"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="results-title">
            📊 {reportData.DT} 매출 리포트
          </h3>

          <div className="stats-grid">
            {/* 매출액 카드 */}
            <div className="stat-card sales">
              <div className="stat-icon">
                <TrendingUp size={28} />
              </div>
              <div className="stat-content">
                <span className="stat-label">매출액</span>
                <span className="stat-value">{formatCurrency(reportData.PO)}</span>
              </div>
            </div>

            {/* 방문자 카드 */}
            <div className="stat-card visitors">
              <div className="stat-icon">
                <Users size={28} />
              </div>
              <div className="stat-content">
                <span className="stat-label">방문자 수</span>
                <span className="stat-value">{formatNumber(reportData.VISITORS)}명</span>
              </div>
            </div>
          </div>

          {/* 원본 JSON 데이터 */}
          <div className="json-container">
            <h4 className="json-title">📋 원본 JSON 데이터</h4>
            <pre className="json-content">
              {JSON.stringify({ result: true, data: reportData }, null, 2)}
            </pre>
          </div>
        </motion.div>
      )}

      <style>{`
        .mall-report-section {
          max-width: 800px;
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

        .date-picker-container {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .date-input-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          flex: 1;
          min-width: 200px;
        }

        .date-icon {
          color: var(--text-secondary);
        }

        .date-input {
          border: none;
          background: transparent;
          font-size: 1rem;
          color: var(--text-primary);
          outline: none;
          flex: 1;
        }

        .date-input::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.5);
        }

        .fetch-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fetch-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .fetch-button:disabled {
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

        .report-results {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
        }

        .results-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
        }

        .stat-card.sales {
          border-left: 4px solid #10b981;
        }

        .stat-card.sales .stat-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .stat-card.visitors {
          border-left: 4px solid #8b5cf6;
        }

        .stat-card.visitors .stat-icon {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 12px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
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
          font-size: 0.85rem;
          color: var(--text-primary);
          overflow-x: auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .date-picker-container {
            flex-direction: column;
          }

          .fetch-button {
            width: 100%;
            justify-content: center;
          }

          .stat-value {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default MallReportSection;
