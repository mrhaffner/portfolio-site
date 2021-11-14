import { useEffect, useState } from 'react';

const useTextSlider = (wordList: string[]) => {
  const [wordIndex, setWordIndex] = useState(0);

  const changeWordIndex = () => {
    setWordIndex((wordIndex) =>
      wordIndex === wordList.length - 1 ? 0 : wordIndex + 1,
    );
  };

  useEffect(() => {
    setInterval(changeWordIndex, 2000);
  }, []);

  return { word: wordList[wordIndex] };
};

export default useTextSlider;
