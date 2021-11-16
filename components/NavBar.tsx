import Link from 'next/link';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import HamburgerLogo from './svgs/HamburgerLogo';

const NavBar = () => {
  const [showBurger, setShowBurger] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 648) {
      setShowBurger(false);
    } else {
      setShowBurger(true);
    }
  }, [width]);

  return (
    //breakpoints
    //mobile menu
    <nav className="w-full h-20 flex justify-between items-center px-10 xl:px-20 2xl:px-28 text-darkSlateBlue tracking-wide font-bold xl:text-lg">
      {/* perhaps a better logo */}
      <Link href="/">
        <a className="font-arizonia text-2xl md:text-3xl sm:pb-2 md:pb-0">
          Matt<span className="text-gradientPink font-black">.</span>Haffner
          <span className="text-gradientPink font-black">.</span>
        </a>
      </Link>
      {showBurger && (
        <div className="">
          <HamburgerLogo size={24} />
        </div>
      )}
      {!showBurger && (
        <ul className="flex space-x-8 uppercase">
          <li>
            <Link href="#skills">
              <a className="mint-underline">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a className="mint-underline">Projects</a>
            </Link>
          </li>
          {/* figure out what to do for this */}
          <li>
            <Link href="">
              <a className="mint-underline">Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
