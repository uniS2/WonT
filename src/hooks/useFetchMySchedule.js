import pocketbase from "@/api/pocketbase";

export default async function useFetchMySchedule(userId) {
  const response = await pocketbase.collection('mySchedule').getFullList({
    filter: `(username?~'${userId}')`,
    expand: 'users',
    sort: '-updated',
  });
  return response[0];
};