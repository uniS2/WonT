import { getNode } from "@/utils";

export default function map(latitude, longtitude, level = 3) {
  const mapContainer = getNode('#map'),
    mapOption = {
      center: new kakao.maps.LatLng(latitude, longtitude), // 지도의 중심좌표. 33.450701, 126.570667
      level: level // 지도의 확대 레벨. 3
    };

  // 지도 생성하기
  const map = new kakao.maps.Map(mapContainer, mapOption);
}