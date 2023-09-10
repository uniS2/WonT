export const getPocketHostURL = (collectionName) =>
  `${import.meta.env.VITE_PB_API}/collections/${collectionName}/records`