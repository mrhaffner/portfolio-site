import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectList from '../components/ProjectList';
import SkillsList from '../components/SkillsList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center bg-midnightBlue text-white">
        <h2 className="uppercase text-4xl font-extrabold tracking-wide">
          Skills and Expertise
        </h2>
        <h3 className="text-xl tracking-wide">
          Experience working with the following technologies
          <span className="text-gradientPink font-black">.</span>
        </h3>
        <SkillsList />
      </div>
      <div>
        <h2 className="text-center">Selected Projects</h2>
        <ProjectList />
      </div>
    </div>
  );
};

export default Home;
