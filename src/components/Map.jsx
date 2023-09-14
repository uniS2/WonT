import { useEffect, useState } from 'react';

import debounce from '@/utils/debounce';

const { kakao } = window;

export default function Map({
  width = 'w-[31.25rem]',
  height = 'h-[25rem]',
  latitude = 33,
  longtitude = 126,
  level = 3,
  restProps,
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

  return <div id="map" className={`${height} ${width} ${restProps}`}></div>;
}
