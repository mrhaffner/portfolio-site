import CssLogo from './logos/CssLogo';
import HtmlLogo from './logos/HtmlLogo';
import LogoContainer from './logos/LogoContainer';
import MongoLogo from './logos/MongoLogo';
import NodeLogo from './logos/NodeLogo';
import PythonLogo from './logos/PythonLogo';
import ReactLogo from './logos/ReactLogo';
import TypescriptLogo from './logos/TypescriptLogo';
import { colors } from '../styles/colors';
import DatabaseLogo from './logos/DatabaseLogo';

const SkillsList = () => {
  const colorSecondary = colors.midnightBlue;
  const maxSize = 215;

  return (
    <div className="w-full flex flex-col justify-center items-center text-brightSkyBlue">
      <div className="w-full lg:w-240 flex flex-wrap justify-center font-semibold select-none">
        <TypescriptLogo height={maxSize / 4.096} width={maxSize} />
        <PythonLogo height={maxSize} width={maxSize} />
        <DatabaseLogo height={maxSize / 3} width={maxSize / 3} />
        <NodeLogo height={maxSize} width={maxSize} />
        <ReactLogo height={maxSize / 2} width={maxSize} />
        <MongoLogo height={maxSize / 2.1747499} width={maxSize} />
        <CssLogo
          colorSecondary={colorSecondary}
          height={maxSize / 3}
          width={maxSize / 3}
        />
        <HtmlLogo
          colorSecondary={colorSecondary}
          height={maxSize / 3}
          width={maxSize / 3}
        />
      </div>
    </div>
  );
};

export default SkillsList;
