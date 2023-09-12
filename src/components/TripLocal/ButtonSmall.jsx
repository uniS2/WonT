export default function ButtonSmall({
  color = 'bg-primary',
  children,
  onClick,
}) {
  return (
    <>
      <button
        type="button"
        className={`${color} h-[1.875rem] w-[4.375rem] rounded-full text-base font-bold text-white`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
