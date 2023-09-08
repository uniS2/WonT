import router from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Suspense */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
