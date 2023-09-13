import HambugerIcon from '@/components/TripSelect/HambugerIcon';

export default function HambugerButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <button type="button" onClick={onClick} className="px-36 pb-1">
        <HambugerIcon
          width={'1.875rem'}
          heigth={'1.125rem'}
          color={'#5A80A9'}
        />
      </button>
    </div>
  );
}
