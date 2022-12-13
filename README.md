# Hi Avatar

## <img width="700" src="https://user-images.githubusercontent.com/52659692/204254801-ba77c7b2-4b46-4f8d-bc76-7ba38d2ab34a.png" />

## 🎓 FE 팀원

|                                                            **팀장**                                                            |                                                            **팀원**                                                            |                                                            **팀원**                                                            |                                                            **팀원**                                                            |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                            [😎박지훈](https://github.com/hoona1011)                                            |                                             [😆조현재](https://github.com/guswowh)                                             |                                           [😃천희영](https://github.com/heeyoung-c)                                            |                                            [🥰최수연](https://github.com/boksooni)                                             |
| <img src="https://user-images.githubusercontent.com/91241596/189052099-e675aa30-0f3d-40f5-9492-326a73d6e66f.jpg" width="100"/> | <img src="https://user-images.githubusercontent.com/91241596/189053162-93b840a0-2d9f-41ab-8572-4b556480ff58.png" width="100"/> | <img src="https://user-images.githubusercontent.com/91241596/189053415-ea0e8c42-daf0-49f7-a49f-16e735e0fbd3.png" width="100"/> | <img src="https://user-images.githubusercontent.com/91241596/189053428-059c8e85-6263-416f-a0f4-ee15547d3bc1.jpg" width="100"/> |

---

## 🎬 개요

- `메가바이트스쿨: K-Digital Training FE/BE 개발자 양성 과정 2기` 수강생과 `패스트캠퍼스 UI/UX 교육과정 3기` 수강생이 함께했습니다.
- `AI Park`는 본 프로젝트 파트너 기업입니다. AI Park는 AI 기술을 활용한 아바타 영상 제작을 서비스하고 있습니다.
  - (홈페이지: https://www.aipark.co.kr)
- 본 프로젝트에서는 AI Park 서비스를 모델로 하는 `Hi Avatar` 서비스의 웹페이지와 서버가 구축되었습니다.

---

## ✏기획 방향성

- `Hi Avatar`는 사용자가 더 쉽고 빠르게 영상을 제작할 수 있도록 돕는 서비스입니다.
  - 코로나19와 디지털 전환으로, 비대면 영상 커뮤니케이션의 수요는 날마다 증가하고 있습니다.
  - 그러나 영상 제작에는 많은 비용이 필요하고, 자주 제작하는 경우라면 부담은 더 늘어납니다.
- `Hi Avatar`는 이러한 불편을 해소하기 위해 기획되었습니다.
  - 쉽고 빠른 스크립트 편집 → 영상 제작 과정 편의성 향상
  - 실시간 아바타 영상 생성 → 빠른 결과물 확인 가능
  - 음성 모델, 아바타 자유롭게 변경 → 영상 수정 편의성 향상

---

## 🖥 &nbsp;결과 화면

### 랜딩페이지 (최상단, 최하단)

- 이미지와 캐치프레이즈를 이용해 서비스를 빠르게 소개
- 각 섹션에 `지금 시작해보세요` 버튼을 배치하여 서비스 사용을 유도

![image](https://user-images.githubusercontent.com/93692733/197129448-3c8e4e16-c851-432b-b244-ba3deea61f82.png)
![image](https://user-images.githubusercontent.com/93692733/197129537-63991548-fab8-434a-ac59-52fc97cee314.png)
<br><br>

---

### 프로젝트 및 영상 히스토리 페이지

- 최근 생성한 프로젝트와 영상을 확인
- `프로젝트 생성` 버튼을 눌러 새로운 프로젝트 시작
- 기존 프로젝트를 눌러 마지막 작업 상태로부터 작업 시작
- 영상 위 툴바를 이용해 작은/큰 화면으로 재생 가능
- `Download` 버튼을 눌러 생성된 영상 다운로드

![image](https://user-images.githubusercontent.com/93692733/197132138-bb6be0a0-aa28-4b0b-a31a-7296d5d4a399.png)
<br><br>

---

### 텍스트 편집 페이지 (입력 전)

- `음성 파일 업로드하기`와 `텍스트로 입력하기` 중 스크립트 입력 옵션을 선택
  - `텍스트로 입력하기` 선택 시 텍스트 입력 modal 창 팝업
  - `음성 파일 업로드하기` 선택 시 사용자 음성파일 업로드 창 팝업

![image](https://user-images.githubusercontent.com/93692733/197133335-2ccaa4b4-797f-465b-8230-59936cb50ad7.png)
<br><br>

---

### 텍스트 입력 페이지 (modal)

- 줄글 텍스트를 복사 및 붙여넣기하여 영상에 사용할 스크립트 텍스트를 입력
- 텍스트는 마침표를 기준으로 분리되어 텍스트 편집 페이지에 문장별 컴포넌트를 생성

![image](https://user-images.githubusercontent.com/93692733/197133076-e56238f5-b8fa-407d-9370-eba4ecf2ed47.png)
<br><br>

---

### 텍스트 편집 페이지 (입력 후)

- 문장별 텍스트 편집, 문장 간 호흡 간격 조정 가능
- 새로운 문장 컴포넌트 추가, 기존 컴포넌트 삭제 가능
- 문장별 음성 미리듣기 가능
- 현재 작업을 진행 중인 문장을 전체 텍스트에서 하이라이트 처리
- 전체 텍스트 음성 미리듣기 및 다운로드 가능

![image](https://user-images.githubusercontent.com/93692733/197132873-2f788933-7925-4003-baaf-2a408d199aef.png)
<br><br>

---

### 텍스트 편집 페이지 (사이드 탭바)

- 현재 편집하고 있는 스크립트를 전체적으로 확인하는 `전체 텍스트` 탭바
- TTS(Text-To-Speech) 음성(성별, 언어, 음성 모델)을 선택하는 `음성 모델` 탭바
- 발화 속도, 톤(피치), 호흡 간격을 전체적으로 조정하는 `음성 옵션` 탭바'
- 위 3개 탭바를 텍스트 편집 페이지에 통합

![image](https://user-images.githubusercontent.com/93692733/197134945-ad3d78f3-dfcf-4833-ba94-5ac209c41ece.png)
<br><br>

---

### 아바타 선택 페이지

- 아바타 종류(얼굴), 아바타 스타일(의상, 주요 제스처, 자세 등), 영상 배경 선택 가능
- 선택한 옵션에 따른 미리보기 이미지 생성
- 이전 페이지(텍스트 편집)에서 선택한 음성 모델, 음성 옵션을 재확인 가능
- `완료` 버튼 클릭 시, 백엔드 서버에 영상 합성을 요청

![image](https://user-images.githubusercontent.com/93692733/197133741-a0898bec-910c-43ab-849a-3575bf692322.png)
<br><br>

---

## ✨ 결과물

> 배포 주소

- https://hi-avatar.netlify.app/

> 깃헙

- FE: https://github.com/HiAvatar/frontend

- BE: https://github.com/HiAvatar/backend

> 협업툴

- 노션: https://quickest-asterisk-75d.notion.site/BE-FE2-UXUI3-_8-ce9b98e567014fe1bc69449e99ca35a8

> UI/UX

- 피그마: https://www.figma.com/file/4jLVhffMd0cyfbouOm9FYi/%EB%B0%95%EC%A7%80%EC%9D%80?node-id=50%3A789
  <img width="700" src="https://user-images.githubusercontent.com/77940847/204257258-30e24b49-b398-4c4c-b6f6-2954b571031d.png" />

---

## 📚 사용한 메인 기술 및 라이브러리

<img src="https://img.shields.io/badge/html-ededed?style=for-the-badge&logo=html5&logoColor=E34F26"> <img src="https://img.shields.io/badge/css-ededed?style=for-the-badge&logo=css3&logoColor=1572B6"> <img src="https://img.shields.io/badge/javaScript-ededed?style=for-the-badge&logo=javaScript&logoColor=F7DF1E"> <img src="https://img.shields.io/badge/TypeScript-ededed?style=for-the-badge&logo=TypeScript&logoColor=3178C6">
<br>
<img src="https://img.shields.io/badge/react-ededed?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/redux-ededed?style=for-the-badge&logo=redux&logoColor=764ABC"> <img src="https://img.shields.io/badge/React Router-ededed?style=for-the-badge&logo=ReactRouter&logoColor=CA4245"/> <img src="https://img.shields.io/badge/styled components-ededed?style=for-the-badge&logo=styled-components&logoColor=DB7093">
<br>
<img src="https://img.shields.io/badge/yarn-ededed?style=for-the-badge&logo=yarn&logoColor=2C8EBB"> <img src="https://img.shields.io/badge/Prettier-ededed?style=for-the-badge&logo=Prettier&logoColor=F7B93E"> <img src="https://img.shields.io/badge/ESLint-ededed?style=for-the-badge&logo=ESLint&logoColor=4B32C3"> <img src="https://img.shields.io/badge/Netlify-ededed?style=for-the-badge&logo=Netlify&logoColor=00C7B7">

## ✨ 기술 선정 이유

---

### **Redux Toolkit**

- 컴포넌트 간의 용이한 데이터 전달을 위해 전역 상태 관리가 필요했습니다
- immer, thunk 등의 패키지 의존성을 줄일 수 있습니다
- Redux의 단점인 보일러 플레이트가 줄어듭니다

### **RTK Query(Redux Toolkit)**

- 컴포넌트 코드와 비동기 요청 코드의 분리가 필요했습니다
- 로딩, 에러 상태 관리가 간편합니다
- 데이터 캐싱을 지원합니다

### **Styled-components**

- props를 활용한 동적 스타일링이 간편합니다
- global theme로 스타일링 코드 재사용과 통일성을 높일 수 있었습니다

## 📅 기간

**2022.9.2 ~ 2022.10.14**

---

## 👯‍♀️ 협업방식

> **회의**

- 노션을 사용하여 회의 로그를 관리하였습니다.

<img width="700" src="https://user-images.githubusercontent.com/77940847/204256003-04974ca0-4607-4edf-a2c4-97843d205a1a.png" />

> **개발**

- 자체적인 커밋, 이슈, PR 컨벤션을 정하여 개발을 진행했습니다

<img width="700" src="https://user-images.githubusercontent.com/77940847/204253010-212db678-f224-4c0f-813e-94a41a3ac21e.png" />

- 코드 리뷰를 통한 PR을 진행했습니다

<img width="700" src="https://user-images.githubusercontent.com/77940847/204253998-737a2aea-25fb-4ce6-8547-a2c1dc104c54.png" />

## API 명세서

- 프론트와 백엔드가 지속적인 소통을 통해 필요한 API 목록들을 확정했습니다.
- API 명세서를 작성하여 개발의 효율성을 높였습니다.

[<img width="700" src="https://user-images.githubusercontent.com/77940847/204256449-62df30e0-a078-45ea-8dbb-4ed6259df537.png" />](https://www.notion.so/API-4f896b676d78455a9f8dc0878cc5a025)
