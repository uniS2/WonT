import React from 'react';
import Back from '@/assets/common-toogle-left.svg';

function BackButton() {
  return (
    <div>
      <button type="button">
        <img src={Back} alt="뒤로가기 버튼" />
      </button>
    </div>
  );
}

export default BackButton;
