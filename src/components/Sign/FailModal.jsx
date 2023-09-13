import React from 'react';
import Warning from '@/assets/common-warning.svg';

function FailModal(props) {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      onClick={handleClick}
      className=" item-center flex h-[2.75rem] w-[17rem] justify-center gap-3 rounded-md  border bg-white p-2"
    >
      <div>
        <img src={Warning} alt="경고 표시" />
      </div>
      <div>회원 정보를 다시 확인해주세요.</div>
    </div>
  );
}

export default FailModal;
