export const getPocketHostImageURL = (item, fileName = 'image') =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[fileName]
  }`;

export const getImageArrayURL = (item, image) => `${getPocketHostImageURL(item, '').replace(
  'undefined',
  ''
)}/${image}`