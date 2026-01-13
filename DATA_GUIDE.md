# 📚 data.json 작성 가이드

이 문서는 포트폴리오 웹사이트의 콘텐츠를 수정하기 위한 `src/data.json` 파일 작성 가이드입니다.

---

## 📁 파일 위치

```
my-profile/
└── src/
    └── data.json  ← 이 파일을 수정하세요
```

---

## 🏗️ 전체 구조

```json
{
  "profile": { ... },        // 기본 프로필 정보
  "about": { ... },          // 자기소개 섹션
  "techStack": { ... },      // 기술 스택 섹션
  "experience": { ... },     // 경력 섹션
  "projects": { ... },       // 프로젝트 섹션
  "webApps": { ... },        // 배포된 웹앱 섹션 ⭐ NEW
  "education": { ... },      // 학력 섹션
  "certifications": { ... }  // 자격증 섹션
}
```

---

## 1️⃣ profile (프로필 정보)

```json
{
  "profile": {
    "name": "홍길동",                    // 이름
    "role": "Senior Software Engineer", // 직함/역할
    "email": "dev@example.com",         // 이메일
    "phone": "010-1234-5678",           // 전화번호 (선택)
    "location": "서울, 대한민국",        // 위치
    "bio": "간단한 소개글...",           // 한 줄 소개
    "drivePhotoId": "",                 // Google Drive 사진 ID (선택)
    "profileImage": "https://...",      // 프로필 이미지 URL
    "social": {
      "github": "https://github.com/username",
      "linkedin": "https://linkedin.com/in/username",
      "blog": "https://blog.example.com",
      "email": "dev@example.com"
    }
  }
}
```

### 프로필 이미지 설정 방법

| 방법 | 설정 |
|------|------|
| **URL 직접 입력** | `"profileImage": "https://example.com/photo.jpg"` |
| **Google Drive** | `"drivePhotoId": "파일ID"` (drivePhotoId가 있으면 우선 적용) |
| **로컬 이미지** | `"profileImage": "/images/profile.jpg"` (public/images/ 폴더에 저장) |

---

## 2️⃣ about (자기소개)

```json
{
  "about": {
    "title": "About Me",
    "blocks": [
      { "type": "text", "value": "일반 텍스트 문단입니다." },
      { "type": "callout", "icon": "💡", "value": "강조하고 싶은 내용" },
      { "type": "heading", "value": "소제목" },
      { "type": "list", "items": ["항목 1", "항목 2", "항목 3"] }
    ]
  }
}
```

### 지원되는 블록 타입

| 타입 | 설명 | 예시 |
|------|------|------|
| `text` | 일반 텍스트 | `{ "type": "text", "value": "텍스트 내용" }` |
| `heading` | 소제목 | `{ "type": "heading", "value": "제목" }` |
| `callout` | 강조 박스 | `{ "type": "callout", "icon": "💡", "value": "내용" }` |
| `list` | 목록 | `{ "type": "list", "items": ["항목1", "항목2"] }` |
| `quote` | 인용문 | `{ "type": "quote", "value": "인용 내용" }` |
| `divider` | 구분선 | `{ "type": "divider" }` |
| `image` | 이미지 | 아래 미디어 섹션 참조 |
| `video` | 동영상 | 아래 미디어 섹션 참조 |

---

## 3️⃣ techStack (기술 스택)

```json
{
  "techStack": {
    "title": "Tech Stack",
    "categories": [
      {
        "name": "Languages",       // 카테고리 이름
        "icon": "Code2",           // 아이콘 이름 (아래 표 참조)
        "items": [
          { "name": "JavaScript", "level": 95 },
          { "name": "Python", "level": 80 }
        ]
      }
    ]
  }
}
```

### 사용 가능한 아이콘

| 아이콘 이름 | 용도 |
|------------|------|
| `Code2` | 프로그래밍 언어 |
| `Layout` | 프론트엔드 |
| `Server` | 백엔드 |
| `Database` | 데이터베이스 |
| `Cloud` | 클라우드/DevOps |
| `Brain` | AI/ML |
| `Wrench` | 도구/기타 |

### 숙련도 레벨 (level) 기준

| 레벨 | 의미 | 설명 |
|------|------|------|
| 90-100% | Expert | 전문가 수준, 멘토링 가능 |
| 75-89% | Advanced | 고급, 독립적 문제 해결 |
| 60-74% | Intermediate | 중급, 실무 경험 있음 |
| 40-59% | Beginner | 초급, 기본 지식 보유 |
| 0-39% | Learning | 학습 중 |

---

## 4️⃣ experience (경력)

```json
{
  "experience": {
    "title": "Experience",
    "items": [
      {
        "company": "회사명",
        "role": "직책",
        "period": "2021.03 ~ 현재",
        "description": "간단한 회사/업무 설명",
        "tasks": [
          "주요 업무 1",
          "주요 업무 2"
        ],
        "techStack": ["React", "Node.js", "AWS"]
      }
    ]
  }
}
```

---

## 5️⃣ projects (프로젝트)

```json
{
  "projects": {
    "title": "Projects",
    "items": [
      {
        "title": "프로젝트명",
        "period": "2023.01 ~ 2023.12",
        "role": "Tech Lead",
        "description": "프로젝트 한 줄 설명",
        "techStack": ["React", "TypeScript", "AWS"],
        "blocks": [
          { "type": "heading", "value": "프로젝트 개요" },
          { "type": "text", "value": "상세 설명..." },
          { "type": "list", "items": ["성과 1", "성과 2"] },
          { "type": "image", "value": "/images/project.png", "caption": "스크린샷" }
        ],
        "links": {
          "github": "https://github.com/...",
          "demo": "https://demo.example.com",
          "docs": ""
        }
      }
    ]
  }
}
```

---

## 6️⃣ webApps (Live Demo) ⭐ NEW

클릭하면 새 창에서 실제 웹앱을 실행할 수 있는 섹션입니다.

```json
{
  "webApps": {
    "title": "Live Demo",
    "description": "직접 제작하여 배포한 웹 애플리케이션들입니다.",
    "items": [
      {
        "title": "앱 이름",
        "description": "앱에 대한 간단한 설명",
        "url": "https://your-app.com",       // 클릭 시 열릴 URL
        "thumbnail": "/images/app-thumb.png", // 썸네일 이미지 (선택)
        "techStack": ["React", "FastAPI"],   // 사용 기술 (선택)
        "platform": "Opal",                   // 배포 플랫폼 (선택)
        "isNew": true                         // NEW 뱃지 표시 여부
      }
    ]
  }
}
```

### 필드 설명

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | ✅ | 웹앱 이름 |
| `description` | ✅ | 간단한 설명 (2줄 이내 권장) |
| `url` | ✅ | 클릭 시 새 창에서 열릴 URL |
| `thumbnail` | ❌ | 썸네일 이미지 경로 (없으면 기본 아이콘 표시) |
| `techStack` | ❌ | 사용한 기술 스택 배열 |
| `platform` | ❌ | 배포 플랫폼 (예: Opal, Vercel, Netlify, GitHub Pages) |
| `isNew` | ❌ | `true`로 설정하면 NEW 뱃지 표시 |

### 예시

```json
{
  "title": "AI 이미지 생성기",
  "description": "텍스트 프롬프트로 AI 이미지를 생성하는 웹앱입니다.",
  "url": "https://opal.app/ai-image-generator",
  "thumbnail": "/images/ai-gen-thumb.png",
  "techStack": ["React", "Stable Diffusion API"],
  "platform": "Opal",
  "isNew": true
}
```

---

## 7️⃣ education (학력)

```json
{
  "education": {
    "title": "Education",
    "items": [
      {
        "school": "한국대학교",
        "major": "컴퓨터공학과",
        "degree": "학사",
        "period": "2011.03 ~ 2015.02",
        "description": "전공 관련 추가 설명 (선택)"
      }
    ]
  }
}
```

---

## 8️⃣ certifications (자격증)

```json
{
  "certifications": {
    "title": "Certifications",
    "items": [
      {
        "name": "AWS Solutions Architect",
        "issuer": "Amazon Web Services",
        "date": "2023.06",
        "icon": "☁️"  // 이모지 아이콘
      }
    ]
  }
}
```

---

## 🖼️ 미디어 (이미지/동영상) 추가 방법

### 이미지 블록

```json
{
  "type": "image",
  "value": "/images/screenshot.png",  // 로컬 경로 또는 URL
  "caption": "이미지 설명"
}
```

**이미지 저장 위치**: `public/images/` 폴더

### Google Drive 이미지

```json
{
  "type": "image",
  "driveId": "1abc123...",  // Google Drive 파일 ID
  "caption": "이미지 설명"
}
```

**Google Drive 파일 ID 찾기**:
1. Google Drive에서 파일 우클릭 → "공유" → "링크 복사"
2. 링크 형식: `https://drive.google.com/file/d/[파일ID]/view`
3. `[파일ID]` 부분만 복사하여 사용

### 동영상 블록

```json
{
  "type": "video",
  "driveId": "1abc123...",  // Google Drive 동영상 ID
  "caption": "영상 설명"
}
```

---

## 💡 팁

### 1. JSON 문법 주의사항

- 문자열은 반드시 **큰따옴표(`"`)** 사용
- 마지막 항목 뒤에 **쉼표(`,`) 금지**
- 특수문자 이스케이프: `\"` (따옴표), `\\` (백슬래시)

### 2. 이모지 사용

callout이나 certifications에서 이모지를 자유롭게 사용할 수 있습니다:
- 아이디어: 💡
- 성과: 🎯 🏆 ✅
- 기술: ⚡ 🚀 💻
- 경고: ⚠️ 🔴

### 3. 변경 사항 확인

`data.json` 수정 후 저장하면 개발 서버가 자동으로 새로고침됩니다.  
변경이 반영되지 않으면 브라우저에서 새로고침(F5)하세요.

---

## 📝 예시: 새 프로젝트 추가

```json
{
  "title": "AI 챗봇 서비스",
  "period": "2024.06 ~ 2024.08",
  "role": "Full-Stack Developer",
  "description": "Google Gemini API를 활용한 고객 상담 챗봇",
  "techStack": ["React", "FastAPI", "Google Gemini API", "PostgreSQL"],
  "blocks": [
    { "type": "heading", "value": "프로젝트 소개" },
    { "type": "text", "value": "대화형 AI 기반 고객 상담 시스템입니다." },
    { "type": "callout", "icon": "🎯", "value": "응답 시간 80% 단축, 상담 만족도 15% 향상" },
    { "type": "image", "value": "/images/chatbot.png", "caption": "챗봇 인터페이스" }
  ],
  "links": {
    "github": "https://github.com/username/ai-chatbot"
  }
}
```

---

## ❓ 문제 해결

| 문제 | 해결방법 |
|------|----------|
| 페이지가 빈 화면으로 표시됨 | JSON 문법 오류 확인 (쉼표, 따옴표 등) |
| 이미지가 표시되지 않음 | 파일 경로 확인, public/images/ 폴더 내 파일 존재 여부 확인 |
| Google Drive 이미지 안 보임 | 파일 공유 설정이 "링크가 있는 모든 사용자"인지 확인 |

---

**도움이 필요하시면 언제든 문의해 주세요!** 🙂
