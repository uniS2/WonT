function SignPart({ infomation = '', placeholder = '' }) {
  return (
    <div className="pl-[0.625rem]">
      <div className="">
        <p>{infomation}</p>
      </div>

      <form action="">
        <label htmlFor="">
          <input
            className="w-[320px] border-b-2 border-b-secondary py-3 placeholder-secondary"
            type="text"
            placeholder={placeholder}
          />
        </label>
      </form>
    </div>
  );
}

export default SignPart;
