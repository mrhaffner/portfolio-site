import useTextSlider from '../hooks/useTextSlider';

const Header = () => {
  const buzzWords = ['Excellence', 'Education', 'Innovation'];
  const { word: buzzWord } = useTextSlider(buzzWords);

  return (
    <section>
      <h1>Title</h1>
      {/* down button */}
      <div>
        <h3>Dedicated To</h3>
        <p>{buzzWord}</p>
      </div>
    </section>
  );
};

export default Header;
