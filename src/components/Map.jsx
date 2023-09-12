import debounce from '@/utils/debounce';
import { useState } from 'react';
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
  const [center, setCenter] = useState(
    new kakao.maps.LatLng(latitude, longtitude)
  );

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: center, // 지도의 중심좌표. 33.450701, 126.570667
      level: level, // 지도의 확대 레벨. 3
    };
    // 지도 생성하기
    const map = new kakao.maps.Map(container, options);
    const updateCenter = debounce((lat, lon) => {
      map.setCenter(new kakao.maps.LatLng(lat, lon));
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        console.log(lat, lon);
        updateCenter(lat, lon);
      });
    } else {
      const defaultPosition = new kakao.maps.LatLng(
        37.4812845080678,
        126.952713197762
      );
      setCenter(defaultPosition);
    }
  }, [center, level]);

  // return <div id="map" className="h-[500px] w-[1280px]"></div>;

  return <div id="map" className={`${height} ${width}`}></div>;
}
