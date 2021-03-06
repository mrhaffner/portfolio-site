interface Props {
  topColor: string;
  bottomColor: string;
}

const DividerWave = ({ topColor, bottomColor }: Props) => (
  <svg
    id="visual"
    viewBox="0 0 900 200"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <rect x="0" y="0" width="900" height="200" fill={topColor}></rect>
    <path
      d="M0 86L50 99.8C100 113.7 200 141.3 300 135C400 128.7 500 88.3 600 76.7C700 65 800 82 850 90.5L900 99L900 201L850 201C800 201 700 201 600 201C500 201 400 201 300 201C200 201 100 201 50 201L0 201Z"
      fill={bottomColor}
      strokeLinecap="round"
      strokeLinejoin="miter"
    ></path>
  </svg>
);

export default DividerWave;
