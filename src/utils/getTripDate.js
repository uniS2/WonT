const dayText = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

export function getTripDate(dates) {
  const month = dates.getMonth();
  const date = dates.getDate();
  const day = dayText[dates.getDay()];
  return `${month}월 ${date}일 ${day}`
}