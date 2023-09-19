import { useEffect, useState } from 'react';
import { useLocalStore } from '@/store/localStore';
import { useMapStore } from '@/store/mapStore';

const { kakao } = window;

export default function MapSearch({
  width = 'w-full',
  height = 'min-h-[18.75rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem]',
  latitude = 37.4812845080678, // 위도
  longitude = 126.952713197762, // 경도
  level = 3, // 지도 확대 레벨
  restProps,
}) {
  const [center, setCenter] = useState(
    new kakao.maps.LatLng(latitude, longitude)
  );

  //* 카테고리
  let markers = [];
  let currCategory = '';

  const selectName = useLocalStore((state) => state.selectName);
  const { localData, setLocationData } = useMapStore();

  useEffect(() => {
    // 지도 생성하기
    const container = document.getElementById('map');
    const map = new kakao.maps.Map(container, {
      center: center,
      level: level,
    });

    // 지도 확대 축소를 제어합니다. - 줌 컨트롤 생성
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 지도 스크롤 이벤트 = {false} - 확대, 축소 제어
    map.setZoomable(false);
    // 지도 커서 스타일 {'move'}로 변경합니다.
    map.setCursor('move');

    //* 카테고리
    // 지도에 idle 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'idle', searchPlaces);
    // 각 카테고리에 클릭 이벤트를 등록합니다
    addCategoryClickEvent();
    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    function addEventHandle(target, type, callback) {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent('on' + type, callback);
      }
    }

    // 카테고리 검색을 요청하는 함수입니다
    function searchPlaces() {
      if (!currCategory) {
        return;
      }
      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();
      places.categorySearch(currCategory, placesSearchCB);
    }

    // 장소 검색 객체를 생성합니다.
    const places = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    places.keywordSearch(selectName, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          setLocationData(data[i]);
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
      } else if (status === kakao.maps.services.Status.ERROR) {
        // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }

    for (let i = 0; i < place.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = addMarker(
        new kakao.maps.LatLng(place[i].y, place[i].x),
        order
      );
    }
  }, []);

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position, order) {
    var imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
      imgOptions = {
        spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  }
  // 지도 위에 표시되고 있는 마커를 모두 제거합니다
  function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
  // 각 카테고리에 클릭 이벤트를 등록합니다
  function addCategoryClickEvent() {
    var category = document.getElementById('category'),
      children = category.children;

    for (var i = 0; i < children.length; i++) {
      children[i].onclick = onClickCategory;
    }
  }
  // 카테고리를 클릭했을 때 호출되는 함수입니다
  function onClickCategory() {
    var id = this.id,
      className = this.className;

    placeOverlay.setMap(null);

    if (className === 'on') {
      currCategory = '';
      changeCategoryClass();
      removeMarker();
    } else {
      currCategory = id;
      changeCategoryClass(this);
      searchPlaces();
    }
  }
  // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
  function changeCategoryClass(el) {
    var category = document.getElementById('category'),
      children = category.children,
      i;

    for (i = 0; i < children.length; i++) {
      children[i].className = '';
    }

    if (el) {
      el.className = 'on';
    }
  }

  return (
    <div
      id="map"
      className={`${height} ${width} modal mx-auto mt-6 ${restProps}`}
    ></div>
  );
}
