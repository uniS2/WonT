import ToggleDownIcon from '@/components/ToggleDownIcon';
import ToggleUpIcon from '@/components/ToggleUpIcon';

export default function ToggleTotalSchedule({ children, state, action }) {
  return (
    <div className="mx-[1.25rem] flex items-center gap-[0.3125rem] pt-[1.25rem]">
      <dl>
        <dt className="sr-only">상세 보기</dt>
        <dd className="text-sm font-semibold text-contentsPrimary">
          {children}
        </dd>
      </dl>
      <button
        type="button"
        onClick={action}
        aria-label={{ state } ? '나의 일정 접기' : '나의 일정 보기'}
      >
        {{ state } ? (
          <ToggleUpIcon size="1rem" />
        ) : (
          <ToggleDownIcon size="1rem" />
        )}
      </button>
    </div>
  );
}
