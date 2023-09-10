import { lazy } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
// vercel 배포시 createHashRouter 사용

// 경로 예시
const RootLayout = lazy(() => import('./components/RootLayout'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
// routes.jsx 예시
const TripLocalPage = lazy(() => import('./pages/TripLocalPage'));

<Route path="triplocal" element={<TripLocalPage />} />;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="landing" element={<LandingPage />} />
      <Route path="SignIn" element={<SignInPage />} />
      <Route path="SignUp" element={<SignUpPage />} />
      <Route index element={<MainPage />} />
    </Route>
  )
);

export default router;
