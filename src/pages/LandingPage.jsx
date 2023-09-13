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
import CarouselDiv from '@/components/Landing/CarouselDiv';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Test1 from '@/assets/LandingPage-carousel-one.svg';
import Test2 from '@/assets/LandingPage-carousel-two.svg';
import Test3 from '@/assets/LandingPage-carousel-three.svg';
import Test4 from '@/assets/LandingPage-carousel-four.svg';
import Test5 from '@/assets/LandingPage-carousel-five.svg';

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

  const images = [Test1, Test2, Test3, Test4, Test5];

  return (
    <div className="container mx-auto flex min-h-[50rem] flex-col">
      <h1 className="sr-only">LandingPage</h1>
      {/* <CarouselDiv images={images}> */}
      <div className="bg-LandingCarouselThree bg-cover bg-center bg-no-repeat lg:w-[80rem]">
        <div className="flex flex-col items-center pt-[10.625rem]">
          <MotionDiv delay={1.5}>
            <div>
              <Logo
                width={'11.375rem'}
                height={'4.1688rem'}
                colors={['#fff', '#fff']}
              />
            </div>
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
      {/* </CarouselDiv> */}

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

// 앱솔로 박아버리기 띄어놓기
