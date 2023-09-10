import Logo from '@/components/Logo';
import ButtonBack from '@/components/Header/ButtonBack';

export default function TripHeader() {
  return (
    <nav className="flex w-full justify-between bg-white px-6 py-[1.0625rem]">
      <ButtonBack />
      <button type="button">
        <Logo width={'3.75rem'} height={'1.375rem'} />
      </button>
    </nav>
  );
}
