import one from './assets/fa-brands-1.svg';
import two from './assets/fa-brands-2.svg';
import three from './assets/fa-brands-3.svg';
import four from './assets/fa-brands-4.svg';
import five from './assets/fa-brands-5.svg';
import six from './assets/fa-brands-6.svg';

const Sponsors = [
  {
    Image: one,
  },
  {
    Image: two,
  },
  {
    Image: three,
  },
  {
    Image: four,
  },
  {
    Image: five,
  },
  {
    Image: six,
  },
];

const Partners = () => {
  return (
    <ul className="flex gap-4">
      {Sponsors.map((sponsor) => (
        <li key={sponsor.Image} className="">
          <img
            src={sponsor.Image}
            className="h-[4rem] w-24 px-4"
            alt="images"
          />
        </li>
      ))}
    </ul>
  );
};

export default Partners;
