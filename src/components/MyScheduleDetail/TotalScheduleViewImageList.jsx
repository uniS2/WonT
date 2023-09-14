import DefaultImage from '@/components/DefaultImage';

export default function TotalScheduleImageList({ className }) {
  return (
    <div
      className={`object-fit ${className} flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-md bg-[#EFF2F6]`}
    >
      <DefaultImage />
    </div>
  );
}
