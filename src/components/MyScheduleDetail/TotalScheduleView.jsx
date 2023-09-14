import TotalScheduleViewHotelDay from '@/components/MyScheduleDetail/TotalScheduleViewHotelDay';
import TotalScheduleViewImageList from '@/components/MyScheduleDetail/TotalScheduleViewImageList';
import TotalScheduleViewTitle from '@/components/MyScheduleDetail/TotalScheduleViewTitle';
import TotalScheduleViewTopic from '@/components/MyScheduleDetail/TotalScheduleViewTopic';

export default function TotalScheduleView() {
  return (
    <div className="modal relative mx-[1.25rem] flex min-h-[20.4375rem] flex-col justify-center gap-[1.25rem] overflow-hidden rounded-md bg-white pl-[1.25rem] pr-[0.625rem]">
      <TotalScheduleViewTitle />
      <div className="flex flex-col gap-[0.625rem]">
        <TotalScheduleViewTopic>선택한 장소</TotalScheduleViewTopic>
        <TotalScheduleViewImageList className={'ml-1'} />
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <TotalScheduleViewTopic>설정한 숙소</TotalScheduleViewTopic>
        <div className="flex w-fit flex-col items-center gap-[0.3125rem]">
          <TotalScheduleViewHotelDay />
          <TotalScheduleViewImageList />
        </div>
      </div>
    </div>
  );
}
