import useTravelsList from '@/hooks/useTravlesList';
import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';

export default function BookmarkList() {
  const { data } = useTravelsList();
  console.log(data);
  if (data) {
    return (
      <div className="md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto grid  gap-4 ">
        {data?.items.map((item) => (
          <div key={item.id} className="relative  min-w-[360px]">
            <div className="absolute right-4 top-4 ">
              <BookMark />
            </div>
            <a href="/">
              <img
                src={getPocketHostImageURL(item).split(',')[0]}
                alt=""
                className="aspect-square max-h-[420px] min-h-[380px]  rounded-lg border-[1px] border-gray-2 object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    );
  }
}
