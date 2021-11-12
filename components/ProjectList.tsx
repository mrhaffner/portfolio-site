import forecastImage from '../public/images/project-list/forecast-your-snow.jpeg';
import personalBlog from '../public/images/project-list/personal-blog.jpeg';
import trelloClone from '../public/images/project-list/trello-clone.jpeg';
import onTheSnowClone from '../public/images/project-list/on-the-snow-clone.jpeg';
import projectDetails from '../public/project-details.json';
import ProjectFlipCard from './ProjectFlipCard';
import { ProjectDetail } from '../types';
import ProjectMobileCard from './ProjectMobileCard';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

const ProjectList = () => {
  const imageArray = [forecastImage, trelloClone, personalBlog, onTheSnowClone];
  const data: ProjectDetail[] = projectDetails.data;
  const [showing, setShowing] = useState('');
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 648) {
      setShowing('');
    }
  }, [width]);
  return (
    <div className="w-full h-full flex flex-wrap bg-lightMint">
      {data.map((detail: ProjectDetail, i: number) =>
        width >= 648 ? (
          <ProjectFlipCard
            image={imageArray[i]}
            project={detail}
            key={i + Math.random()}
          />
        ) : (
          <ProjectMobileCard
            image={imageArray[i]}
            project={detail}
            key={i + Math.random()}
            showing={showing}
            setShowing={setShowing}
          />
        ),
      )}
      <div className="bg-mint flex-1"></div>
    </div>
  );
};

export default ProjectList;
