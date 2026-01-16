/**
 * Google Sheets 설정
 * 
 * 시트 URL: https://docs.google.com/spreadsheets/d/1Wjw9wakam_vAf2rPF3fkBABxCE3EpWqN9LPmGBu_jeU/edit
 */

// Google Sheets ID
export const SHEET_ID = '1Wjw9wakam_vAf2rPF3fkBABxCE3EpWqN9LPmGBu_jeU';

// 시트 이름 목록 (실제 Google Sheets 탭 이름과 정확히 일치해야 함)
export const SHEET_NAMES = {
  PROFILE: 'profile',
  ABOUT: 'about',
  TECH_STACK: 'techStack',
  EXPERIENCE: 'Experience',
  PROJECTS: 'projects',
  EDUCATION: 'Education',
  CERTIFICATIONS: 'Certifications',
  BOOKMARKS: 'bookmarks',
  LIVE_DEMO: 'liveDemo',
  INTERNAL_TOOLS: 'internalTools',
  RESOURCES: 'Resources',
};

// CSV 데이터 URL 생성 함수 
// headers=1로 첫 번째 행을 헤더로 명시
export const getSheetCsvUrl = (sheetName) => {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}&headers=1`;
};

