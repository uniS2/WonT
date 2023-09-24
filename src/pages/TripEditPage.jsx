import { useState, useId } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';

import pocketbase from '@/api/pocketbase';
import Header from '@/components/Header/Header';
import TripPlan from '@/components/TripPlan';
import Map from '@/components/Map';
import AddPlan from '@/components/TripEdit/AddPlan';
import ButtonMedium from '@/components/TripEdit/ButtonMedium';
import PlanDate from '@/components/TripEdit/PlanDate';
import { getRangeDay } from '@/utils/getRangeDay';
import SelectHotelMap from '@/components/TripEdit/SelectHotelMap';
import { useMapStore } from '@/store/mapStore';
import { useDateStore } from '@/store/dateStore';
import PlacePlan from '@/components/TripEdit/PlacePlan';
import { useScheduleStore } from '@/store/scheduleStore';

/* -------------------------------------------------------------------------- */
const fetchMySchedule = async (userId) => {
  const response = await pocketbase.collection('mySchedule').getFullList({
    filter: `(username?~'${userId}')`,
    expand: 'users',
    sort: '-updated',
  });
  return response[0];
};

const saveSchedule = async ({ places, hotels, userId }) => {
  return await pocketbase.collection('mySchedule').update(places, hotels, {
    'places+': userId,
    'hotels+': userId,
  });
};
/* -------------------------------------------------------------------------- */

export default function TripEditPage() {
  const user = pocketbase.authStore.model; // 로그인 유저 정보

  const currentPath = useParams();
  const [toggleSchedule, setToggleSchedule] = useState(false);
  const handleToggle = () => {
    setToggleSchedule(!toggleSchedule);
  };

  // Tanstack Query
  const { data, error, isLoading } = useQuery(
    ['mySchedule', user.id],
    () => fetchMySchedule(user.id),
    { refetchOnWindowFocus: false }
  );

  // 데이터 뮤테이션 (추가)
  const addMutation = useMutation({
    mutationFn: saveSchedule,
    onMutate: async ({ places, hotels, userId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (tripData) => ({
        ...tripData,
        username: [...recommendData.username, userId],
      }));

      return { previousData };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (context) => {
      queryClient.setQueryData(queryKey, context.previousData);
    },
  });

  const handleRemoveBookmark = (places, hotels, userId) => async () => {
    mutation.mutate({
      places,
      hotels,
      userId,
    });
  };

  const selectDate = useDateStore((set) => set.tripDate);
  const selectRangeDate = getRangeDay(selectDate[0], selectDate[1]);

  const { hotelPositions } = useScheduleStore();
  const hotelList = Object.values(hotelPositions);

  const id = useId();

  if (isLoading) {
    return <div className=" flex justify-center ">로딩 중...</div>;
  }

  return (
    <div className="bg-background">
      <Helmet>
        <title className="sr-only">TripEdit - Wont</title>
      </Helmet>
      <Header />
      <div className="w-auto ">{<TripPlan data={data} />}</div>
      <div className="container mx-auto min-w-[22.5rem] bg-background pb-14">
        <div className={`mx-auto mt-[10px] max-w-7xl`}>
          {/* <Map height={'h-[31.25rem]'} /> */}
          <SelectHotelMap height={'h-[31.25rem]'} hotelList={hotelList} />

          {hotelList.length >= 0
            ? selectRangeDate?.map((item, index) => (
                <div key={index}>
                  <PlanDate
                    toggleButton={handleToggle}
                    toggleSchedule={toggleSchedule}
                    setToggleSchedule={setToggleSchedule}
                    item={item}
                    index={index}
                  />

                  <div className={`${toggleSchedule ? 'hidden' : ''}`}>
                    <PlacePlan placeName={hotelList[index]} count={index + 1} />
                    <Link to={`/tripplace/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="일정 추가" />
                    </Link>

                    <PlacePlan hotelList={hotelList[index]} index={index} />

                    <Link to={`/triphotel/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="숙소 추가" />
                    </Link>
                  </div>
                </div>
              ))
            : selectRangeDate?.map((item, index) => (
                <div key={index}>
                  <PlanDate
                    toggleButton={handleToggle}
                    toggleSchedule={toggleSchedule}
                    setToggleSchedule={setToggleSchedule}
                    item={item}
                    index={index}
                  />

                  <div className={`${toggleSchedule ? 'hidden' : ''}`}>
                    <AddPlan text="장소" />

                    <Link to={`/tripplace/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="일정 추가" />
                    </Link>

                    <AddPlan text="숙소" />

                    <Link to={`/triphotel/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="숙소 추가" />
                    </Link>
                  </div>
                </div>
              ))}

          <div className={toggleSchedule ? 'pt-0' : 'py-10'}>
            <ButtonMedium
              fill={true}
              text="저장"
              onClick={handleRemoveBookmark(hotelList, user.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
