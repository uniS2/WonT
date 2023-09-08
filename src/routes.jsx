import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
// vercel 배포시 createHashRouter 사용

// 경로 예시
const MainPage = lazy(() => import('./pages/MainPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="landing" element={<LandingPage />} />
    </Route>
  )
);

export default router;
