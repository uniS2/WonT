import { useEffect } from 'react';

// DOM 내에서 'map' 아이디 찾지 못하는 문제 해결하기

const { kakao } = window;

export default function Map({
  width = '31.25rem',
  height = '25rem',
  latitude = 33,
  longtitude = 126,
  level = 3,
}) {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(latitude, longtitude), // 지도의 중심좌표. 33.450701, 126.570667
      level: level, // 지도의 확대 레벨. 3
    };
    // 지도 생성하기
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="map" className={`w-[${width}] h-[${height}]`}></div>;
}
