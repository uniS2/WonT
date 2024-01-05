const getPocketHostURL = (collectionName: string) =>
  `${import.meta.env.VITE_PB_API}/collections/${collectionName}/records`;

const getPocketHostTravelsURL = (collectionName: string) =>
  `${import.meta.env.VITE_PB_API}/travels/${collectionName}/records`;

export { getPocketHostURL, getPocketHostTravelsURL };
