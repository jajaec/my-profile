/**
 * 사용자 접속 로그를 Google Sheets에 기록하는 유틸리티
 */

const LOG_URL = 'https://script.google.com/macros/s/AKfycbz8J8B9bcqimeLoy_5VSpKgJiHHF5ajwocNR6bYylhju3TrVOiFoL6FVYqL5a65rQQ36g/exec';

// 세션 ID 생성 (탭 단위로 유지)
const SESSION_ID = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);

// IP 주소 캐시 (한 번만 조회)
let cachedIP = null;

/**
 * IP 주소 조회 (ipify 서비스 사용)
 */
async function getIPAddress() {
  if (cachedIP) return cachedIP;
  
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    cachedIP = data.ip;
    return cachedIP;
  } catch (error) {
    console.warn('IP 조회 실패:', error);
    return '';
  }
}

/**
 * 섹션 방문 로그 기록
 * @param {string} section - 방문한 섹션명 (about, projects 등)
 */
export async function logPageView(section) {
  try {
    const ip = await getIPAddress();
    
    const logData = {
      section,
      ip,
      userAgent: navigator.userAgent,
      referrer: document.referrer || '(직접 접속)',
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      sessionId: SESSION_ID
    };

    // Google Apps Script로 전송
    await fetch(LOG_URL, {
      method: 'POST',
      mode: 'no-cors', // CORS 우회
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData)
    });

    console.log('📊 로그 기록:', section);
  } catch (error) {
    // 로깅 실패해도 사이트 동작에 영향 없음
    console.warn('로깅 실패:', error);
  }
}

/**
 * 초기 페이지 로드 로그 기록
 */
export async function logInitialVisit() {
  await logPageView('_initial_load');
}
