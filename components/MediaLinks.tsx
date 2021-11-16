import Link from 'next/link';
import EmailLogo from './svgs/EmailLogo';
import GithubLogo from './svgs/GithubLogo';
import LinkedInLogo from './svgs/LinkedInLogo';

interface Props {
  size?: number;
}

const MediaLinks = ({ size }: Props) => {
  const logoSize = size || 33;

  return (
    <div className="flex space-x-5">
      <Link href="https://github.com/mrhaffner">
        <a className="hover:text-hoverSkyBlue transition">
          <GithubLogo height={logoSize} width={logoSize} />
        </a>
      </Link>
      {/* need linked in */}
      <Link href="/">
        <a className="hover:text-hoverSkyBlue">
          <LinkedInLogo size={logoSize} />
        </a>
      </Link>
      <Link href="mailto:mrhaffner@gmail.com">
        <a className="hover:text-hoverSkyBlue transition">
          <EmailLogo size={logoSize} />
        </a>
      </Link>
    </div>
  );
};

export default MediaLinks;
