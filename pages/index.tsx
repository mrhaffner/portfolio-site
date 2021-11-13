import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
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
      <section className="text-center bg-midnightBlue text-white py-32">
        <h2 className="uppercase text-4xl font-extrabold tracking-wide pb-2">
          Technologies I Love
        </h2>
        <h3 className="text-xl tracking-wide pb-12">
          Experience working with the following technologies
          <span className="text-gradientPink font-black">.</span>
        </h3>
        <SkillsList />
      </section>
      <section className="text-center bg-mint text-darkSlateBlue py-32">
        <h2 className="uppercase text-4xl font-extrabold tracking-wide pb-16">
          Selected Projects
          <span className="text-gradientPink font-black">.</span>
        </h2>
        <ProjectList />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
