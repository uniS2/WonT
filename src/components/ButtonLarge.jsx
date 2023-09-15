export default function ButtonLarge({
  onClick,
  onMouseOver,
  onMouseOut,
  color = 'bg-primary',
  height = 'h-[3.875rem]',
  textColor = 'text-white',
  children,
  restProps,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`mx-5 ${height} w-80 rounded-md ${color} text-base font-bold ${textColor} ${restProps}`}
    >
      {children}
    </button>
  );
}
