import { createContext, useEffect, useState, useContext } from 'react';
import { string, node } from 'prop-types';
import pocketbase from '@/api/pocketbase';
import useStorage from '@/hooks/useStorage';

// context 생성
const AuthContext = createContext();

// 초기 인증 상태
const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};

// provider 작성
function AuthProvider({ displayName = 'AuthProvider', children }) {
  const { storageData } = useStorage('pocketbase_auth');

  useEffect(() => {
    if (storageData) {
      const { token, model } = storageData;
      setAuthState({
        isAuth: !!model,
        user: model,
        token,
      });
    }
  }, [storageData]);

  // 인증상태
  const [authState, setAuthState] = useState(initialAuthState);

  // 업데이트 될 때만 상태 변경
  useEffect(() => {
    const unsub = pocketbase.authStore.onChange((token, model) => {
      setAuthState((state) => ({
        ...state,
        isAuth: !!model,
        user: model,
        token,
      }));
    });
    return () => {
      unsub?.();
    };
  }, []);

  const signUp = async (registerUser) => {
    return await pocketbase.collection('users').create(registerUser);
  };

  const signIn = async (usernameOrEmail, password) => {
    return await pocketbase
      .collection('users')
      .authWithPassword(usernameOrEmail, password);
  };

  const signOut = async () => {
    return await pocketbase.authStore.clear();
  };

  const cancelMembership = async (recordId) => {
    return await pocketbase.collection('users').delete(recordId);
  };

  const authValue = {
    ...authState,
    signUp,
    signIn,
    signOut,
    cancelMembership,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  displayName: string,
  children: node.isRequired, // React.ReactNode
};

export default AuthProvider;

export const useAuth = () => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용할 수 있습니다.');
  }

  return authValue;
};
