import BookMark from '@/components/BookMark';
import Logo from '@/components/Logo';

// 메인 페이지
function MainPage() {
  return (
    <>
      <h1 className="sr-only">MainPage</h1>

      <Logo width={'4.625rem'} height={'1.75rem'} />
      <BookMark />
    </>
  );
}

export default MainPage;
