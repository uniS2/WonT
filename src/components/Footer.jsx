import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="flex-col">
      <Logo width={44} height={16} colors={'#5A80A9'} />
      {/* SNS */}
      <span className="text-gray-2">
        &copy;2023 멋쟁이 10조. All rights reserved
      </span>
    </footer>
  );
}
