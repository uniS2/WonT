import BookMark from './BookMark';
import BackIcon from './Header/BackIcon';
import Logout from './MyPage/Logout';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

export default function MyPageHeader({ page }) {
  return (
    <div className=" container w-screen bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[1.0625rem] py-[1.125rem]">
        {page === 'mypage' ? (
          <Logo width={74} height={28} />
        ) : (
          <BackIcon width={'1rem'} height={'1rem'} color={'#4EC3F9'} />
        )}
        <div className="flex flex-row items-center gap-6">
          <Link to="/bookmark">
            <BookMark />
          </Link>

          <Logout />
        </div>
      </div>
    </div>
  );
}
