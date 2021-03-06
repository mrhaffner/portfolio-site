import Link from 'next/link';

const NavLinks = () => (
  <>
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
      <Link href="#about">
        <a className="mint-underline">About</a>
      </Link>
    </li>
    <li>
      <Link href="#contact">
        <a className="mint-underline">Contact</a>
      </Link>
    </li>
  </>
);

export default NavLinks;
