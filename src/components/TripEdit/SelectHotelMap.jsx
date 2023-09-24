import { useEffect, useState } from 'react';

import debounce from '@/utils/debounce';
import { useMarkerStore } from '@/store/markerStore';

const { kakao } = window;

export default function SelectHotelMap({
  hotelList,
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
  console.log(hotelList);
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: center, // 지도의 중심좌표. 37.4812845080678, 126.952713197762
      level: level, // 지도의 확대 레벨. 3
    };

    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.5662952, 126.9779451), // 기본 중심 좌표 (서울)
        level: 5, // 지도 확대 레벨
      };

      const map = new kakao.maps.Map(container, options);

      // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성하기
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1, content: '' });

      // // *hotelList를 반복하여 각 위치에 마커 표시
      hotelList.forEach((hotel) => {
        const markerPosition = new kakao.maps.LatLng(hotel.y, hotel.x);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        useMarkerStore.getState().addMarker(marker);

        // 마커에 클릭 이벤트 등록
        kakao.maps.event.addListener(marker, 'click', function () {
          // 인포윈도우
          infowindow.setContent(
            `<div style="padding:5px;font-size:12px;">${hotel.place_name}</div>`
          );
          // 인포윈도우 열기
          infowindow.open(map, marker);
        });
      });
    });
  }, [hotelList]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}
