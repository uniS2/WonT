export default function LocalName({ children }) {
  return (
    <dl>
      <dt className="sr-only">지역명</dt>
      <dd className="text-lg font-medium text-contentsPrimary">{children}</dd>
    </dl>
  );
}
