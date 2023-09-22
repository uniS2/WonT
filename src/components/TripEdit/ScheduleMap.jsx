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
  console.log(center);

  useEffect(() => {
    const container = document.getElementById('mapHotel');
    const options = {
      level: level, // 지도의 확대 레벨. 3
      center: center,
    };
    // script.src =
    //   'https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY&libraries=services&autoload=false';
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: level,
      };
      const map = new kakao.maps.Map(container, options);

      // 장소 검색 객체를 생성합니다
      const ps = new kakao.maps.services.Places();

      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      // 키워드로 장소를 검색합니다
      ps.keywordSearch('숙소', (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
        }
      });

      function displayMarker(place) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              '</div>'
          );
          infowindow.open(map, marker);
        });
      }
    });
  }, []);

  return <div id="map" className={`${height} ${width} ${restProps}`}></div>;
}
