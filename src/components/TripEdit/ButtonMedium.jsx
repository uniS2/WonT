export default function ButtonMedium({ fill, text }) {
  return (
    <div
      className={`mx-5 mt-4 flex flex-col gap-[10px] font-bold text-primary ${
        text === '저장'
          ? 'text-white'
          : 'hover:rounded-md hover:bg-point hover:text-white'
      }`}
    >
      <button
        className={`h-[52px] rounded-md border  ${
          fill ? 'bg-primary' : 'border-primary'
        }`}
      >
        {text}
      </button>
    </div>
  );
}
