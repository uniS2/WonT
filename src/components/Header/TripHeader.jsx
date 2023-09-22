import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import BackIcon from '@/components/Header/BackIcon';
import UserIcon from '@/components/Header/UserIcon';
import CloseIcon from '@/components/CloseIcon';

export default function TripHeader({
  isBack = true,
  isLogo = true,
  isUserIcon = true,
  restProps,
}) {
  return (
    <nav className="w-full bg-white">
      <ul className="mx-auto flex justify-between px-6 py-[1.0625rem]">
        <li>
          {isBack ? (
            <BackIcon width={'1rem'} height={'1rem'} color={'#4EC3F9'} />
          ) : (
            <Link to="/main">
              <CloseIcon size={'1.25rem'} color={'#4EC3F9'} />
            </Link>
          )}
        </li>
        {isLogo && (
          <li className={`ml-[0.4375rem] ${restProps}`}>
            <Link to="/main">
              <Logo width={'3.75rem'} height={'1.375rem'} />
            </Link>
          </li>
        )}
        {isUserIcon && (
          <li>
            <Link to="/mypage">
              <UserIcon />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
