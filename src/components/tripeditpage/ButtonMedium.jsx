export default function ButtonMedium({ fill, text }) {
  return (
    <div className="mx-5 mt-4 flex flex-col gap-[10px]">
      <button
        className={`h-[52px] rounded-md border ${
          fill ? 'bg-primary' : 'border-primary'
        }`}
      >
        <span
          className={`py-[13px] font-bold ${
            fill ? 'text-white' : 'text-primary'
          }`}
        >
          {text}
        </span>
      </button>
    </div>
  );
}
