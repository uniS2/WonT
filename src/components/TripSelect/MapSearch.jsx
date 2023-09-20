import { useEffect, useState } from 'react';

import debounce from '@/utils/debounce';
import { useMapStore } from '@/store/mapStore';
import { useLocalStore } from '@/store/localStore';

const { kakao } = window;

export default function MapSearch({
  width = 'w-full',
  height = 'min-h-[18.75rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem]',
  latitude = 37.4812845080678, // 위도
  longitude = 126.952713197762, // 경도
  level = 7, // 지도 확대 레벨
  restProps,
}) {
  const [center, setCenter] = useState(
    new kakao.maps.LatLng(latitude, longitude)
  );

  // const selectName = useLocalStore((state) => state.selectName);
  const selectName = '서울';
  //$ 마커, 카테고리를 관리할 배열을 생성합니다.
  const { category, markers, setMarkers } = useMapStore();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: center, // 지도의 중심좌표. 33.450701, 126.570667
      level: level, // 지도의 확대 레벨. 3
    };

    // 지도 생성하기
    let map = new kakao.maps.Map(container, options);
    //* 카테고리검색
    //* 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    //* 장소 검색 객체를 생성합니다
    const places = new kakao.maps.services.Places(map);

    //^ 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    //^ 주소로 좌표를 검색합니다
    geocoder.addressSearch(selectName, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

        //^ 카테고리 검색 (SW8)
        const categoryOptions = {
          location: coords,
          radius: 10000,
        };
        places.categorySearch(category, categorySearchCB, categoryOptions);
      }
    });

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성하기
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // map.setZoomable(false); // 지도 스크롤 이벤트 - 확대, 축소 막기
    map.setCursor('move'); // 커서 스타일을 'move'로 변경

    //* 카테고리 검색 완료 시 호출되는 콜백함수
    function categorySearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
        console.log(data);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>'
        );
        infowindow.open(map, marker);
      });

      //$ 생성된 마커를 markers 배열에 추가합니다.
      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    }

    // 지도 이동 이벤트를 감지하여 중심 좌표를 업데이트합니다.
    kakao.maps.event.addListener(
      map,
      'center_changed',
      debounce(function () {
        // setMarkers([]); // 중심 좌표가 변경될 때 마커를 업데이트합니다.

        const newCenter = map.getCenter();
        places.categorySearch(category, categorySearchCB, {
          location: newCenter,
          radius: 10000,
        });
      }, 1000)
    );
  }, [center, level, category, setMarkers]);

  return (
    <div
      id="map"
      className={`${height} ${width} modal mx-auto mt-6 ${restProps}`}
    ></div>
  );
}
