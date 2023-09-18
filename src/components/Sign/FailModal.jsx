import React, { useState, useEffect } from 'react';
import Warning from '@/assets/common-warning.svg';

function FailModal(props) {
  const { isOpen, onClose } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClick = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-0 z-50 flex h-full w-full items-center justify-center">
      <div
        onClick={handleClick}
        className="flex items-center justify-center gap-3 rounded-md border bg-white p-2"
      >
        <div>
          <img src={Warning} alt="경고 표시" />
        </div>
        <div>회원 정보를 다시 확인해주세요.</div>
      </div>
    </div>
  );
}

export default FailModal;
