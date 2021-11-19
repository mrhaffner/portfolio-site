import Link from 'next/link';
import { useEffect, useState } from 'react';
import useToggle from '../hooks/useToggle';
import useWindowDimensions from '../hooks/useWindowDimensions';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';
import HamburgerLogo from './svgs/HamburgerLogo';

const NavBar = () => {
  const [showBurgerMenu, toggleBurgerMenu] = useToggle();
  const [showBurgerIcon, setShowBurgerIcon] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 648) {
      setShowBurgerIcon(false);
    } else {
      setShowBurgerIcon(true);
    }
  }, [width]);

  return (
    //breakpoints
    //mobile menu
    <>
      <nav className="w-full h-20 flex justify-between items-center px-6 md:px-10 xl:px-20 2xl:px-28 text-darkSlateBlue tracking-wide font-bold xl:text-lg">
        {/* perhaps a better logo */}
        <Link href="/">
          <a className="font-arizonia text-2xl md:text-3xl sm:pb-2 md:pb-0">
            Matt<span className="text-gradientPink font-black">.</span>Haffner
            <span className="text-gradientPink font-black">.</span>
          </a>
        </Link>
        {showBurgerIcon && (
          <div className="cursor-pointer" onClick={toggleBurgerMenu}>
            <HamburgerLogo size={24} />
          </div>
        )}
        {!showBurgerIcon && (
          <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 uppercase">
            <NavLinks />
          </ul>
        )}
      </nav>
      {showBurgerMenu && <HamburgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
    </>
  );
};

export default NavBar;
