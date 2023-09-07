// 로그인, 로그아웃, 아이디찾기, 비밀번호찾기 FormInput

// name, label, ...restProps
// type: oneOf(['text', 'password', 'number', 'email', 'search'])

import { useId } from 'react';

export default function FormInput() {
  const ID = useId();

  return (
    <div className="mt-3 h-[4.125rem] w-80 flex-col gap-3 bg-secondary px-[0.625rem]">
      <label htmlFor={ID} className="bg-primary"></label>
      <input type="text" name="" id={ID} className="bg-primary" />
    </div>
  );
}
