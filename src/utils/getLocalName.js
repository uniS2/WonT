export const getLocalName = (localTitle) => {
  return `${localTitle} 여행`
}

export const setLocalName = (localTitle) => {
  return localTitle.replace('여행', '')
}