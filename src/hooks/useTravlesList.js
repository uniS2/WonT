import useFetchData from '@/hooks/useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API}/collections/travels/records`;

export default function useTravelsList() {
  return useFetchData(endpoint);
}