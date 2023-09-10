import Twitter from '../../assets/common-twitter.svg';
import Facebook from '../../assets/common-facebook.svg';
import Instagram from '../../assets/common-instagram.svg';

// 이미지 bakground-image
export default function Sns() {
  return (
    <div className="flex gap-3">
      <a href="#" className="h-5 w-5 rounded-full ">
        <img src={Twitter} alt="" />
      </a>

      <a href="#" className="rounded-fullbg-secondary h-5 w-5">
        <img src={Facebook} alt="" />
      </a>

      <a href="#" className="h-5 w-5 rounded-full ">
        <img src={Instagram} alt="" />
      </a>
    </div>
  );
}
