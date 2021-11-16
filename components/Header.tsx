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
  const { word: buzzWord } = useTextSlider(buzzWords);

  return (
    //add breakpoint for h-header, probably in css file
    //add regular breakpoints
    <section className="h-header flex pt-6 md:pt-0 md:items-center text-darkSlateBlue">
      <div className="flex items-center flex-col lg:flex-row lg:items-stretch lg:justify-between md:h-3/4 w-full px-10 xl:px-20 2xl:px-28">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl 2xl:text-6xl font-bold tracking-wide space-y-2">
            <p>
              Hello There<span className="text-mint">,</span>
            </p>
            <p>
              I<span className="text-mint">'</span>m Matt
            </p>
          </h1>
          <div className="hidden xl:block text-brightSkyBlue">
            <MediaLinks size={37} />
          </div>
          <div className="hidden lg:block xl:hidden text-brightSkyBlue">
            <MediaLinks size={30} />
          </div>
          <div className="hidden lg:block xl:text-lg 2xl:text-xl font-semibold">
            <p>
              Always Learning<span className="text-mint">.</span>
            </p>
            <p>
              Always Professional<span className="text-mint">.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end py-10 lg:py-20">
          <h2 className="text-2xl 2xl:text-3xl font-bold tracking-wide flex flex-col items-end pl-7 lg:pl-0">
            <p>I am a Fullstack Javascript</p>
            <p>and Python Developer</p>
          </h2>
          <div className="invisible lg:visible uppercase flex flex-col items-end">
            <h3 className="xl:text-lg 2xl:text-xl font-semibold tracking-wide">
              Dedicated To<span className="text-mint">:</span>
            </h3>
            <p className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold tracking-wide">
              {buzzWord}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
