import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';

// vercel 배포시 createHashRouter 사용

// 경로 예시
const RootLayout = lazy(() => import('./pages/RootLayout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const TripLocalPage = lazy(() => import('./pages/TripLocalPage'));
const TripCalendarPage = lazy(() => import('./pages/TripCalendarPage'));
const TripEditPage = lazy(() => import('./pages/TripEditPage'));
const TripPlacePage = lazy(() => import('./pages/TripPlacePage'));
const TripHotelPage = lazy(() => import('./pages/TripHotelPage'));
const MyPage = lazy(() => import('./pages/MyPage/MyPage'));
const MySchedule = lazy(() => import('./pages/MyPage/MySchedule'));
const BookmarkPage = lazy(() => import('./pages/MyPage/BookmarkPage'));
const MyScheduleDetailPage = lazy(() => import('./pages/MyScheduleDetailPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="triplocal" element={<TripLocalPage />} />
      <Route path="tripcalendar" element={<TripCalendarPage />}></Route>
      {/* <Route path="triplocal/:localId" element={<TripCalendarPage />}></Route> */}
      {/* <Link to={`/triplocal/${item.id}`}>
              <button>예</button>
            </Link> */}
      <Route path="tripedit" element={<TripEditPage />} />
      <Route path="tripplace" element={<TripPlacePage />} />
      <Route path="triphotel" element={<TripHotelPage />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="myschedule" element={<MySchedule />} />
      <Route path="bookmark" element={<BookmarkPage />} />
      <Route path="myschedule/detail" element={<MyScheduleDetailPage />} />
      <Route path="detail" element={<DetailPage />} />
    </Route>
  )
);

export default router;
