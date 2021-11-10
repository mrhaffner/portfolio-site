import CssLogo from './logos/CssLogo';
import HtmlLogo from './logos/HtmlLogo';
import LogoContainer from './logos/LogoContainer';
import MongoLogo from './logos/MongoLogo';
import NodeLogo from './logos/NodeLogo';
import PythonLogo from './logos/PythonLogo';
import ReactLogo from './logos/ReactLogo';
import TypescriptLogo from './logos/TypescriptLogo';
import { colors } from '../styles/colors';

const SkillsList = () => {
  const colorSecondary = colors.midnightBlue;
  const maxSize = 215;

  return (
    <div className="w-full flex flex-col justify-center items-center text-brightSkyBlue">
      <div className="w-full lg:w-240 flex flex-wrap justify-center">
        <LogoContainer>
          <TypescriptLogo height={maxSize / 4.096} width={maxSize} />
        </LogoContainer>
        <LogoContainer>
          <PythonLogo height={maxSize} width={maxSize} />
        </LogoContainer>
        <LogoContainer>
          <p className="hover:text-hoverSkyBlue">SQL</p>
        </LogoContainer>
        <LogoContainer>
          <NodeLogo height={maxSize} width={maxSize} />
        </LogoContainer>
        <LogoContainer>
          <ReactLogo height={maxSize / 2} width={maxSize} />
        </LogoContainer>
        <LogoContainer>
          <MongoLogo height={maxSize / 2.1747499} width={maxSize} />
        </LogoContainer>
        <LogoContainer>
          <>
            <CssLogo
              colorSecondary={colorSecondary}
              height={maxSize / 3}
              width={maxSize / 3}
            />
            <p>CSS</p>
            <span className="opacity-0">SS</span>
          </>
        </LogoContainer>
        <LogoContainer>
          <>
            <HtmlLogo
              colorSecondary={colorSecondary}
              height={maxSize / 3}
              width={maxSize / 3}
            />
            <p>HTML</p>
          </>
        </LogoContainer>
      </div>
    </div>
  );
};

export default SkillsList;
