import React from 'react';
import BookMark from '@/assets/common-bookmark.svg';

function MainPlace() {
  return (
    <div className="relative mb-[1.625rem] h-[9.25rem] w-[9.25rem] rounded-md bg-slate-600">
      <button className="absolute right-3 top-3">
        <img src={BookMark} alt="북마크 표시" />
      </button>
    </div>
  );
}

export default MainPlace;
