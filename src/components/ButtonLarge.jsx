// color(primary, secondary, point), size, radiuse, icon -> 따로 처리 ...
// secondary = Boolean(), children, ...restProps
// type: oneOf(['submit', 'reset', 'button'])

export default function ButtonLarge({ color = 'bg-primary', children }) {
  return (
    <button type="button" className={`${color} h-[3.875rem] w-80 rounded-md`}>
      {children}
    </button>
  );
}
