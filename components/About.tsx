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
    <div className="flex justify-between w-280">
      <div className="w-5/12">Replace with Image</div>
      <div className="w-5/12 text-xl space-y-4">
        {/* too many 'I's' */}
        <p>
          I have always had a passion for learning. As a son of two teachers, I
          have always been driven to learn. If there is one strength that I was
          endowed with, it is a talent and drive for self-education.
        </p>
        {/* replace software and data with a better phrase */}
        <p>
          I am a self-taught software engineer. I hold a bachelor's degree in
          psychology from Metropolitan State University. After falling in love
          with software and data, I have returned to Metro to purse a degree in
          data science.
        </p>
        <p>
          I have a passion for technical hobbies and sports. I coach Brazilian
          Jiu-Jitsu at the legendary{' '}
          <Link href="https://theacademymn.com/">
            <a className="border-b-4 border-gradientPink hover:bg-gradientPink">
              Minnesota Martial Arts Academy
            </a>
          </Link>
          . Adventurous at heart, I also enjoy skiing and rock climbing.
        </p>
      </div>
    </div>
  </section>
);

export default About;
