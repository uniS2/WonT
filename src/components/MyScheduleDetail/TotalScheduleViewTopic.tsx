import LocationIcon from '@/components/LocationIcon';
import { TotalScheduleTopicProps } from '@/types/MyScheduleDetailPage';

interface TotalScheduleTopicProps {
  count?: string;
  children: string;
}

function TotalScheduleTopic({
  count = '0',
  children,
}: TotalScheduleTopicProps) {
  return (
    <div className="flex">
      <LocationIcon size={'1rem'} />
      <span className="text-xs font-medium text-contentsPrimary md:text-sm">
        {children}
      </span>
      <span className="pl-1 text-xs font-bold text-primary md:text-sm">
        {count}
      </span>
    </div>
  );
}

export default TotalScheduleTopic;
