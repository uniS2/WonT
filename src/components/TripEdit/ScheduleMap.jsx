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

    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: level,
      };
      const map = new kakao.maps.Map(container, options);
      const updateCenter = debounce((lat, lon) => {
        map.panTo(new kakao.maps.LatLng(lat, lon)); // setCenter -> panTo: 지도 중심좌표 부드럽게 이동시키기
      });
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          // const lat = position.coords.latitude; // 위도
          // const lon = position.coords.longitude; // 경도
          console.log(
            `현재 위치는 위도 ${lat}, 경도 ${lon}이고 지도 확대 레벨은 ${level}입니다.`
          );
          updateCenter(lat, lon);
        });
      } else {
        const defaultPosition = new kakao.maps.LatLng(latitude, longitude);
        setCenter(defaultPosition);
      }

      const geocoder = new kakao.maps.services.Geocoder();

      //# 1. 현재 선택한 지역으로 좌표를 검색합니다
      geocoder.addressSearch('부산', function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);

          //^ 카테고리 검색 (SW8)
          const categoryOptions = {
            location: coords,
            radius: 10000,
          };
          places.categorySearch(
            hotelCategory,
            categorySearchCB,
            categoryOptions
          );
        }
      });
      // 장소 검색 객체를 생성합니다
      var ps = new kakao.maps.services.Places(map);

      ps.categorySearch('BK9', placesSearchCB, { useMapBounds: true });

      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
          }
        }
      }

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
