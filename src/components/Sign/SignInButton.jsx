import React from 'react';
import { oneOf } from 'prop-types';

function SignInButton({ text = '', type = 'button' }) {
  return (
    <div>
      <button
        type={type}
        className="text-color-white h-[3.125rem] w-80 rounded-md bg-primary text-white"
      >
        {text}
      </button>
    </div>
  );
}

SignInButton.propTypes = {
  type: oneOf('button', 'submit', 'reset'),
};

export default SignInButton;
