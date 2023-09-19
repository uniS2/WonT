import { useId } from 'react';
import { oneOf, string } from 'prop-types';

export default function SignPart({
  information = '',
  placeholder = '',
  type = 'text',
  label,
  inputRef,
  ...restProps
}) {
  const id = useId();

  return (
    <div className="pl-[0.625rem]">
      <div className="">
        <p>{information}</p>
      </div>

      {/* 여기부터 props 손보기 */}
      <label htmlFor={id} label={label}>
        <input
          className="w-[320px] border-b-2 border-b-secondary py-3 placeholder-secondary"
          id={id}
          type={type}
          placeholder={placeholder}
          ref={inputRef}
          {...restProps}
        />
      </label>
    </div>
  );
}

SignPart.propTypes = {
  type: oneOf(['text', 'password', 'number', 'email', 'search']),
  placeholder: string.isRequired,
};
