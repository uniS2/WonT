import useFetchData from '@/hooks/useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API
  }/collections/recommends/records`;

export default function useRecommendsList() {
  return useFetchData(endpoint);
}
