import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ProjectList from '../components/ProjectList';
import SkillsList from '../components/SkillsList';
import DividerWave from '../components/svgs/DividerWave';
import FooterWaves from '../components/svgs/FooterWaves';
import ThreeDBackground from '../components/ThreeDBackground';

//disable scrolling when hamburger menu pops up...? maybe fine, really only used on phone

const Home: NextPage = () => {
  //add suspense/loading
  //add auto-redirect back to home on 404 page
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen w-full">
        <ThreeDBackground />
        <NavBar />
        <Header />
      </div>
      <section
        id="skills"
        className="text-center bg-midnightBlue text-white pt-28 md:pt-32"
      >
        <h2 className="uppercase text-3xl md:text-4xl font-extrabold tracking-wide pb-2 px-6 md:px-0">
          Technologies I Love
        </h2>
        <h3 className="text-lg md:text-xl tracking-wide pb-12 px-6 md:px-0">
          I may know a thing or two about these technologies
          <span className="text-gradientPink font-black">.</span>
        </h3>
        <SkillsList />
      </section>
      <DividerWave topColor="#04003f" bottomColor="#4fe2c1" />
      <section
        id="projects"
        className="text-center bg-mint text-darkSlateBlue pb-20 md:pb-24 pt-8 lg:pt-0"
      >
        {/* link sort needs some pad top */}
        <h2 className="uppercase text-3xl md:text-4xl font-extrabold tracking-wide pb-16 px-6 md:px-0">
          Selected Projects
          <span className="text-gradientPink font-black">.</span>
        </h2>
        <ProjectList />
      </section>
      <DividerWave topColor="#4fe2c1" bottomColor="#fff" />
      <About />
      <FooterWaves />
      <Footer />
    </div>
  );
};

export default Home;
