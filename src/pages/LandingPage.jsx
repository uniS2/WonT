import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import LandingPagePartBottom from '@/components/Landing/LandingPagePartBottom';
import LandingPagePartMiddle from '@/components/Landing/LandingPagePartMiddle.jsx';
import LandingPagePartTop from '@/components/Landing/LandingPagePartTop';
import SignInButton from '@/components/Landing/SignInButton';
import SignUpButton from '@/components/Landing/SignUpButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 렌딩 페이지
function LandingPage() {
  return (
    <div className="mx-auto flex min-h-[50rem] max-w-[80rem] flex-col items-center">
      <h1 className="sr-only">LandingPage</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full"
      >
        <div className="w-full bg-LandingPage bg-center bg-no-repeat">
          <div className=" flex flex-col items-center pt-[10.625rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Logo
                width={'11.375rem'}
                height={'4.1688rem'}
                colors={['#fff', '#fff']}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ duration: 1, delay: 5 }}
            >
              <div className="flex flex-col gap-[0.9375rem] px-5 pb-[2.625rem] pt-[4.143125rem]">
                <Link to="/SignInPage">
                  <SignInButton />
                </Link>
                <Link to="/SignUpPage">
                  <SignUpButton />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="flex h-screen flex-col gap-5 px-5 pt-[3.125rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <LandingPagePartTop />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <LandingPagePartMiddle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <LandingPagePartBottom />
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
