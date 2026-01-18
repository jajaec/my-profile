import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Clock, 
  Monitor, 
  Smartphone, 
  Globe2,
  Lock,
  X,
  Eye,
  EyeOff,
  RefreshCw,
  Calendar,
  Activity,
  PieChart,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

// 비밀번호 - internalTools와 동일
const ANALYTICS_PASSWORD = 'dldbsgml0611!';

// Google Apps Script URL (로그 데이터 조회용)
const LOG_API_URL = 'https://script.google.com/macros/s/AKfycbz8J8B9bcqimeLoy_5VSpKgJiHHF5ajwocNR6bYylhju3TrVOiFoL6FVYqL5a65rQQ36g/exec';

const AnalyticsSection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

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

  // 로그 데이터 가져오기
  const fetchLogs = async () => {
    setLoading(true);
    setFetchError('');
    try {
      const response = await fetch(`${LOG_API_URL}?action=getLogs`);
      const data = await response.json();
      if (data.success) {
        setLogs(data.logs || []);
      } else {
        setFetchError('로그 데이터를 불러올 수 없습니다.');
      }
    } catch (err) {
      console.error('로그 조회 실패:', err);
      setFetchError('로그 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLogs();
    }
  }, [isAuthenticated]);

  // 날짜/시간 파싱 헬퍼 함수
  const parseDateTime = (datetime) => {
    if (!datetime) return { date: 'unknown', hour: null, formatted: '-' };
    
    let dateObj;
    const datetimeStr = String(datetime);
    
    // ISO 형식 (2026-01-18T23:29:55.000Z) 처리
    if (datetimeStr.includes('T')) {
      dateObj = new Date(datetimeStr);
    }
    // 한국 시간 형식 (2026-01-19 08:29:55) 처리
    else if (datetimeStr.includes('-') && datetimeStr.includes(':')) {
      dateObj = new Date(datetimeStr.replace(' ', 'T') + '+09:00');
    }
    // 기타 형식
    else {
      dateObj = new Date(datetimeStr);
    }
    
    if (isNaN(dateObj.getTime())) {
      return { date: 'unknown', hour: null, formatted: datetimeStr };
    }
    
    // 한국 시간으로 변환
    const koreaTime = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const year = koreaTime.getFullYear();
    const month = String(koreaTime.getMonth() + 1).padStart(2, '0');
    const day = String(koreaTime.getDate()).padStart(2, '0');
    const hour = koreaTime.getHours();
    const minute = String(koreaTime.getMinutes()).padStart(2, '0');
    const second = String(koreaTime.getSeconds()).padStart(2, '0');
    
    return {
      date: `${year}-${month}-${day}`,
      dateLabel: `${month}/${day}`,
      hour,
      formatted: `${month}/${day} ${String(hour).padStart(2, '0')}:${minute}`
    };
  };

  // 분석 데이터 계산
  const analytics = useMemo(() => {
    if (logs.length === 0) return null;

    // 섹션별 방문 수
    const sectionCounts = {};
    const dailyCounts = {};
    const hourCounts = {};
    const deviceCounts = { desktop: 0, mobile: 0, tablet: 0 };
    const uniqueSessions = new Set();

    logs.forEach(log => {
      const parsed = parseDateTime(log.datetime);
      
      // 섹션별
      const section = log.section || 'unknown';
      if (section !== '_initial_load') {
        sectionCounts[section] = (sectionCounts[section] || 0) + 1;
      }

      // 일별
      if (parsed.date !== 'unknown') {
        if (!dailyCounts[parsed.date]) {
          dailyCounts[parsed.date] = { count: 0, label: parsed.dateLabel };
        }
        dailyCounts[parsed.date].count++;
      }

      // 시간대별
      if (parsed.hour !== null) {
        hourCounts[parsed.hour] = (hourCounts[parsed.hour] || 0) + 1;
      }

      // 디바이스 분류
      const ua = (log.userAgent || '').toLowerCase();
      if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
        deviceCounts.mobile++;
      } else if (ua.includes('tablet') || ua.includes('ipad')) {
        deviceCounts.tablet++;
      } else {
        deviceCounts.desktop++;
      }

      // 고유 세션
      if (log.sessionId) {
        uniqueSessions.add(log.sessionId);
      }
    });

    // 인기 섹션 정렬
    const topSections = Object.entries(sectionCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    // 최근 7일 데이터
    const sortedDates = Object.keys(dailyCounts).sort().slice(-7);
    const dailyData = sortedDates.map(date => ({
      date: dailyCounts[date].label || date.slice(5),
      count: dailyCounts[date].count
    }));

    // 피크 시간대
    const peakHour = Object.entries(hourCounts)
      .sort((a, b) => b[1] - a[1])[0];

    return {
      totalViews: logs.length,
      uniqueVisitors: uniqueSessions.size,
      topSections,
      dailyData,
      deviceCounts,
      peakHour: peakHour ? `${peakHour[0]}시` : '-',
      averageDaily: dailyData.length > 0 
        ? Math.round(dailyData.reduce((a, b) => a + b.count, 0) / dailyData.length)
        : 0,
    };
  }, [logs]);

  // 섹션 이름 한글화
  const getSectionLabel = (section) => {
    const labels = {
      about: '소개',
      techStack: '기술 스택',
      experience: '경력',
      projects: '프로젝트',
      webApps: '라이브 데모',
      education: '학력',
      certifications: '자격증',
      resources: '리소스',
      bookmarks: '북마크',
    };
    return labels[section] || section;
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ANALYTICS_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      setPassword('');
      setError('');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
  };

  // 비밀번호 모달
  if (!isAuthenticated) {
    return (
      <motion.section
        className="section analytics-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          <span className="title-icon">📊</span>
          방문자 분석
        </motion.h2>

        <AnimatePresence>
          {showPasswordModal && (
            <motion.div
              className="password-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="password-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <button className="modal-close-btn" onClick={handleCloseModal}>
                  <X size={20} />
                </button>
                
                <div className="modal-icon">
                  <Lock size={32} />
                </div>
                
                <h3 className="modal-title">비밀번호 입력</h3>
                <p className="modal-description">
                  방문자 분석 대시보드에 접근하려면 비밀번호를 입력하세요.
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

        {!showPasswordModal && (
          <motion.div className="auth-required" variants={itemVariants}>
            <Lock size={48} />
            <h3>인증이 필요합니다</h3>
            <button 
              className="retry-auth-btn"
              onClick={() => setShowPasswordModal(true)}
            >
              비밀번호 입력
            </button>
          </motion.div>
        )}

        <style>{analyticsStyles}</style>
      </motion.section>
    );
  }

  // 로딩 상태
  if (loading) {
    return (
      <motion.section
        className="section analytics-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          <span className="title-icon">📊</span>
          방문자 분석
        </motion.h2>
        <div className="loading-state">
          <RefreshCw size={32} className="spin" />
          <p>데이터를 불러오는 중...</p>
        </div>
        <style>{analyticsStyles}</style>
      </motion.section>
    );
  }

  // 에러 상태
  if (fetchError) {
    return (
      <motion.section
        className="section analytics-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          <span className="title-icon">📊</span>
          방문자 분석
        </motion.h2>
        <div className="error-state">
          <p>{fetchError}</p>
          <button className="retry-btn" onClick={fetchLogs}>
            <RefreshCw size={16} />
            다시 시도
          </button>
        </div>
        <style>{analyticsStyles}</style>
      </motion.section>
    );
  }

  // 메인 대시보드
  return (
    <section className="section analytics-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">📊</span>
          방문자 분석
        </h2>
        <button className="refresh-btn" onClick={fetchLogs} disabled={loading}>
          <RefreshCw size={16} className={loading ? 'spin' : ''} />
          새로고침
        </button>
      </div>

      {analytics && (
        <>
          {/* 주요 지표 카드 */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon views">
                <Activity size={24} />
              </div>
              <div className="stat-content">
                <span className="stat-value">{analytics.totalViews.toLocaleString()}</span>
                <span className="stat-label">총 페이지뷰</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon visitors">
                <Users size={24} />
              </div>
              <div className="stat-content">
                <span className="stat-value">{analytics.uniqueVisitors.toLocaleString()}</span>
                <span className="stat-label">순 방문자</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon average">
                <TrendingUp size={24} />
              </div>
              <div className="stat-content">
                <span className="stat-value">{analytics.averageDaily}</span>
                <span className="stat-label">일평균 조회</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon peak">
                <Clock size={24} />
              </div>
              <div className="stat-content">
                <span className="stat-value">{analytics.peakHour}</span>
                <span className="stat-label">피크 시간대</span>
              </div>
            </div>
          </div>

          {/* 차트 영역 */}
          <div className="charts-grid">
            {/* 인기 섹션 */}
            <div className="chart-card">
              <h3 className="chart-title">
                <BarChart3 size={18} />
                인기 섹션 TOP 8
              </h3>
              <div className="bar-chart">
                {analytics.topSections.map(([section, count], idx) => {
                  const maxCount = analytics.topSections[0][1];
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={section} className="bar-item">
                      <div className="bar-label">
                        <span className="bar-rank">#{idx + 1}</span>
                        <span className="bar-name">{getSectionLabel(section)}</span>
                        <span className="bar-count">{count}</span>
                      </div>
                      <div className="bar-track">
                        <motion.div 
                          className="bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 일별 추이 */}
            <div className="chart-card">
              <h3 className="chart-title">
                <Calendar size={18} />
                최근 7일 방문 추이
              </h3>
              <div className="line-chart">
                {analytics.dailyData.map((day, idx) => {
                  const maxCount = Math.max(...analytics.dailyData.map(d => d.count));
                  const percentage = maxCount > 0 ? (day.count / maxCount) * 100 : 0;
                  return (
                    <div key={day.date} className="line-bar-item">
                      <motion.div 
                        className="line-bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.max(percentage, 5)}%` }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                      >
                        <span className="line-bar-value">{day.count}</span>
                      </motion.div>
                      <span className="line-bar-label">{day.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 디바이스 분포 */}
            <div className="chart-card device-chart">
              <h3 className="chart-title">
                <PieChart size={18} />
                디바이스 분포
              </h3>
              <div className="device-stats">
                <div className="device-item">
                  <div className="device-icon desktop">
                    <Monitor size={24} />
                  </div>
                  <div className="device-info">
                    <span className="device-name">데스크톱</span>
                    <span className="device-count">{analytics.deviceCounts.desktop}</span>
                  </div>
                  <div className="device-bar">
                    <motion.div 
                      className="device-fill desktop"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(analytics.deviceCounts.desktop / analytics.totalViews) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                <div className="device-item">
                  <div className="device-icon mobile">
                    <Smartphone size={24} />
                  </div>
                  <div className="device-info">
                    <span className="device-name">모바일</span>
                    <span className="device-count">{analytics.deviceCounts.mobile}</span>
                  </div>
                  <div className="device-bar">
                    <motion.div 
                      className="device-fill mobile"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(analytics.deviceCounts.mobile / analytics.totalViews) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                <div className="device-item">
                  <div className="device-icon tablet">
                    <Globe2 size={24} />
                  </div>
                  <div className="device-info">
                    <span className="device-name">태블릿</span>
                    <span className="device-count">{analytics.deviceCounts.tablet}</span>
                  </div>
                  <div className="device-bar">
                    <motion.div 
                      className="device-fill tablet"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(analytics.deviceCounts.tablet / analytics.totalViews) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 최근 로그 */}
          <div className="recent-logs">
            <h3 className="chart-title">
              <Activity size={18} />
              최근 접속 로그 (10건)
            </h3>
            <div className="logs-table-wrapper">
              <div className="logs-table">
                <div className="logs-header">
                  <span>시간</span>
                  <span>섹션</span>
                  <span>IP 주소</span>
                  <span>화면크기</span>
                  <span>User Agent</span>
                </div>
                {logs.slice(-10).reverse().map((log, idx) => {
                  const parsed = parseDateTime(log.datetime);
                  return (
                    <div key={idx} className="log-row">
                      <span className="log-time">{parsed.formatted}</span>
                      <span className="log-section">{getSectionLabel(log.section)}</span>
                      <span className="log-ip">{log.ip || '-'}</span>
                      <span className="log-screen">{log.screenSize || '-'}</span>
                      <span className="log-ua" title={log.userAgent}>
                        {log.userAgent || '-'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {!analytics && (
        <div className="no-data">
          <BarChart3 size={48} />
          <p>아직 수집된 데이터가 없습니다.</p>
        </div>
      )}

      <style>{analyticsStyles}</style>
    </section>
  );
};

const analyticsStyles = `
  .analytics-section {
    max-width: 1200px;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-light);
  }

  .title-icon {
    font-size: 1.5rem;
  }

  .refresh-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .refresh-btn:hover:not(:disabled) {
    background: var(--bg-secondary);
    border-color: var(--accent-blue);
    color: var(--accent-blue);
  }

  .refresh-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .stat-icon.views {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
  }

  .stat-icon.visitors {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .stat-icon.average {
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
    color: white;
  }

  .stat-icon.peak {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }

  .stat-content {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .stat-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  /* Charts Grid */
  .charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
  }

  .chart-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 20px;
  }

  .chart-card.device-chart {
    grid-column: span 2;
  }

  .chart-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-light);
  }

  /* Bar Chart */
  .bar-chart {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .bar-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .bar-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
  }

  .bar-rank {
    color: var(--text-tertiary);
    width: 24px;
  }

  .bar-name {
    color: var(--text-primary);
    flex: 1;
  }

  .bar-count {
    color: var(--accent-blue);
    font-weight: 600;
  }

  .bar-track {
    height: 8px;
    background: var(--bg-tertiary);
    border-radius: 4px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 4px;
  }

  /* Line Chart */
  .line-chart {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 200px;
    gap: 8px;
  }

  .line-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100%;
  }

  .line-bar {
    width: 100%;
    max-width: 40px;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6);
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 8px;
    margin-top: auto;
  }

  .line-bar-value {
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
  }

  .line-bar-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 8px;
  }

  /* Device Stats */
  .device-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .device-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .device-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .device-icon.desktop {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
  }

  .device-icon.mobile {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .device-icon.tablet {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }

  .device-info {
    text-align: center;
  }

  .device-name {
    display: block;
    font-size: 0.9rem;
    color: var(--text-primary);
    font-weight: 500;
  }

  .device-count {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .device-bar {
    width: 100%;
    height: 6px;
    background: var(--bg-tertiary);
    border-radius: 3px;
    overflow: hidden;
  }

  .device-fill {
    height: 100%;
    border-radius: 3px;
  }

  .device-fill.desktop {
    background: #3b82f6;
  }

  .device-fill.mobile {
    background: #10b981;
  }

  .device-fill.tablet {
    background: #f59e0b;
  }

  /* Recent Logs */
  .recent-logs {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 20px;
  }

  .logs-table-wrapper {
    overflow-x: auto;
  }

  .logs-table {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 800px;
  }

  .logs-header {
    display: grid;
    grid-template-columns: 100px 80px 130px 100px 1fr;
    gap: 12px;
    padding: 8px 12px;
    background: var(--bg-tertiary);
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .log-row {
    display: grid;
    grid-template-columns: 100px 80px 130px 100px 1fr;
    gap: 12px;
    padding: 10px 12px;
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: 6px;
    font-size: 0.8rem;
    transition: all 0.2s ease;
  }

  .log-row:hover {
    background: var(--bg-tertiary);
  }

  .log-time {
    color: var(--text-primary);
    font-family: monospace;
    font-size: 0.75rem;
  }

  .log-section {
    color: var(--accent-blue);
    font-weight: 500;
  }

  .log-ip {
    color: var(--text-secondary);
    font-family: monospace;
    font-size: 0.75rem;
  }

  .log-screen {
    color: var(--text-secondary);
    font-size: 0.75rem;
  }

  .log-ua {
    color: var(--text-tertiary);
    font-size: 0.7rem;
    word-break: break-all;
  }

  /* States */
  .loading-state,
  .error-state,
  .no-data,
  .auth-required {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: var(--text-secondary);
    gap: 16px;
    text-align: center;
  }

  .retry-btn,
  .retry-auth-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    background: var(--accent-blue);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .retry-btn:hover,
  .retry-auth-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  /* Password Modal (same as WebAppsSection) */
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
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
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
    border-color: var(--accent-blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
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
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
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
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 1024px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .charts-grid {
      grid-template-columns: 1fr;
    }
    
    .chart-card.device-chart {
      grid-column: span 1;
    }
    
    .device-stats {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .logs-header,
    .log-row {
      grid-template-columns: 1fr 1fr;
    }
    
    .logs-header span:nth-child(3),
    .logs-header span:nth-child(4),
    .log-row span:nth-child(3),
    .log-row span:nth-child(4) {
      display: none;
    }
  }
`;

export default AnalyticsSection;
