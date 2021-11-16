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
    <div className="sm:ml-10 lg:ml-24 text-brightSkyBlue">
      <div className="m-auto w-215 sm:w-542 lg:w-240 flex flex-col sm:flex-row flex-wrap sm:justify-center font-semibold select-none">
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
