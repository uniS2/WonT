import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes';
import Spinner from './components/Spinner/Spinner';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
  // 모든 쿼리에 사용되는 기본 옵션
  defaultOptions: {
    queries: {
      // 기본값 정하기
    },
  },
});

export default function App() {
  return (
    <>
      {/* <HelmetProvider> */}
      {/* <ThemeProvider> */}
      {/* <AuthProvider> */}
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
        </Suspense>
        {/* 텐스텍 쿼리 개발 도구 */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
