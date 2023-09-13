import BookMark from '../BookMark';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Logout from './Logout';

export default function MyPageHeader() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl justify-between px-[1.0625rem] py-[1.125rem]">
        <Link to="/mainpage">
          <Logo width={74} height={28} />
        </Link>
        <div className="flex flex-row items-center gap-6">
          <Link to="/bookmark">
            <BookMark />
          </Link>

          <Link to="/">
            <Logout />
          </Link>
        </div>
      </div>
    </div>
  );
}
