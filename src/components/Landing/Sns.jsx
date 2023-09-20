import Twitter from '@/assets/common-twitter.webp';
import Facebook from '@/assets/common-facebook.webp';
import Instagram from '@/assets/common-instagram.webp';
import { Link } from 'react-router-dom';

// 이미지 bakground-image
export default function Sns() {
  return (
    <div className="flex gap-3">
      <Link to="/">
        <img src={Twitter} alt="" />
      </Link>
      <Link to="/">
        <img src={Facebook} alt="" />
      </Link>

      <Link to="/">
        <img src={Instagram} alt="" />
      </Link>
    </div>
  );
}
