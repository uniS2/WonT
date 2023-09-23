import DefaultImage from '@/components/DefaultImage';

export default function LocalImage({ image, alt }) {
  return (
    <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-full bg-[#EFF2F6] object-cover">
      {image ? (
        <img src={image} alt={alt} className="h-[3.75rem] w-[3.75rem]" />
      ) : (
        <DefaultImage />
      )}
    </div>
  );
}
