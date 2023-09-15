import useFetchData from '@/hooks/useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API
  }/collections/mySchedule/records`;

export default function useScheduleList() {
  return useFetchData(endpoint);
}
