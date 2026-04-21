import { GLOSSARY_APPS_SCRIPT_URL } from '../config/sheets';

async function callApi(payload) {
  if (!GLOSSARY_APPS_SCRIPT_URL) {
    throw new Error('Apps Script URL이 설정되지 않았습니다. src/config/sheets.js의 GLOSSARY_APPS_SCRIPT_URL을 설정해주세요.');
  }

  const body = {
    ...payload,
    memorized: payload.memorized ? 'TRUE' : 'FALSE',
  };

  const response = await fetch(GLOSSARY_APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  if (!result.success) throw new Error(result.error || '요청에 실패했습니다.');
  return result;
}

export function addGlossaryTerm(term) {
  return callApi({ action: 'add', ...term });
}

export function updateGlossaryTerm(originalTerm, term) {
  return callApi({ action: 'update', originalTerm, ...term });
}
