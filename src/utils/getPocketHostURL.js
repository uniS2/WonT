export const getPocketHostURL = (collectionName) =>
  `${import.meta.env.VITE_PB_API}/collections/${collectionName}/records`;

export const getPocketHostTravelsURL = (collectionName) =>
  `${import.meta.env.VITE_PB_API}/travels/${collectionName}/records`;
