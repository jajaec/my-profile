/**
 * Google Sheets 데이터 Fetch 유틸리티
 * CSV 데이터를 JSON으로 변환하여 반환
 */

import { getSheetCsvUrl, SHEET_NAMES } from '../config/sheets';

/**
 * CSV 문자열을 파싱하여 배열로 변환
 * @param {string} csvText - CSV 형식의 문자열
 * @returns {Array<Array<string>>} 2차원 배열
 */
function parseCsv(csvText) {
  const rows = [];
  let currentRow = [];
  let currentCell = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        // 이스케이프된 따옴표
        currentCell += '"';
        i++; // 다음 따옴표 건너뛰기
      } else if (char === '"') {
        // 따옴표 종료
        inQuotes = false;
      } else {
        currentCell += char;
      }
    } else {
      if (char === '"') {
        // 따옴표 시작
        inQuotes = true;
      } else if (char === ',') {
        // 셀 구분
        currentRow.push(currentCell.trim());
        currentCell = '';
      } else if (char === '\n' || (char === '\r' && nextChar === '\n')) {
        // 행 구분
        currentRow.push(currentCell.trim());
        if (currentRow.length > 0 && currentRow.some(cell => cell !== '')) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = '';
        if (char === '\r') i++; // \r\n 처리
      } else {
        currentCell += char;
      }
    }
  }

  // 마지막 셀/행 처리
  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(cell => cell !== '')) {
      rows.push(currentRow);
    }
  }

  return rows;
}

/**
 * CSV 데이터를 객체 배열로 변환 (첫 번째 행을 헤더로 사용)
 * @param {Array<Array<string>>} rows - CSV 행 배열
 * @returns {Array<Object>} 객체 배열
 */
function csvToObjects(rows) {
  if (rows.length < 2) return [];
  
  const headers = rows[0];
  const objects = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const obj = {};
    
    headers.forEach((header, index) => {
      obj[header] = row[index] || '';
    });
    
    objects.push(obj);
  }

  return objects;
}

/**
 * Google Sheets에서 데이터 가져오기
 * @param {string} sheetName - 시트 이름
 * @returns {Promise<Array<Object>>} 객체 배열
 */
export async function fetchSheetData(sheetName) {
  try {
    const url = getSheetCsvUrl(sheetName);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    const rows = parseCsv(csvText);
    return csvToObjects(rows);
  } catch (error) {
    console.error(`Error fetching sheet "${sheetName}":`, error);
    throw error;
  }
}

/**
 * 파이프(|)로 구분된 문자열을 배열로 변환
 * @param {string} str - 파이프로 구분된 문자열
 * @returns {Array<string>} 배열
 */
export function splitByPipe(str) {
  if (!str) return [];
  return str.split('|').map(item => item.trim()).filter(item => item);
}

/**
 * 쉼표(,)로 구분된 문자열을 배열로 변환
 * @param {string} str - 쉼표로 구분된 문자열
 * @returns {Array<string>} 배열
 */
export function splitByComma(str) {
  if (!str) return [];
  return str.split(',').map(item => item.trim()).filter(item => item);
}

/**
 * Profile 시트 데이터를 기존 JSON 형식으로 변환
 */
export function transformProfile(data) {
  if (!data || data.length === 0) return null;
  
  const row = data[0];
  return {
    name: row['이름'] || '',
    role: row['직책/역할'] || '',
    email: row['이메일'] || '',
    location: row['지역'] || '',
    bio: row['자기소개'] || '',
    profileImage: row['프로필이미지URL'] || '',
    social: {
      email: row['이메일'] || '',
    },
  };
}

/**
 * About 시트 데이터를 기존 JSON 형식으로 변환
 */
export function transformAbout(data) {
  if (!data || data.length === 0) return { title: 'About Me', blocks: [] };
  
  const blocks = [];
  
  data.forEach(row => {
    const sectionTitle = row['섹션제목'] || '';
    const content = row['내용'] || '';
    
    // 섹션 제목 추가
    if (sectionTitle) {
      blocks.push({ type: 'heading', value: sectionTitle });
    }
    
    // 내용 파싱 (파이프로 구분된 항목들)
    const items = splitByPipe(content);
    
    if (sectionTitle.includes('Competencies') || sectionTitle.includes('역량')) {
      // 핵심 역량은 리스트로
      blocks.push({ type: 'list', items });
    } else {
      // 일반 텍스트는 각각 text 블록으로
      items.forEach(item => {
        blocks.push({ type: 'text', value: item });
      });
    }
  });
  
  return { title: 'About Me', blocks };
}

/**
 * TechStack 시트 데이터를 기존 JSON 형식으로 변환
 * A~D 컬럼만 사용: 분류(A), 아이콘(B), 기술명(C), 숙련도(D)
 */
export function transformTechStack(data) {
  if (!data || data.length === 0) return { title: 'Tech Stack', categories: [] };
  
  const categoryMap = new Map();
  
  data.forEach(row => {
    // A~D 컬럼만 사용 (E 컬럼 이후는 무시)
    const category = row['분류'] || '';
    const icon = row['아이콘'] || '';
    const name = row['기술명'] || '';
    const level = parseInt(row['숙련도(100점)'] || '0', 10);
    
    // 분류 또는 기술명이 없으면 무시
    if (!category || !name) return;
    
    if (!categoryMap.has(category)) {
      categoryMap.set(category, { name: category, icon, items: [] });
    }
    
    categoryMap.get(category).items.push({ name, level });
  });
  
  return {
    title: 'Tech Stack',
    categories: Array.from(categoryMap.values()),
  };
}

/**
 * Experience 시트 데이터를 기존 JSON 형식으로 변환
 * A~F 컬럼만 사용: 회사명(A), 직책(B), 근무기간(C), 한줄설명(D), 담당업무(E), 사용기술(F)
 */
export function transformExperience(data) {
  if (!data || data.length === 0) return { title: 'Experience', items: [] };
  
  const items = data
    .filter(row => row['회사명']) // 회사명이 없는 행은 무시
    .map(row => ({
      // A~F 컬럼만 사용 (G 컬럼 이후는 무시)
      company: row['회사명'] || '',
      role: row['직책'] || '',
      period: row['근무기간'] || '',
      description: row['한줄설명'] || '',
      tasks: splitByPipe(row['담당업무'] || ''),
      techStack: splitByComma(row['사용기술'] || ''),
    }));
  
  return { title: 'Experience', items };
}

/**
 * Projects 시트 데이터를 기존 JSON 형식으로 변환
 * A~K 컬럼만 사용: 프로젝트명(A), 회사(B), 기간(C), 역할(D), 한줄설명(E), 
 *                 기술스택(F), 개요(G), 주요기능(H), 핵심포인트(I), 아이콘(J), 이미지URL(K)
 */
export function transformProjects(data) {
  if (!data || data.length === 0) return { title: 'Projects', items: [] };
  
  const items = data
    .filter(row => row['프로젝트명']) // 프로젝트명이 없는 행은 무시
    .map(row => {
      // A~K 컬럼만 사용 (L 컬럼 이후는 무시)
      const blocks = [];
      
      // 개요 블록
      const overview = row['개요'] || '';
      if (overview) {
        blocks.push({ type: 'heading', value: '프로젝트 개요' });
        blocks.push({ type: 'text', value: overview });
      }
      
      // 주요 기능 블록
      const features = splitByPipe(row['주요기능'] || '');
      if (features.length > 0) {
        blocks.push({ type: 'heading', value: '주요 기능' });
        blocks.push({ type: 'list', items: features });
      }
      
      // 핵심 포인트 (callout)
      const highlight = row['핵심포인트'] || '';
      const icon = row['아이콘'] || '💡';
      if (highlight) {
        blocks.push({ type: 'callout', icon, value: highlight });
      }
      
      // 이미지
      const imageUrl = row['이미지URL'] || '';
      if (imageUrl) {
        blocks.push({ type: 'heading', value: '결과물' });
        blocks.push({ type: 'image', value: imageUrl, caption: `${row['프로젝트명']} 화면` });
      }
      
      return {
        title: row['프로젝트명'] || '',
        company: row['회사'] || '',
        period: row['기간'] || '',
        role: row['역할'] || '',
        description: row['한줄설명'] || '',
        techStack: splitByComma(row['기술스택'] || ''),
        blocks,
        links: {},
      };
    });
  
  return { title: 'Projects', items };
}

/**
 * Education 시트 데이터를 기존 JSON 형식으로 변환
 * A~F 컬럼만 사용: 학교명(A), 전공(B), 학위(C), 기간(D), 비고(E), 구분(F)
 */
export function transformEducation(data) {
  if (!data || data.length === 0) return { title: 'Education', items: [] };
  
  const items = data
    .filter(row => row['학교명']) // 학교명이 없는 행은 무시
    .map(row => ({
      // A~F 컬럼만 사용 (G 컬럼 이후는 무시)
      school: row['학교명'] || '',
      major: row['전공'] || '',
      degree: row['학위'] || '',
      period: row['기간'] || '',
      description: row['비고'] || '',
      type: row['구분'] || 'university',
    }));
  
  return { title: 'Education', items };
}

/**
 * Certifications 시트 데이터를 기존 JSON 형식으로 변환
 * A~D 컬럼만 사용: 자격증명(A), 발급기관(B), 취득일(C), 아이콘(D)
 */
export function transformCertifications(data) {
  if (!data || data.length === 0) return { title: 'Certifications', items: [] };
  
  const items = data
    .filter(row => row['자격증명']) // 자격증명이 없는 행은 무시
    .map(row => ({
      // A~D 컬럼만 사용 (E 컬럼 이후는 무시)
      name: row['자격증명'] || '',
      issuer: row['발급기관'] || '',
      date: row['취득일'] || '',
      icon: row['아이콘'] || '📜',
    }));
  
  return { title: 'Certifications', items };
}

/**
 * Bookmarks 시트 데이터를 기존 JSON 형식으로 변환
 * A~F 컬럼만 사용: 카테고리(A), 카테고리아이콘(B), 카테고리색상(C), 사이트명(D), URL(E), 설명(F)
 */
export function transformBookmarks(data) {
  if (!data || data.length === 0) return { title: 'Bookmarks', description: '', categories: [] };
  
  const categoryMap = new Map();
  
  data
    .filter(row => row['사이트명']) // 사이트명이 없는 행은 무시
    .forEach(row => {
      // A~F 컬럼만 사용 (G 컬럼 이후는 무시)
      const category = row['카테고리'] || '';
      const icon = row['카테고리아이콘'] || '';
      const color = row['카테고리색상'] || '#8b5cf6';
      
      if (!categoryMap.has(category)) {
        categoryMap.set(category, { name: category, icon, color, items: [] });
      }
      
      categoryMap.get(category).items.push({
        title: row['사이트명'] || '',
        url: row['URL'] || '',
        description: row['설명'] || '',
      });
    });
  
  return {
    title: 'Bookmarks',
    description: '관심 있는 웹사이트들을 분야별로 정리했습니다.',
    categories: Array.from(categoryMap.values()),
  };
}

/**
 * LiveDemo 시트 데이터를 기존 JSON 형식으로 변환
 * A~H 컬럼만 사용: 제목(A), 설명(B), URL(C), 썸네일URL(D), 기술스택(E), 플랫폼(F), 신규여부(G), 로그인필요(H)
 */
export function transformLiveDemo(data) {
  if (!data || data.length === 0) return { title: 'Live Demo', description: '', items: [] };
  
  const items = data
    .filter(row => row['제목']) // 제목이 없는 행은 무시
    .map(row => ({
      // A~H 컬럼만 사용 (I 컬럼 이후는 무시)
      title: row['제목'] || '',
      description: row['설명'] || '',
      url: row['URL'] || '',
      thumbnail: row['썸네일URL'] || '',
      techStack: splitByComma(row['기술스택'] || ''),
      platform: row['플랫폼'] || '',
      isNew: row['신규여부']?.toUpperCase() === 'TRUE',
      requiresLogin: row['로그인필요']?.toUpperCase() === 'TRUE',
    }));
  
  return {
    title: 'Live Demo',
    description: '직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다.',
    items,
  };
}

/**
 * InternalTools 시트 데이터를 기존 JSON 형식으로 변환
 * A~D 컬럼만 사용: ID(A), 제목(B), 설명(C), 아이콘(D)
 */
export function transformInternalTools(data) {
  if (!data || data.length === 0) return { title: 'Internal Tools', description: '', items: [] };
  
  const items = data
    .filter(row => row['ID']) // ID가 없는 행은 무시
    .map(row => ({
      // A~D 컬럼만 사용 (E 컬럼 이후는 무시)
      id: row['ID'] || '',
      title: row['제목'] || '',
      description: row['설명'] || '',
      icon: row['아이콘'] || 'Wrench',
    }));
  
  return {
    title: 'Internal Tools',
    description: '업무용으로 제작한 내부 도구입니다.',
    items,
  };
}

/**
 * Resources 시트 데이터를 기존 JSON 형식으로 변환
 * A~H 컬럼만 사용: 카테고리(A), 카테고리아이콘(B), 카테고리색상(C), 제목(D), 설명(E), 문서URL(F), 태그(G), 작성일(H)
 */
export function transformResources(data) {
  if (!data || data.length === 0) return { title: 'Resources', description: '', categories: [] };
  
  const categoryMap = new Map();
  
  data
    .filter(row => row['제목']) // 제목이 없는 행은 무시
    .forEach(row => {
      // A~H 컬럼만 사용 (I 컬럼 이후는 무시)
      const category = row['카테고리'] || '';
      const icon = row['카테고리아이콘'] || '';
      const color = row['카테고리색상'] || '#8b5cf6';
      
      if (!categoryMap.has(category)) {
        categoryMap.set(category, { name: category, icon, color, items: [] });
      }
      
      categoryMap.get(category).items.push({
        title: row['제목'] || '',
        description: row['설명'] || '',
        docUrl: row['문서URL'] || '',
        tags: splitByComma(row['태그'] || ''),
        createdDate: row['작성일'] || '',
      });
    });
  
  return {
    title: 'Resources',
    description: 'IT 및 기타 유용한 정보들을 주제별로 정리했습니다. 클릭하면 Google Docs에서 상세 내용을 확인할 수 있습니다.',
    categories: Array.from(categoryMap.values()),
  };
}
