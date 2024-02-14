# [멋사 6기🦁 | 멋쟁이 🔟조 | React 프로젝트]

> **[@uniS2](https://github.com/uniS2): React + JavaScript 프로젝트 개인 레포** <br/>
> **[멋쟁이 🔟조](https://github.com/FRONTENDSCHOOL6/WonT): TypeScript, Next.js 마이그레이션 진행 중**

![readme-logo](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/dcc77ab4-96b6-4329-92bb-fcc80a3e079d)

## 📋목차

0. [🎮 프로젝트 사용법](#-프로젝트-사용법)
1. [✈️ 프로젝트 소개](#-프로젝트-소개)
2. [📖 개인 작업 담당페이지](#-개인-작업-담당페이지)
3. [📅 프로젝트 일정](#-프로젝트-일정)
4. [📝 기술스택](#-기술스택)
5. [🔪 컨벤션](#-컨벤션)
6. [📂 폴더구성](#-폴더구성)
7. [🌈 유저 플로우](#-유저플로우)
8. [🎥 개인 작업 화면구성](#-개인-작업-화면구성)

<br/>

## 🎮 프로젝트 사용법

##### 기존 회원 로그인시
- 아이디: uniS2@naver.com
- 비밀번호: usertest1

##### 패키지 설치

```
pnpm i / pnpm install
```

##### 클라이언트 실행

```
pnpm dev
```

<br/>

## ✈️ 프로젝트 소개

- 프로젝트 이름 : WonT ( We on Trip )
- 프로젝트 목적 : 여행 일정 관리 구현
- 프로젝트 기간 : 230831 ~ 230924
- 배포주소 : [WonT](https://weontrips.vercel.app/)

![readme-main](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/907787e3-e95f-4794-b278-e18bb3be214e)

<br/>

## 📖 개인 작업 담당페이지

#### 📌정소이

- **전체 페이지**

  - Zustand 및 TanStack Query 라이브러리 사용
  - `usdNavigate()` 또는 `<Link />` 를 이용한 경로 이동

- **지역 선택 페이지 (TripLocalPage)**

  - 데이터 Read, Create (GET, POST)
  - localStore() 이용한 상태 관리

- **날짜 선택 페이지 (TripCalendarPage)**

  - 데이터 Update (PUT)
  - useDateStore() 이용한 상태 관리
  - 로그인 유저 정보를 이용한 TanStack Query 활용
  - react-calendar 활용한 달력 커스텀 및 접근성 개선

- **장소 및 숙소 선택 페이지 (TripPlacePage, MyHotelPage)**

  - 로그인 유저 정보 활용한 TanStack Query 활용
  - useToggleTripMenuStore(), useMapStore(), useScheduleStore() 이용한 상태관리
    
  - kakao Map API 활용한 선택 지역 실시간 정보 렌더링 기능 구현
    - 현재 선택한 지역으로 중심 좌표 검색 및 설정 (지도 기본값)
    - 장소/숙소 카테고리 검색결과 마커로 표시 (최대 15개)
    - 마커로 표시된 장소목록 렌더링 및 선택 버튼 구현
    - 지도 이동시 중심 좌표 업데이트 및 리렌더링

- **나의 일정 상세 페이지 (MyScheduleDetailPage)**
  
  - 데이터 Read, Delete (GET, DELETE)
  - useButtonStore(), useToggleTripMenuStore() 이용한 상태관리

<br/>

## [📅 프로젝트 일정](https://www.notion.so/10-abb34133d4cd4826b9533369f20ce9e7)

![readme-calender](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/7d7ccc5f-0af9-4762-8d1d-d2dfde6c64af)

<br/>

## 📝 기술스택
![readme-stack](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/f5424f3a-9727-4e74-8336-b621c44004df)

<br/>

## 🔪 컨벤션

### [Commit Convention ⚡](https://github.com/FRONTENDSCHOOL6/react-project-10/wiki/Commit-Convention-%E2%9A%A1)

### [Coding Convention ⚡](https://github.com/FRONTENDSCHOOL6/react-project-10/wiki/Coding-Convention-%E2%9A%A1)

### [MileStone ⚡](https://github.com/orgs/FRONTENDSCHOOL6/projects/29/views/1)

<br/>

## 📂 폴더구성

<details>
<summary>폴더구성</summary>
<div markdown="1">
  
```
📦src
 ┣ 📂api
 ┃ ┗ 📜pocketbase.js
 ┣ 📂components
 ┃ ┣ 📂Detail
 ┃ ┃ ┗ 📜DetailInfo.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜BackIcon.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜TripHeader.jsx
 ┃ ┃ ┗ 📜UserIcon.jsx
 ┃ ┣ 📂Landing
 ┃ ┃ ┣ ...
 ┃ ┣ 📂Main
 ┃ ┃ ┣ ...
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ ...
 ┃ ┣ 📂MyScheduleDetail
 ┃ ┃ ┣ 📜DayScheduleItem.jsx
 ┃ ┃ ┣ 📜ToggleTotalSchedule.jsx
 ┃ ┃ ┣ 📜TotalScheduleSummary.jsx
 ┃ ┃ ┣ 📜TotalScheduleView.jsx
 ┃ ┃ ┣ 📜TotalScheduleViewHotelDay.jsx
 ┃ ┃ ┣ 📜TotalScheduleViewImageList.jsx
 ┃ ┃ ┣ 📜TotalScheduleViewTitle.jsx
 ┃ ┃ ┗ 📜TotalScheduleViewTopic.jsx
 ┃ ┣ 📂Sign
 ┃ ┃ ┣ ...
 ┃ ┣ 📂Spinner
 ┃ ┃ ┣ 📜spinner.css
 ┃ ┃ ┗ 📜Spinner.jsx
 ┃ ┣ 📂TripCalendar
 ┃ ┃ ┗ 📜TripCalendar.jsx
 ┃ ┣ 📂TripEdit
 ┃ ┃ ┣ 📜AddPlan.jsx
 ┃ ┃ ┣ 📜ButtonMedium.jsx
 ┃ ┃ ┣ 📜PlacePlan.jsx
 ┃ ┃ ┣ 📜PlanDate.jsx
 ┃ ┃ ┣ 📜ScheduleMap.jsx
 ┃ ┃ ┣ 📜SelectHotelMap.jsx
 ┃ ┃ ┣ 📜TripPlaneIcon.jsx
 ┃ ┃ ┗ 📜TripSchedule.jsx
 ┃ ┣ 📂TripLocal
 ┃ ┃ ┣ 📜ButtonSmall.jsx
 ┃ ┃ ┣ 📜LocalImage.jsx
 ┃ ┃ ┣ 📜LocalItem.jsx
 ┃ ┃ ┗ 📜LocalName.jsx
 ┃ ┣ 📂TripSelect
 ┃ ┃ ┣ 📜AddButton.jsx
 ┃ ┃ ┣ 📜AddPlaceItem.jsx
 ┃ ┃ ┣ 📜AddPlaceItemContent.jsx
 ┃ ┃ ┣ 📜CheckIcon.jsx
 ┃ ┃ ┣ 📜HambugerButton.jsx
 ┃ ┃ ┣ 📜HambugerIcon.jsx
 ┃ ┃ ┣ 📜MapHotel.jsx
 ┃ ┃ ┣ 📜MapPlace.jsx
 ┃ ┃ ┣ 📜PlusIcon.jsx
 ┃ ┃ ┣ 📜TripHotelItem.jsx
 ┃ ┃ ┣ 📜TripPlaceImage.jsx
 ┃ ┃ ┣ 📜TripPlaceInfo.jsx
 ┃ ┃ ┣ 📜TripPlaceItem.jsx
 ┃ ┃ ┗ 📜TripPlanMenu.jsx
 ┃ ┣ 📜BookMark.jsx
 ┃ ┣ 📜ButtonLarge.jsx
 ┃ ┣ 📜CloseIcon.jsx
 ┃ ┣ 📜DefaultImage.jsx
 ┃ ┣ 📜DeleteButton.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜LocationIcon.jsx
 ┃ ┣ 📜Logo.jsx
 ┃ ┣ 📜Map.jsx
 ┃ ┣ 📜Modal.jsx
 ┃ ┣ 📜PageHeader.jsx
 ┃ ┣ 📜ProtectRoute..jsx
 ┃ ┣ 📜ToggleDownIcon.jsx
 ┃ ┣ 📜ToggleUpIcon.jsx
 ┃ ┣ 📜TripPlan.jsx
 ┃ ┣ 📜TripPlanEditButton.jsx
 ┃ ┗ 📜TripTitle.jsx
 ┣ 📂contexts
 ┃ ┗ 📜Auth.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetchData.js
 ┃ ┣ 📜useFetchMySchedule.js
 ┃ ┣ 📜useRecommendsList.js
 ┃ ┣ 📜useScheduleList.js
 ┃ ┣ 📜useStorage.js
 ┃ ┗ 📜useTravlesList.js
 ┣ 📂pages
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ ...
 ┃ ┣ 📜DetailPage.jsx
 ┃ ┣ 📜LandingPage.jsx
 ┃ ┣ 📜MainPage.jsx
 ┃ ┣ 📜MyScheduleDetailPage.jsx
 ┃ ┣ 📜RootLayout.jsx
 ┃ ┣ 📜SignInPage.jsx
 ┃ ┣ 📜SignUpPage.jsx
 ┃ ┣ 📜TravelsPage.jsx
 ┃ ┣ 📜TripCalendarPage.jsx
 ┃ ┣ 📜TripEditPage.jsx
 ┃ ┣ 📜TripHotelPage.jsx
 ┃ ┣ 📜TripLocalPage.jsx
 ┃ ┗ 📜TripPlacePage.jsx
 ┣ 📂store
 ┃ ┣ 📜bookmarkStore.js
 ┃ ┣ 📜buttonStore.js
 ┃ ┣ 📜createStore.js
 ┃ ┣ 📜dateStore.js
 ┃ ┣ 📜localStore.js
 ┃ ┣ 📜mapStore.js
 ┃ ┣ 📜markerStore.js
 ┃ ┣ 📜memoStore.js
 ┃ ┣ 📜scheduleStore.js
 ┃ ┣ 📜selectRangeStore.js
 ┃ ┗ 📜toggleTripMenuStore.js
 ┣ 📂styles
 ┃ ┣ 📜calendar.css
 ┃ ┗ 📜tailwind.css
 ┣ 📂utils
 ┃ ┣ 📜createRecord.js
 ┃ ┣ 📜debounce.js
 ┃ ┣ 📜encoding.js
 ┃ ┣ 📜getDDay.js
 ┃ ┣ 📜getLocalName.js
 ┃ ┣ 📜getNode.js
 ┃ ┣ 📜getPocketHostImageURL.js
 ┃ ┣ 📜getPocketHostURL.js
 ┃ ┣ 📜getRangeDay.js
 ┃ ┣ 📜getTripDate.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜propTypes.js
 ┃ ┗ 📜updateRecord.js
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜routes.jsx
```
  
</div>
</details>

<br/>

## 🌈 유저플로우

![readme-Wont Diagram](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/10dbbc8e-f3c0-46a4-8c71-ec53accc3609)

<br/>

## 🎥 개인 작업 화면구성

- 유저플로우 순서로 구성하였습니다.

| TripLocalPage | TripCalendarPage |                                                                                
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![readme-mainpage](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/570ea4fb-2118-48bf-b927-1e726058bdf4) | ![1 TripLocal_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/e5c4b8d6-9193-4e4d-801b-0a6b9b084dbd) |

| TripPlacePage | MyHotelPage | MyScheduleDetailPage  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![3 TripPlace_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/4be89a77-b194-4ff8-aea9-8e331a4e86f1) | ![4 TripHotel_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/3cc4dfa2-411c-484e-ad2f-47ec2d469369) | ![5 MySchedule_Detail_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/64658438-a428-4261-98db-f8477a04343e) |


<br/>

**[⬆ back to top](#📋목차)**
