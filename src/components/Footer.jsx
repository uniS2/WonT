import Logo from './Logo';
import Sns from './Landing/Sns';

export default function Footer({ color }) {
  return (
    <footer className="flex w-full flex-col items-center gap-3 bg-gray-100/50">
      <Logo
        colors={['#5A80A9', '#5A80A9']}
        width={'2.75rem'}
        height={'1rem'}
        id="logo3"
      />
      <Sns />
      <span className="text-gray-2">
        &copy;2023 멋쟁이 10조. All rights reserved
      </span>
    </footer>
  );
}
