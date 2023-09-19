import Check from '@/assets/common-check.svg';

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className=" item-center flex h-[2.75rem] w-[17rem] justify-center gap-3 rounded-md  border bg-white p-2"
    >
      <div>
        <img src={Check} alt="체크 표시" />
      </div>
      <div>회원가입이 완료되었습니다.</div>
    </div>
  );
}
