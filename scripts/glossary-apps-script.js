/**
 * 용어집 Google Apps Script Web App
 *
 * 배포 방법:
 * 1. https://script.google.com 에서 새 프로젝트 생성
 * 2. 아래 코드 전체를 붙여넣기
 * 3. GLOSSARY_SHEET_ID를 실제 스프레드시트 ID로 확인 (이미 설정됨)
 * 4. 상단 메뉴 → 배포 → 새 배포 → 유형: 웹 앱
 *    - 다음 사용자로 실행: 나 (Me)
 *    - 액세스 권한: 모든 사람 (Anyone)
 * 5. 배포 후 생성된 URL을 src/config/sheets.js의 GLOSSARY_APPS_SCRIPT_URL에 입력
 *
 * 시트 컬럼 순서 (헤더 행 필요):
 * 분야 | 용어 | 약어/원문 | 설명 | 중요도 | 암기 여부 | 참고 URL
 */

const GLOSSARY_SHEET_ID = '1uf0cixyr6vmKi4LQt6EfypHAG5Qgywtxog1lBX0hXIE';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(GLOSSARY_SHEET_ID);
    const sheet = ss.getSheets()[0];
    const allValues = sheet.getDataRange().getValues();
    const headers = allValues[0];

    const colIndex = (candidates) => {
      for (let i = 0; i < headers.length; i++) {
        const h = String(headers[i]).trim();
        if (candidates.some(c => h === c || h.includes(c))) return i;
      }
      return -1;
    };

    const domainCol  = colIndex(['분야']);
    const termCol    = colIndex(['용어']);
    const abbrCol    = colIndex(['약어/원문', '약어/영문', '약어']);
    const descCol    = colIndex(['설명']);
    const impCol     = colIndex(['중요도']);
    const memoCol    = colIndex(['암기 여부', '암기여부', '암기']);
    const urlCol     = colIndex(['참고 URL', '참고URL', 'URL']);

    function buildRow(p) {
      const row = new Array(headers.length).fill('');
      if (domainCol >= 0) row[domainCol] = p.domain || '';
      if (termCol   >= 0) row[termCol]   = p.term || '';
      if (abbrCol   >= 0) row[abbrCol]   = p.abbr || '';
      if (descCol   >= 0) row[descCol]   = p.description || '';
      if (impCol    >= 0) row[impCol]    = p.importance || '';
      if (memoCol   >= 0) row[memoCol]   = p.memorized || 'FALSE';
      if (urlCol    >= 0) row[urlCol]    = p.url || '';
      return row;
    }

    if (payload.action === 'add') {
      sheet.appendRow(buildRow(payload));
    } else if (payload.action === 'update' && payload.originalTerm) {
      let updated = false;
      for (let i = 1; i < allValues.length; i++) {
        if (String(allValues[i][termCol]).trim() === String(payload.originalTerm).trim()) {
          sheet.getRange(i + 1, 1, 1, headers.length).setValues([buildRow(payload)]);
          updated = true;
          break;
        }
      }
      if (!updated) {
        return jsonResponse({ success: false, error: `용어를 찾을 수 없습니다: ${payload.originalTerm}` });
      }
    } else {
      return jsonResponse({ success: false, error: '잘못된 action 값입니다.' });
    }

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
