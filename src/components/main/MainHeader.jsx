import React from 'react';
import Logo from '../Logo';
import BookMark from '../BookMark';
import IconUser from '../Header/UserIcon';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <div>
      <div className="flex justify-between bg-white px-6 py-[1.063rem]">
        <Link to="/main">
          <Logo width={'4.625rem'} height={'1.75rem'} />
        </Link>
        <div className="flex gap-6">
          <Link to="/bookmark">
            <BookMark />
          </Link>
          <Link to="/myschedule">
            <IconUser />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
