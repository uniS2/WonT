import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes';
import { Suspense } from 'react';

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
  // 모든 쿼리에 사용되는 기본 옵션
  defaultOptions: {
    queries: {
      // 기본값 정하기
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
