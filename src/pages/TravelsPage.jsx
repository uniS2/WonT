import MyPageHeader from '@/components/PageHeader';
import Map from '@/components/Map';
import ToggleTotalSchedule from '@/components/MyScheduleDetail/ToggleTotalSchedule';
import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';
import DayScheduleItem from '@/components/MyScheduleDetail/DayScheduleItem';
import { useQuery } from '@tanstack/react-query';
import { getPocketHostImageURL, getPocketHostURL } from '@/utils';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const getTravels = () =>
  fetch(`${getPocketHostURL('travels')}`).then((res) => res.json());
const getUser = () =>
  fetch(`${getPocketHostURL('users')}`).then((res) => res.json());

// 여행기 페이지
function TravelsPage() {
  const { displayDaySchedule, toggleDaySchedule } = useToggleTripMenuStore();
  const { data: travelsData } = useQuery(['travels'], getTravels);
  const { data: userData } = useQuery(['users'], getUser);

  const detailTravels = travelsData?.items?.find(
    (item) => item.id === '48trysq0ovuau3b'
  );
  const user = userData?.items?.find(
    (item) => item.id === detailTravels.userEmail
  );
  if ((detailTravels, user)) {
    return (
      <div className="container  mx-auto min-w-[22.5rem] bg-background pb-10">
        <div className="mx-auto flex flex-col">
          <h1 className="sr-only">TravelsPage</h1>
          <MyPageHeader page="detail" />
          <div className="container flex flex-col items-center justify-center">
            <section className="px-3">
              <h2 className="my-4 ml-2 text-2xl font-bold text-contentsPrimary">
                여행기록
              </h2>
              <hr className="aria-hidden" />
              <div className="my-5 flex items-center gap-3">
                <img
                  src={getPocketHostImageURL(user, 'profile')}
                  alt={`${user.username}님의 프로필`}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-contentsPrimary">
                    {detailTravels.title}
                  </p>
                  <p className="font-light text-gray-1">
                    {user.username}님의 일정
                  </p>
                </div>
              </div>
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                interval={1000}
                infiniteLoop={true}
                className="    min-w-[90%] sm:w-[40rem] sm:object-contain md:w-[48rem] lg:w-[64rem] xl:w-[77.25rem]"
              >
                {detailTravels.image.map((image) => (
                  <img
                    src={`${getPocketHostImageURL(detailTravels, '').replace(
                      'undefined',
                      ''
                    )}/${image}`}
                    alt="이미지"
                    className="my-1 items-center rounded-xl  object-contain sm:object-contain md:h-[25rem] md:min-h-[22.5rem] md:object-cover lg:object-cover xl:object-cover"
                  />
                ))}
              </Carousel>
              <p className="my-5 leading-normal text-contentsPrimary">
                {detailTravels.text}
              </p>
            </section>
          </div>
          <section className="container flex w-[90%] flex-col items-center">
            <h2 className="sr-only">날짜별 일정 보기</h2>
            <div className="my-8 flex w-[90%] max-w-7xl border-b-[0.0625rem] border-gray-3"></div>
            <Map
              width="min-w-[90%] sm:w-[37.5rem] md:w-[45.5rem] lg:w-[60rem] xl:w-[77.25rem] "
              height="lg:h-[31.25rem] min-h-[22rem]"
            />
            <div className="w-full xl:w-[90%] ">
              <ToggleTotalSchedule
                state={displayDaySchedule}
                action={toggleDaySchedule}
              >
                Day 1
              </ToggleTotalSchedule>
              {displayDaySchedule && (
                <>
                  <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <DayScheduleItem />
                    <DayScheduleItem />
                    <DayScheduleItem />
                  </ul>
                  <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <DayScheduleItem
                      placeName="숙소명"
                      placeType="숙소 분류"
                      backgroundColor="bg-point"
                      textColor="text-point"
                    />
                  </ul>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TravelsPage;
