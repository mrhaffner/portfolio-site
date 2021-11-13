import Link from 'next/link';
import EmailLogo from './svgs/EmailLogo';
import GithubLogo from './svgs/GithubLogo';
import LinkedInLogo from './svgs/LinkedInLogo';

const MediaLinks = () => {
  const logoSize = 33;

  return (
    <div className="flex space-x-5">
      <Link href="https://github.com/mrhaffner">
        <a className="hover:text-hoverSkyBlue">
          <GithubLogo height={logoSize} width={logoSize} />
        </a>
      </Link>
      <Link href="">
        <a className="hover:text-hoverSkyBlue">
          <LinkedInLogo size={logoSize} />
        </a>
      </Link>
      <Link href="mailto:mrhaffner@gmail.com">
        <a className="hover:text-hoverSkyBlue">
          <EmailLogo size={logoSize} />
        </a>
      </Link>
    </div>
  );
};

export default MediaLinks;
