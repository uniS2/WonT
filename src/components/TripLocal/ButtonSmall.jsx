export default function ButtonSmall({ color = 'bg-primary', children }) {
  return (
    <>
      <button
        type="button"
        className={`${color} h-[1.875rem] w-[4.375rem] rounded-full text-base font-bold text-white`}
      >
        {children}
      </button>
    </>
  );
}
