import Link from 'next/link';

const About = () => (
  //add resume?
  <section
    id="about"
    className="flex flex-col items-center text-darkSlateBlue pb-20 md:pb-24 pt-8 lg:pt-0"
  >
    <h2 className="uppercase text-3xl md:text-4xl font-extrabold tracking-wide pb-16 px-6 md:px-0">
      About
      <span className="text-gradientPink font-black">.</span>
    </h2>
    <div className="flex space-y-14 lg:space-y-0 items-center lg:items-start justify-between flex-col lg:flex-row xl:w-280 text-lg md:text-xl lg:px-10 xl:px-0">
      {/* create and put a mint dot background offset to the image */}
      <div className="w-9/12 lg:w-5/12">Replace with Image</div>
      <div className="w-9/12 lg:w-5/12 space-y-4 leading-normal">
        {/* too many 'I's' */}
        <p>
          I have always had a passion for learning. As the son of two teachers,
          I have always been driven to learn. If there is one strength that I
          was endowed with, it is a talent and drive for self-education.
        </p>
        {/* replace software and data with a better phrase */}
        <p>
          I am a self-taught software engineer. I hold a bachelor's degree in
          psychology from Metropolitan State University. After falling in love
          with software and data, I have returned to Metro to pursue a degree in
          data science.
        </p>
        {/* talk about passion for health/self-development.  maybe it's own paragraph
        tie to coaching bjj */}
        <p>
          I have a passion for technical hobbies and sports. I coach Brazilian
          Jiu-Jitsu at the legendary{' '}
          <Link href="https://theacademymn.com/">
            <a className="border-b-4 border-gradientPink hover:bg-gradientPink">
              Minnesota Martial Arts Academy
            </a>
          </Link>
          . Adventurous at heart, you may also find me skiing or rock climbing.
        </p>
      </div>
    </div>
  </section>
);

export default About;
