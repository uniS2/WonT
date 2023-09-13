import { Link, useNavigate } from 'react-router-dom';
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
  // 뒤로 가기 버튼
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1); // 바로 이전 페이지로 이동. {replace, state}
  };

  return (
    <nav className="w-full bg-white">
      <ul className="mx-auto flex justify-between px-6 py-[1.0625rem]">
        <li>
          {isBack ? (
            <button
              type="button"
              aria-label="뒤로가기"
              onClick={handleBackButton}
            >
              <BackIcon width={'1rem'} height={'1rem'} color={'#4EC3F9'} />
            </button>
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
