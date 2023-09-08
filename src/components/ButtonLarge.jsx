// color(primary, secondary, point), size, radiuse, icon -> 따로 처리 ...
// secondary = Boolean(), children, ...restProps
// type: oneOf(['submit', 'reset', 'button'])

export default function ButtonLarge({
  color = 'bg-primary',
  height = '3.875rem',
  textColor = 'text-white',
  children,
  ...restProps
}) {
  return (
    <button
      type="button"
      className={`h-[${height}] w-80 rounded-md ${color} text-base font-bold ${textColor}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
