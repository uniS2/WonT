import pocketbase from "@/api/pocketbase";

export const createRecord = async (collectionName, data) => {
  try {
    return await pocketbase.collection(collectionName).create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};