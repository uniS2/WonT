import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
// vercel 배포시 createHashRouter 사용

// 경로 예시
const RootLayout = lazy(() => import('./components/RootLayout'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const TripLocalPage = lazy(() => import('./pages/TripLocalPage'));
const TripEditPage = lazy(() => import('./pages/TripEditPage'));
const MyPage = lazy(() => import('./pages/MyPage/MyPage'));
const MySchedule = lazy(() => import('./pages/MyPage/MySchedule'));
const BookmarkPage = lazy(() => import('./pages/MyPage/BookmarkPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="triplocal" element={<TripLocalPage />} />
      <Route path="tripedit" element={<TripEditPage />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="myschedule" element={<MySchedule />} />
      <Route path="bookmarkpage" element={<BookmarkPage />} />
    </Route>
  )
);

export default router;
