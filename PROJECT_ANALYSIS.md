# 프로젝트 분석 결과

분석일: 2026-05-10  
대상: `D:\workspaces\my-profile`

## 1. 요약

이 프로젝트는 React 19 + Vite 7 기반의 개인 포트폴리오/프로필 웹앱이다. 콘텐츠는 주로 공개 Google Sheets CSV에서 읽어오며, Google Apps Script를 통해 방문 로그와 용어집 쓰기 기능을 연결한다. GitHub Pages 배포가 설정되어 있고, `base` 경로는 `/my-profile/`이다.

빌드는 통과하지만 린트는 실패한다. 운영 전에는 린트 오류 정리, 클라이언트에 노출된 외부 API 키/로그 수집 방식 점검, Google Sheets 장애 시 fallback 설계가 우선이다.

## 2. 기술 스택

- 런타임/빌드: React `19.2.0`, React DOM `19.2.0`, Vite `7.2.4`, `@vitejs/plugin-react`
- 스타일: Tailwind CSS `4.1.18`, 전역 CSS, 컴포넌트 내부 `<style>`
- UI/애니메이션: `lucide-react`, `framer-motion`
- 배포: GitHub Pages workflow, `gh-pages` script
- 외부 연동: Google Sheets CSV, Google Apps Script, ipify, Kakao Local API, Google Maps iframe, `order.iroyal.kr`

## 3. 주요 구조

- `src/main.jsx`: React 앱 진입점
- `src/App.jsx`: 앱 상태, 섹션 전환, popup tool 모드, Google Sheets 데이터 로딩 결과를 각 섹션으로 전달
- `src/hooks/useSheetData.js`: 모든 시트 데이터를 `Promise.all`로 병렬 조회하고 변환
- `src/utils/googleSheets.js`: CSV 파서와 각 시트별 transform 함수
- `src/config/sheets.js`: Google Sheet ID, Apps Script URL, CSV URL 생성 함수
- `src/utils/logger.js`: 방문 로그 수집 및 Google Apps Script 전송
- `src/utils/glossaryApi.js`: 용어집 추가/수정 API 호출
- `src/context/ThemeContext.jsx`: localStorage 기반 테마 관리
- `src/components/sections/*`: About, Experience, Projects, Glossary, Analytics, WebApps, 내부 도구 화면 등
- `.github/workflows/deploy.yml`: main branch push 시 GitHub Pages 빌드/배포

## 4. 기능 흐름

- 기본 화면은 스크롤형 포트폴리오 섹션이다.
- `bookmarks`, `glossary`, `analytics`는 페이지 모드로 전환된다.
- URL query `?tool=mallReport` 또는 `?tool=addressMap`이 있으면 해당 내부 도구만 popup 형태로 렌더링한다.
- 콘텐츠 데이터는 `profile`, `about`, `techStack`, `Experience`, `projects`, `Education`, `Certifications`, `bookmarks`, `liveDemo`, `internalTools`, `Resources`, glossary 시트에서 가져온다.
- 방문 로그는 초기 진입 및 섹션 전환 시 Apps Script로 전송된다.

## 5. 검증 결과

### 빌드

명령:

```powershell
.\node_modules\.bin\vite.cmd build --outDir .tmp/analysis-build
```

결과: 성공

주의:

- minified JS chunk가 `502.82 kB`로 Vite 기본 경고 기준 `500 kB`를 초과한다.
- 임시 빌드 산출물이 `.tmp/analysis-build`에 생성되어 있다.

### 린트

명령:

```powershell
npm run lint
```

결과: 실패, 35 errors

주요 유형:

- 여러 파일의 미사용 `motion` import
- `src/components/BlockRenderer.jsx`의 `no-case-declarations`
- `src/components/Sidebar.jsx`의 render 중 컴포넌트 생성 경고
- `src/App.jsx`, `src/components/sections/GlossarySection.jsx`의 `set-state-in-effect`
- `scripts/glossary-apps-script.js`의 Apps Script 전역 객체 미인식
- `src/context/ThemeContext.jsx`의 React Fast Refresh export 규칙 위반

## 6. 주요 리스크

1. 린트가 현재 CI 품질 게이트로 쓰이기 어렵다.  
   빌드는 되지만 정적 검사가 실패하므로 배포 전 회귀를 잡기 어렵다.

2. 클라이언트 코드에 Kakao REST API 키가 하드코딩되어 있다.  
   위치: `src/components/sections/AddressMapSection.jsx`  
   브라우저 번들에 포함되므로 도메인 제한, 키 교체, 서버 프록시 전환을 검토해야 한다.

3. 방문 로그가 IP, userAgent, referrer, 화면 크기, sessionId를 외부 Apps Script로 전송한다.  
   개인정보/동의/보관 정책을 정리하고, 공개 포트폴리오라면 최소 수집 원칙을 적용하는 편이 안전하다.

4. Google Sheets 중 하나라도 실패하면 전체 앱이 error 상태가 된다.  
   `useAllSheetData()`가 모든 요청을 `Promise.all`로 묶고 있어 일부 섹션 장애가 전체 화면 장애로 번진다.

5. 데이터 transform이 시트 헤더명에 강하게 결합되어 있다.  
   시트 컬럼명 변경, 공백, 언어 변경 시 콘텐츠가 빈 값으로 렌더링될 가능성이 높다.

6. `README.md`는 기본 Vite 템플릿 설명에 가깝다.  
   실제 실행 방법, 데이터 시트 구조, 배포 방식, 환경/키 관리 정책을 반영하지 않는다.

7. 대형 섹션 컴포넌트가 많다.  
   특히 `AnalyticsSection.jsx`는 약 1,337 lines로 비대하며 유지보수/테스트 단위 분리가 필요하다.

## 7. 우선 개선 순서

1. 린트 오류를 정리한다.
   - 미사용 import 제거
   - Apps Script 파일은 ESLint 대상에서 제외하거나 전역 환경을 별도 설정
   - `SidebarContent`를 컴포넌트 밖으로 분리
   - `BlockRenderer` switch case 블록을 `{}`로 감싸기

2. 외부 키/로그 정책을 정리한다.
   - Kakao API 키 도메인 제한 또는 서버 프록시화
   - Apps Script URL 및 Sheet ID 공개 범위 점검
   - 로그 수집 항목 최소화

3. Google Sheets 로딩을 부분 실패 허용 구조로 바꾼다.
   - `Promise.allSettled`
   - 섹션별 fallback 데이터
   - 사용자에게 전체 오류 대신 섹션 단위 오류 표시

4. 번들 분리를 검토한다.
   - analytics, glossary, popup tools는 lazy import 후보
   - framer-motion 사용 범위를 실제 필요한 곳으로 제한

5. 문서를 실제 프로젝트 기준으로 갱신한다.
   - `README.md`: 실행/빌드/배포/데이터 관리/보안 주의사항
   - `DATA_GUIDE.md`: 현재 Google Sheets 기반 구조와 맞는지 재검토

## 8. 기타 관찰

- `git status` 기준 미추적 파일: `202506_김정렴.jpg`, `.tmp/analysis-build/*`
- Git이 `C:\Users\KJR/.config/git/ignore` 접근 권한 경고를 출력한다. 전역 git ignore 권한 문제로 보이며 프로젝트 자체 문제는 아니다.
- PowerShell `Get-Content` 출력에서는 한글이 깨져 보였지만, Node로 UTF-8 읽기 시 주요 파일의 한글은 정상으로 확인됐다.

