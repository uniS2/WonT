import LandingPage from './pages/LandingPage';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <LandingPage />
    </>
  );
}

export default App;
