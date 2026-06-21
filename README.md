# 📘 Devcourse 학습 저장소 

**프로그래머스 데브코스 풀스택** 강의에서 학습한 코드를 정리한 저장소입니다.
백엔드(Node.js) 기초부터 프론트엔드(React/TypeScript)까지, 강의에서 다룬 **개념별 예제**와 **미니 프로젝트**를 모았습니다.

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
</p>

---

## 📁 디렉터리 구조

```
Devcourse
├── BE/                     # 백엔드 — JavaScript / Node.js / Express / DB
│   ├── node-base/          # JS 문법 · HTTP/Express · 내장모듈 · npm 패키지 데모
│   ├── express-base/       # Express 프로젝트 골격 (express-generator)
│   ├── web-base/           # 순수 http 모듈 서버
│   ├── TennisMarket/       # 🛒 쇼핑몰 미니 프로젝트
│   ├── youtube-demo/       # 🎬 JWT 인증 + DB REST API
│   ├── random-project/     # Faker 더미 데이터
│   └── git-base/           # Git 실습
│
└── FE/                     # 프론트엔드 — JavaScript / TypeScript / React
    ├── js-demo.js          # JS 함수 심화
    ├── typescript-demo/    # TypeScript 기초 & OOP
    └── ReactExam/
        ├── my-app/         # React 기본 (CRA)
        ├── my-app-ts/      # React + TypeScript 컴포넌트
        ├── todo-list/      # ✅ Todo 앱 
        └── react-drag-drop-app/   # 🔀 드래그 앤 드롭
```

---

## 🔵 BE — 백엔드

### 1. 개념 학습

위치: `BE/node-base/`

<details>
<summary><b>JavaScript 기초 문법</b> — <code>demo-js/</code></summary>


| 분류 | 파일 | 학습 내용 |
|------|------|-----------|
| 자료구조 | `array-demo.js` | 배열 · 구조 분해 할당 |
| | `object-demo.js` | 객체 리터럴, 프로퍼티 접근 |
| 함수·스코프 | `function-demo.js` | 함수 선언식 · 표현식 · 화살표 함수 |
| | `scope-demo.js` | 블록 스코프(const/let) vs 함수 스코프 |
| 비교·검사 | `equal-demo.js` | 동등(`==`) vs 일치(`===`) |
| | `empty-demo.js` | 빈 객체 판별 (`Object.keys()`) |
| 순회 | `foreach-demo.js` | `forEach()` 순회 |
| | `map-demo.js` | `map()` vs `forEach()` 반환값 차이 |
| 비동기 | `promise-demo.js` | Promise 생성과 `then()` |
| | `promise-chain-demo.js` | Promise 체이닝 |
| | `async-demo.js` | async 함수 기초 |
| | `await-demo.js` | async/await 순차 처리 |
| | `non-blocking-demo.js` | 비동기 실행 (`setTimeout`) |
| 예외 처리 | `try-catch-demo.js` | try/catch |
| | `throw-demo.js` | 에러 객체 throw |

</details>

<details>
<summary><b>HTTP & Express REST API 기초</b> — <code>demo-api/</code></summary>

| 파일 | 학습 내용 |
|------|-----------|
| `http-demo.js` | Node `http` 모듈로 서버 생성 |
| `express-demo.js` | Express 기본 앱 / GET 라우트 |
| `say-demo.js` | 여러 GET 라우트, JSON 응답 |
| `params-demo.js` | 경로 파라미터(`:param`) · 쿼리스트링 |
| `object-api-demo.js` | 라우트 파라미터 분기 처리 |
| `exception-demo.js` | `find()` 활용 + 404 에러 상태 코드 |
| `youtuber-demo.js` | Map을 메모리 DB로 쓰는 CRUD REST API |
| `map-demo.js` | Map 자료구조로 데이터 저장/조회 |

</details>

<details>
<summary><b>내장 모듈 & npm 패키지</b> — <code>demo-node/</code>, <code>demo-npm/</code></summary>

| 파일 | 학습 내용 |
|------|-----------|
| `demo-node/crypto-demo.js` | `crypto` 비밀번호 해싱 (pbkdf2, salt) |
| `demo-npm/jwt-demo.js` | JWT 토큰 발급/검증 (`jsonwebtoken`) |
| `demo-npm/authorization-demo.js` | JWT 인증 흐름 (쿠키 저장, 헤더 검증) |
| `demo-npm/figlet-demo.js` | `figlet` ASCII 아트 출력 |

</details>

### 2. 미니 프로젝트

| 프로젝트 | 설명 | 핵심 기술 |
|----------|------|-----------|
| **`youtube-demo/`** | 사용자·채널 관리 REST API  — 회원가입/로그인, 채널 CRUD | Express · **MariaDB** · **JWT** · express-validator · **Swagger** |
| **`TennisMarket/`** | 테니스 라켓 쇼핑몰 — 상품 그리드, 이미지 서빙, 주문/주문내역 저장 | 순수 `http` · MariaDB · `fs` |
| **`web-base/`** | 프레임워크 없이 만든 HTTP 서버 — 라우팅 직접 구현, 로그인 폼 | 순수 `http` · MariaDB |
| **`express-base/`** | express-generator MVC 골격 | Express · **Jade(Pug)** · morgan · cookie-parser |
| **`random-project/`** | 가짜 사용자 데이터 생성 API (`GET /fake/users?num=10`) | Express · `@faker-js/faker` |
| **`git-base/`** | 브랜치/커밋 연습용 텍스트 파일 (코드 없음) | Git |

---

## 🟢 FE — 프론트엔드

### 1. 개념 학습

<details>
<summary><b>JavaScript 함수 심화</b> — <code>js-demo.js</code></summary>

| 파일 | 학습 내용 |
|------|-----------|
| `js-demo.js` | 고차 함수, 기본/나머지 매개변수, IIFE, 재귀, 클로저, 콜백 |

</details>

<details>
<summary><b>TypeScript 기초 & OOP</b> — <code>typescript-demo/</code></summary>

| 파일 | 학습 내용 |
|------|-----------|
| `app.ts` | 타입 표기, 인터페이스, enum/유니온 타입, 튜플, readonly, 스프레드 |
| `opp.ts` | 객체지향 — 클래스, private 속성, getter/setter |

</details>

<details>
<summary><b>React 컴포넌트 연습</b> — <code>ReactExam/my-app</code>, <code>my-app-ts/</code></summary>

| 파일 | 학습 내용 |
|------|-----------|
| `my-app/` | CRA 기본 템플릿 (첫 React 세팅 확인용) |
| `my-app-ts/ App.tsx` | 컴포넌트 조합, props/children |
| `ClassCom.tsx` | 클래스형 컴포넌트 (`React.Component`, `render()`) |
| `FuncCom.tsx` | 함수형(화살표) 컴포넌트 |
| `Maptest.tsx` | `map()`으로 리스트 렌더링, key |
| `MyWether.tsx` | props 인터페이스 타입 지정, `React.ReactNode` |

</details>

### 2. 미니 프로젝트

| 프로젝트 | 설명 | 핵심 기술 |
|----------|------|-----------|
| **`todo-list/`** | Todo 앱 — 할 일 추가/삭제/완료, 모달, 시계 | React 19 · **TypeScript** · react-bootstrap |
| **`react-drag-drop-app/`** | 리스트 순서 변경 (드래그 앤 드롭) | React 19 · react-beautiful-dnd |



