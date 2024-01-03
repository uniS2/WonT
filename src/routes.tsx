import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';

// 경로 예시
const RootLayout = lazy(() => import('./pages/RootLayout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
// const ProtectRoute = lazy(() => import('@/components/ProtectRoute'));
const MainPage = lazy(() => import('./pages/MainPage'));
const TripLocalPage = lazy(() => import('./pages/TripLocalPage'));
const TripCalendarPage = lazy(() => import('./pages/TripCalendarPage'));
const TripEditPage = lazy(() => import('./pages/TripEditPage'));
const TripPlacePage = lazy(() => import('./pages/TripPlacePage'));
const TripHotelPage = lazy(() => import('./pages/TripHotelPage'));
const MySchedule = lazy(() => import('./pages/MyPage/MySchedule'));
const BookmarkPage = lazy(() => import('./pages/MyPage/BookmarkPage'));
const MyScheduleDetailPage = lazy(() => import('./pages/MyScheduleDetailPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const TravelsPage = lazy(() => import('./pages/TravelsPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="triplocal" element={<TripLocalPage />} />
      <Route path="tripcalendar" element={<TripCalendarPage />}></Route>
      <Route path="tripedit/:MyScheduleId" element={<TripEditPage />} />
      <Route
        path="tripplace/:MyScheduleId/:indexId"
        element={<TripPlacePage />}
      />
      <Route
        path="triphotel/:MyScheduleId/:indexId"
        element={<TripHotelPage />}
      />
      <Route path="myschedule" element={<MySchedule />} />
      <Route path="bookmark" element={<BookmarkPage />} />
      <Route path="bookmark/:recommendId" element={<DetailPage />} />
      <Route path="myschedule/:detailId" element={<MyScheduleDetailPage />} />
      <Route path="travels/:travelsId" element={<TravelsPage />} />
    </Route>
  )
);

export default router;
