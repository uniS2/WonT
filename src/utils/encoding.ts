// Tour API > 키워드 검색 조회 > 키워드 encoding 처리
export default function encoding(keyword: string) {
  return encodeURIComponent(keyword);
}
