import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import LandingPagePartBottom from '@/components/Landing/LandingPagePartBottom';
import LandingPagePartMiddle from '@/components/Landing/LandingPagePartMiddle.jsx';
import LandingPagePartTop from '@/components/Landing/LandingPagePartTop';
import SigninButton from '@/components/Landing/SigninButton';
import SignUpButton from '@/components/Landing/SignUpButton';

// 렌딩 페이지
function LandingPage() {
  return (
    <div className="mx-auto flex min-h-[50rem] max-w-[80rem] flex-col items-center">
      <h1 className="sr-only">LandingPage</h1>

      <div className="h-[28.75rem] w-full bg-LandingPage bg-center bg-no-repeat">
        <div className=" flex flex-col items-center pt-[10.625rem]">
          <Logo
            width={'11.375rem'}
            height={'4.1688rem'}
            colors={['#fff', '#fff']}
          />

          <div className="flex flex-col gap-[0.9375rem] px-5 pb-[2.625rem] pt-[4.143125rem]">
            <SigninButton />
            <SignUpButton />
          </div>
        </div>
      </div>
      <div className="flex h-screen flex-col gap-5 px-5 pt-[3.125rem]">
        <LandingPagePartTop />
        <LandingPagePartMiddle />
        <LandingPagePartBottom />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
