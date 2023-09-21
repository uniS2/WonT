import { Link } from 'react-router-dom';

export default function MyPageTab({ position }) {
  return (
    <div className="container mx-auto w-screen xl:w-[1268px]">
      <div className="mb-3 flex justify-around ">
        <Link to="/myschedule">
          <button type="button">나의 일정</button>
        </Link>
        <Link to="/bookmark">
          <button type="button">북마크</button>
        </Link>
      </div>
      <div
        className={`relative flex w-full max-w-7xl border-b-[0.0625rem] border-contentsPrimary ${
          position === 'left' ? 'justify-start' : 'justify-end'
        } `}
      >
        <div className="h-1 w-[50%] bg-point"></div>
      </div>
    </div>
  );
}
