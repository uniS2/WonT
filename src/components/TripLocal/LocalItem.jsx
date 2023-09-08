import ButtonSmall from '@/components/TripLocal/ButtonSmall';
import LocalImage from '@/components/TripLocal/LocalImage';
import LocalName from '@/components/TripLocal/LocalName';

export default function LocalItem({ image, children = '지역명' }) {
  return (
    <div className="flex w-full place-content-between items-center bg-white px-5 py-[0.9375rem]">
      <div className="flex items-center gap-5">
        <LocalImage image={image} />
        <LocalName>{children}</LocalName>
      </div>
      <ButtonSmall>선택</ButtonSmall>
    </div>
  );
}
