import DefaultImage from '@/components/DefaultImage';

export default function LocalImage({ image }) {
  return (
    <div className="object-fit flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-full bg-[#EFF2F6]">
      {image ? <img src={image} /> : <DefaultImage />}
    </div>
  );
}
