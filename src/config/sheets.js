/**
 * Google Sheets 설정
 * 
 * 시트 URL: https://docs.google.com/spreadsheets/d/1Wjw9wakam_vAf2rPF3fkBABxCE3EpWqN9LPmGBu_jeU/edit
 */

// Google Sheets ID
export const SHEET_ID = '1Wjw9wakam_vAf2rPF3fkBABxCE3EpWqN9LPmGBu_jeU';
export const GLOSSARY_SHEET_ID = '1uf0cixyr6vmKi4LQt6EfypHAG5Qgywtxog1lBX0hXIE';

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
  GLOSSARY: '용어집', // Glossary 시트 이름 (URL에서 명시하지 않더라도 기본 시트명으로 사용 가능)
};

// 메인 스프레드시트 CSV 데이터를 가져오기 위한 URL 생성
export const getSheetCsvUrl = (sheetName) => {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}&headers=1`;
};

// 용어집 스프레드시트 CSV 데이터를 가져오기 위한 URL 생성
export const getGlossaryCsvUrl = () => {
  // 용어집은 첫 번째 시트를 기본으로 가져옵니다.
  return `https://docs.google.com/spreadsheets/d/${GLOSSARY_SHEET_ID}/gviz/tq?tqx=out:csv&headers=1`;
};

// 용어집 쓰기 API (Google Apps Script Web App URL)
// scripts/glossary-apps-script.js 참고하여 배포 후 URL 입력
export const GLOSSARY_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxgGEYs6Byxv5R5oHAvDp3deE8HT77-rF60P6mHfFaDhfHGMjLYD4Q5qPsaBJu08HIS/exec';
