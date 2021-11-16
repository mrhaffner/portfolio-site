import MediaLinks from './MediaLinks';
import NavLinks from './NavLinks';
import HamburgerLogo from './svgs/HamburgerLogo';

interface Props {
  toggleBurgerMenu: () => void;
}

const HamburgerMenu = ({ toggleBurgerMenu }: Props) => (
  <div className="absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center">
    <div
      className="absolute top-0 right-0 pt-7 pr-6 cursor-pointer"
      onClick={toggleBurgerMenu}
    >
      <HamburgerLogo size={24} />
    </div>
    <nav className="h-3/5 text-darkSlateBlue tracking-wide font-bold text-2xl flex flex-col justify-between">
      <ul className="flex flex-col justify-between h-1/2 text-center">
        <NavLinks />
      </ul>
      <div className="text-brightSkyBlue">
        <MediaLinks />
      </div>
    </nav>
  </div>
);

export default HamburgerMenu;
