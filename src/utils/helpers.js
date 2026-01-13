/**
 * Google Drive 공유 링크를 직접 접근 가능한 URL로 변환
 * @param {string} id - Google Drive 파일 ID
 * @param {string} type - 'image' 또는 'video'
 * @returns {string} 변환된 URL
 */
export const getDriveUrl = (id, type = 'image') => {
  if (!id) return '';
  
  if (type === 'video') {
    return `https://drive.google.com/file/d/${id}/preview`;
  }
  
  // 이미지의 경우
  return `https://drive.google.com/uc?export=view&id=${id}`;
};

/**
 * Google Drive 공유 링크에서 파일 ID 추출
 * @param {string} url - Google Drive 공유 링크
 * @returns {string|null} 파일 ID 또는 null
 */
export const extractDriveId = (url) => {
  if (!url) return null;
  
  // 다양한 Google Drive URL 형식 처리
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
};

/**
 * 스킬 레벨에 따른 색상 반환
 * @param {number} level - 0-100 사이의 스킬 레벨
 * @returns {string} CSS 색상값
 */
export const getSkillColor = (level) => {
  if (level >= 90) return 'var(--accent-green)';
  if (level >= 75) return 'var(--accent-blue)';
  if (level >= 60) return 'var(--accent-purple)';
  if (level >= 40) return 'var(--accent-orange)';
  return 'var(--accent-yellow)';
};

/**
 * 날짜 형식 변환
 * @param {string} dateString - 'YYYY.MM' 형식의 날짜
 * @returns {string} 표시용 날짜 문자열
 */
export const formatDate = (dateString) => {
  if (!dateString || dateString === '현재') return dateString;
  return dateString;
};

/**
 * 클래스명 병합 유틸리티
 * @param  {...string} classes - 클래스명들
 * @returns {string} 병합된 클래스명
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
