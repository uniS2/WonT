import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import BookMark from '@/components/BookMark';
import UserIcon from '@/components/Header/UserIcon';

export default function MainHeader() {
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
            <UserIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
