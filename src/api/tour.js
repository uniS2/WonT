// 국문 관광정보 서비스 OpenAPI : https://api.visitkorea.or.kr/#/useKoreaGuide
const TOUR_BASE_URL = 'apis.data.go.kr/B551011/KorService1'
const TOUR_KEY = 'ACmN5H3YEFjEOy%2B%2F18ZIvmBqHFq7Q4acmP0wf0Uctx%2BcRZ2nex3OyzY%2F5Ic6uSo%2Ffi5s%2FlO3iBwt%2FGU%2Bq%2BP66Q%3D%3D'
const USE_TOUR_KEY = `serviceKey=${TOUR_KEY}`

const TOUR_BASE_PARAMETER = 'MobileOS=ETC&MobileApp=WonT&_type=json'

// 지역코드 조회 : &numOfRows=10&pageNo=1
export const TOUR_BASE_AREA = `${TOUR_BASE_URL}/areaCode1?${USE_TOUR_KEY}&${TOUR_BASE_PARAMETER}`

// 위치기반 관광정보 조회 : &numOfRows=10&pageNo=1&mapX=126.981611&mapY=37.568477&radius=1000&listYN=Y
export const TOUR_BASE_LOCATION = `${TOUR_BASE_URL}/locationBasedList1?${USE_TOUR_KEY}&${TOUR_BASE_PARAMETER}`

// 키워드 검색 조회 : &pageNo=1&numOfRows=10&listYN=Y&contentTypeId=12&keyword=%EA%B0%95%EC%9B%90
export const TOUR_BASE_SEARCH = `${TOUR_BASE_URL}/searchKeyword1?${USE_TOUR_KEY}&${TOUR_BASE_PARAMETER}`