import LocationIcon from '@/components/LocationIcon';

export default function TotalScheduleTopic({ count = '0', children }) {
  return (
    <div className="flex">
      <LocationIcon size={'1rem'} />
      <span className="text-xs font-medium text-contentsPrimary">
        {children}
      </span>
      <span className="pl-1 text-xs font-bold text-primary">{count}</span>
    </div>
  );
}
