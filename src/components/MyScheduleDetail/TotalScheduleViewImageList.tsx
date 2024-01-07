import DefaultImage from '@/components/DefaultImage';

export default function TotalScheduleImageList({
  imageURL,
  localName,
  className,
}) {
  return (
    <>
      {imageURL ? (
        <div
          className={`flex h-[4.375rem] w-[4.375rem] items-center justify-center overflow-hidden rounded-md bg-[#EFF2F6]`}
        >
          <img
            src={imageURL}
            alt={localName}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div
          className={`object-fit ${className} flex h-[4.375rem] w-[4.375rem] items-center justify-center overflow-hidden rounded-md bg-[#EFF2F6]`}
        >
          <DefaultImage />
        </div>
      )}
    </>
  );
}
