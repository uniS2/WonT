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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="landing" element={<LandingPage />} />
      <Route index element={<MainPage />} />
      <Route path="triplocal" element={<TripLocalPage />} />
    </Route>
  )
);

export default router;
