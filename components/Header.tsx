import useTextSlider from '../hooks/useTextSlider';
import MediaLinks from './MediaLinks';

const Header = () => {
  const buzzWords = [
    'Excellence',
    'Education',
    'Exceptionalism',
    'Innovation',
    'Growth',
  ];
  //continuous Ed,
  const { word: buzzWord } = useTextSlider(buzzWords);

  return (
    //add breakpoint for h-header, probably in css file
    <section className="h-header flex items-center text-midnightBlue">
      <div className="flex justify-between h-3/4 w-full px-28">
        <div className="flex flex-col justify-between">
          <h1 className="text-6xl font-bold tracking-wide space-y-2">
            <p>
              Hello There<span className="text-mint">,</span>
            </p>
            <p>
              I<span className="text-mint">'</span>m Matt
            </p>
          </h1>
          <div className="text-gradientPink">
            <MediaLinks />
          </div>
          <div className="text-xl font-semibold">
            <p>
              Always Learning<span className="text-mint">.</span>
            </p>
            <p>
              Always Professional<span className="text-mint">.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end py-20">
          <h2 className="text-3xl font-bold tracking-wide flex flex-col items-end">
            <p>I am a Fullstack Javascript</p>
            <p> and Python Developer</p>
          </h2>
          <div className="uppercase flex flex-col items-end">
            <h3 className="text-xl font-semibold tracking-wide">
              Dedicated To<span className="text-mint">:</span>
            </h3>
            <p className="text-4xl font-semibold tracking-wide">{buzzWord}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
