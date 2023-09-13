import useTravelsList from '@/hooks/useTravlesList';
import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';

export default function BookmarkList() {
  const { data } = useTravelsList();
  console.log(data);
  if (data) {
    return (
      <ul className="md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto grid  gap-4 ">
        {data?.items.map((item) => (
          <li key={item.id} className="relative  min-w-[360px]">
            <div className="absolute right-4 top-4 ">
              <BookMark />
            </div>
            <a href="/">
              <img
                src={getPocketHostImageURL(item).split(',')[0]}
                alt=""
                className="md:h-[380px] lg:h-[420px] sm:h-[360px] xl:h-[400px] box-content aspect-square  rounded-lg border-[1px] border-gray-2 object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
