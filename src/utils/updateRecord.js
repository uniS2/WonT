import pocketbase from "@/api/pocketbase";

export const updateRecord = async (collectionName, recordId, data) => {
  try {
    return await pocketbase.collection(collectionName).update(recordId, data);
  } catch (error) {
    throw new Error(error.message);
  }
};