export default function Modal({ handleYes, handleNo, children }) {
  return (
    <div className="modal absolute left-1/2 top-1/3 z-10  flex h-[9.375rem] w-80 -translate-x-40 -translate-y-[4.6875rem] flex-col justify-center rounded-md bg-white text-lg">
      <span className="my-[2.3125rem] self-center font-medium text-contentsPrimary">
        {children}
      </span>
      <div className="flex justify-evenly border-t-2 py-[0.6875rem]">
        <button
          onClick={handleYes}
          type="button"
          className="font-bold text-primary"
        >
          예
        </button>
        <button
          onClick={handleNo}
          type="button"
          className="font-medium text-error"
        >
          아니오
        </button>
      </div>
    </div>
  );
}
