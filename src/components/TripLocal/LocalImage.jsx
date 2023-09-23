import DefaultImage from '@/components/DefaultImage';

export default function LocalImage({ image }) {
  return (
    <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-full bg-[#EFF2F6] object-cover">
      {image ? <img src={image} className="h-full w-full" /> : <DefaultImage />}
    </div>
  );
}
