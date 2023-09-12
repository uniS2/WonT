import React from 'react';

function SignInButton({ text = '' }) {
  return (
    <div>
      <button
        type="button"
        className="text-color-white h-[3.125rem] w-80 rounded-md bg-primary text-white"
      >
        {text}
      </button>
    </div>
  );
}

export default SignInButton;
