import SignInButton from '@/components/SignInButton';
import BackButton from '@/components/SignIn/BackButton';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import SignPart from '@/components/SignPart';

// 로그인 페이지
function SignInPage() {
  return (
    <div className="mx-auto flex min-h-[50rem] max-w-[80rem] flex-col items-center px-5">
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
          <SignPart infomation="이메일 주소" placeholder="이메일 주소 입력" />
          <SignPart infomation="비밀번호" placeholder="비밀번호 입력" />
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
