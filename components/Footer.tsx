import MediaLinks from './MediaLinks';
import Link from 'next/link';
import UpArrow from './svgs/UpArrow';

const Footer = () => (
  <footer className="flex flex-col items-center text-white bg-midnightBlue space-y-8 pt-20 pb-16">
    <MediaLinks />
    <Link href="#top">
      <a className="flex flex-col items-center space-y-1 text-lg hover:text-hoverSkyBlue">
        <UpArrow size={25} />
        <p>Back to Top</p>
      </a>
    </Link>
    <p>
      © <span className="font-pontano">2021</span> Matt Haffner
    </p>
  </footer>
);

export default Footer;
