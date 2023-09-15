import { getLocalName, getTripDays } from '@/utils';

export default function TotalScheduleTitle({
  localName = '지역명',
  startDay,
  endDay,
}) {
  return (
    <dl>
      <dt className="sr-only">장소</dt>
      <dd className="text-sm font-bold text-contentsPrimary">
        {getLocalName(localName)}
      </dd>
      <dt className="sr-only">여행기간</dt>
      <dd className="text-xs font-medium text-contentsSecondary">
        {getTripDays(startDay, endDay)}
      </dd>
    </dl>
  );
}
