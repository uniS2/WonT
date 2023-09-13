import HambugerIcon from '@/components/TripPlace/HambugerIcon';

export default function HambugerButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <HambugerIcon width={'1.875rem'} heigth={'1.125rem'} color={'#5A80A9'} />
    </button>
  );
}
