export default function TripPlaceInfo() {
  return (
    <dl className="flex flex-col">
      <dt className="sr-only">장소명</dt>
      <dd className="text-sm font-light text-contentsPrimary">장소명</dd>
      <dt className="sr-only">상세주소</dt>
      <dd className="text-xs font-light text-contentsSecondary">상세주소</dd>
    </dl>
  );
}
