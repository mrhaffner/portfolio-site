import forecastImage from '../public/images/project-list/forecast-your-snow.jpeg';
import personalBlog from '../public/images/project-list/personal-blog.jpeg';
import trelloClone from '../public/images/project-list/trello-clone.jpeg';
import onTheSnowClone from '../public/images/project-list/on-the-snow-clone.jpeg';
import projectDetails from '../public/project-details.json';
import FlipCard from './FlipCard';
import { ProjectDetail } from '../types';
//background color for empty boxes - not white?
//add breakpoints

const ProjectList = () => {
  const imageArray = [forecastImage, trelloClone, personalBlog, onTheSnowClone];
  const data: ProjectDetail[] = projectDetails.data;
  return (
    <div className="w-full h-full flex flex-wrap bg-lightMint">
      {data.map((detail: ProjectDetail, i: number) => (
        <FlipCard
          image={imageArray[i]}
          project={detail}
          key={i + Math.random()}
        />
      ))}
      {/* maybe add pattern? */}
      <div className="bg-mint flex-1"></div>
    </div>
  );
};

export default ProjectList;
