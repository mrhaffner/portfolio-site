import CssLogo from './logos/CssLogo';
import HtmlLogo from './logos/HtmlLogo';
import LogoContainer from './logos/LogoContainer';
import MongoLogo from './logos/MongoLogo';
import NodeLogo from './logos/NodeLogo';
import PythonLogo from './logos/PythonLogo';
import ReactLogo from './logos/ReactLogo';
import TypescriptLogo from './logos/TypescriptLogo';

const SkillsList = () => {
  const colorPrimary = '#bbb';
  const colorSecondary = '#fff';
  const maxSize = 215;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full lg:w-240 flex flex-wrap justify-center">
        <LogoContainer>
          <TypescriptLogo
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            height={maxSize / 4.096}
            width={maxSize}
          />
        </LogoContainer>
        <LogoContainer>
          <PythonLogo
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            height={maxSize}
            width={maxSize}
          />
        </LogoContainer>
        <LogoContainer>
          <p>SQL</p>
        </LogoContainer>
        <LogoContainer>
          <NodeLogo
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            height={maxSize}
            width={maxSize}
          />
        </LogoContainer>
        <LogoContainer>
          <ReactLogo
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            height={maxSize / 2}
            width={maxSize}
          />
        </LogoContainer>
        <LogoContainer>
          <MongoLogo
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            height={maxSize / 2.1747499}
            width={maxSize}
          />
        </LogoContainer>
        <LogoContainer>
          <>
            <CssLogo
              colorPrimary={colorPrimary}
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
              colorPrimary={colorPrimary}
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
