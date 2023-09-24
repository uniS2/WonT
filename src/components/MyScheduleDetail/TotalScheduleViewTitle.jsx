import { getLocalName, getTripDates } from '@/utils/index.js';

export default function TotalScheduleTitle({
  localName = '지역명',
  startDay,
  endDay,
}) {
  return (
    <dl>
      <dt className="sr-only">장소</dt>
      <dd className="text-sm font-bold text-contentsPrimary md:text-base">
        {getLocalName(localName)}
      </dd>
      <dt className="sr-only">여행기간</dt>
      <dd className="text-xs font-medium text-contentsSecondary md:text-sm">
        {getTripDates(startDay, endDay)}
      </dd>
    </dl>
  );
}
