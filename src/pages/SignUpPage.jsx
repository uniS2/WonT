import Logo from '@/components/Logo';
import BackButton from '@/components/Sign/BackButton';

import SignPart from '@/components/Sign/SignPart';
import SignInButton from '@/components/Sign/SignInButton';
import { Link } from 'react-router-dom';

// 회원가입 페이지
function SignUpPage() {
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
            <span className="text-2xl font-bold">이메일로 가입하기</span>
          </p>
          <SignPart information="이메일 주소" placeholder="이메일 주소 입력" />
          <SignPart information="핸드폰 번호" placeholder="핸드폰 번호 입력" />
          <SignPart information="인증번호 확인" placeholder="인증번호 확인" />
          <SignPart information="비밀번호" placeholder="비밀번호 입력" />
          <SignPart information="비밀번호 확인" placeholder="비밀번호 확인" />
          <SignInButton text="회원가입" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
