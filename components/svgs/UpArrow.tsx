interface Props {
  size: number;
}

const UpArrow = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

export default UpArrow;
