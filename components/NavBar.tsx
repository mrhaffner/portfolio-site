import Link from 'next/link';

const NavBar = () => (
  //breakpoints
  //mobile menu
  <nav className="w-full h-20 flex justify-between items-center px-28 text-darkSlateBlue tracking-wide font-bold text-lg">
    {/* perhaps a better logo */}
    <Link href="/">
      <a className="font-arizonia text-3xl">
        Matt<span className="text-gradientPink font-black">.</span>Haffner
        <span className="text-gradientPink font-black">.</span>
      </a>
    </Link>
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
  </nav>
);

export default NavBar;
