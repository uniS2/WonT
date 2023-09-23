import { useEffect, useState } from 'react';

import debounce from '@/utils/debounce';

const { kakao } = window;

export default function Map({
  width = 'w-full',
  height = 'h-[25rem]',
  latitude = 37.4812845080678,
  longitude = 126.952713197762,
  level = 3,
  restProps,
}) {
  const [center, setCenter] = useState(
    new kakao.maps.LatLng(latitude, longitude)
  );
  // console.log(center);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: center, // 지도의 중심좌표. 37.4812845080678, 126.952713197762
      level: level, // 지도의 확대 레벨. 3
    };

    // 지도 생성하기
    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    let marker = new kakao.maps.Marker({ position: map.getCenter() });
    marker.setMap(map);
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
    });

    const updateCenter = debounce((lat, lon) => {
      map.panTo(new kakao.maps.LatLng(lat, lon)); // setCenter -> panTo: 지도 중심좌표 부드럽게 이동시키기
    });

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성하기
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    map.setZoomable(false); // 지도 스크롤 이벤트 - 확대, 축소 막기
    map.setCursor('move'); // 커서 스타일을 변경

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        // console.log(
        //   `현재 위치는 위도 ${lat}, 경도 ${lon}이고 지도 확대 레벨은 ${level}입니다.`
        // );
        updateCenter(lat, lon);
      });
    } else {
      const defaultPosition = new kakao.maps.LatLng(latitude, longitude);
      setCenter(defaultPosition);
    }
  }, [center, level]);

  return <div id="map" className={`${height} ${width} ${restProps}`}></div>;
}
