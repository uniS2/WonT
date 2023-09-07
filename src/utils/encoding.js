// Tour API > 키워드 검색 조회 > 키워드 encoding 처리
export default function encoding (keyword) {
  return String(URLEncoder.encode(keyword, "UTF-8"));
}