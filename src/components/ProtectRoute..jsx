import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts/Auth';
import Spinner from '@/components/Spinner/Spinner';

export default function ProtectRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const { pathname, search, hash } = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuth) {
      import.meta.env.MODE === 'development';

      console.log('a');
      return navigate('/signin', { state: { wishLocationPath } });
    }

    const cleanup = setTimeout(() => setIsLoading(false));

    return () => {
      clearTimeout(cleanup);
    };
  }, [isLoading, isAuth, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return children;
}
