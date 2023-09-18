import { oneOf, string } from 'prop-types';
import { useId } from 'react';

function SignPart({
  information = '',
  placeholder = '',
  type = 'text',
  label,
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

export default SignPart;
