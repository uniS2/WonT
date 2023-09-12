import Logo from '@/components/Logo';
import SignInButton from '@/components/Sign/SignInButton';
import SignUpButton from '@/components/Sign/SignUpButton';
import LandingPagePartOne from '@/components/Landing/LandingPagePartOne';
import LandingPagePartTwo from '@/components/Landing/LandingPagePartTwo.jsx';
import LandingPagePartThree from '@/components/Landing/LandingPagePartThree';
import LandingPagePartFour from '@/components/Landing/LandingPagePartFour';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 렌딩

// framer-motion 함수
function LandingPage() {
  const MotionDiv = ({ children, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto flex min-h-[50rem] flex-col">
      {/* // 반응형 할땐 안건드려되고 . */}
      <h1 className="sr-only">LandingPage</h1>

      <MotionDiv delay={0.8}>
        <div className="bg-LandingCarouselThree lg:w-[80rem] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-center pt-[10.625rem]">
            <MotionDiv delay={1.5}>
              <Logo
                width={'11.375rem'}
                height={'4.1688rem'}
                colors={['#fff', '#fff']}
              />
            </MotionDiv>

            <MotionDiv delay={3.5}>
              <div className="flex flex-col gap-[0.9375rem] px-5 pb-[2.625rem] pt-[4.143125rem]">
                <Link to="/signin">
                  <SignInButton text="로그인" />
                </Link>
                <Link to="/signup">
                  <SignUpButton text="회원가입" />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>

      <div className="flex flex-col gap-5 px-5 pt-[3.125rem]">
        <div className="lg:flex lg:gap-5">
          <MotionDiv delay={2.5}>
            <LandingPagePartOne />
          </MotionDiv>
          <MotionDiv delay={2.5}>
            <LandingPagePartTwo />
          </MotionDiv>
        </div>
        <div className="lg:flex lg:gap-5">
          <MotionDiv delay={2.5}>
            <LandingPagePartThree />
          </MotionDiv>
          <MotionDiv delay={2.5}>
            <LandingPagePartFour />
          </MotionDiv>
        </div>
        <div className="lg:w-[80rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
