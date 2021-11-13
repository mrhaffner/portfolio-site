import CssLogo from './svgs/CssLogo';
import HtmlLogo from './svgs/HtmlLogo';
import MongoLogo from './svgs/MongoLogo';
import NodeLogo from './svgs/NodeLogo';
import PythonLogo from './svgs/PythonLogo';
import ReactLogo from './svgs/ReactLogo';
import TypescriptLogo from './svgs/TypescriptLogo';
import { colors } from '../styles/colors';
import DatabaseLogo from './svgs/DatabaseLogo';

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
