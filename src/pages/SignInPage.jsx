import pocketbase from '@/api/pocketbase';
import SignInButton from '@/components/Sign/SignInButton';
import BackButton from '@/components/Sign/BackButton';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import SignPart from '@/components/Sign/SignPart';
import { useState } from 'react';
import debounce from '@/utils/debounce';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FailModal from '@/components/Sign/FailModal';
// import { useAuth } from '@/contexts/Auth';    // 사용할건지 고민

// 로그인 페이지

function SignInPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showFailModal, setShowFailModal] = useState(false);
  // const { isAuth } = useAuth();  // 사용할건지 고민

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await pocketbase
        .collection('users')
        .authWithPassword(formState.email, formState.password);
      console.log(response);

      if (!state) {
        navigate('/main');
      } else {
        const { withLocationPath } = state;
        navigate(withLocationPath === '/signin' ? '/main' : withLocationPath);
      }
    } catch (error) {
      setShowFailModal(true);
      // console.log(error); //modal 로 바꾸기
    }
  };

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log({ [name]: value });
    setFormState({
      ...formState,
      [name]: value,
    });
  }, 400);

  return (
    <div className="container mx-auto flex flex-col items-center px-5">
      <h1 className="sr-only">SignInPage</h1>
      <div className="h-[8.125rem] w-[20rem] pt-[2.125rem]">
        <Link to="/">
          <BackButton />
        </Link>
      </div>
      <div className="mx-auto flex min-h-[50rem] max-w-[80rem] flex-col items-center px-5">
        <Logo width={'10.161rem'} height={'2.625rem'} />

        <div className="flex flex-col items-center gap-[1.688rem] pt-3">
          <p>
            <span className="text-2xl font-bold">이메일로 로그인</span>
          </p>
          <form
            onSubmit={handleSignIn}
            className="flex flex-col items-center gap-10"
          >
            <SignPart
              information="이메일 주소"
              placeholder="이메일 주소 입력"
              type="email"
              defaultValue={formState.email}
              onChange={handleInput}
              name="email"
            />
            <SignPart
              information="비밀번호"
              placeholder="비밀번호 입력"
              type="password"
              defaultValue={formState.password}
              onChange={handleInput}
              name="password"
            />
            <SignInButton type="submit">로그인</SignInButton>
            <FailModal
              isOpen={showFailModal}
              onClose={() => setShowFailModal(false)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
