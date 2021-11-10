interface Props {
  colorSecondary: string;
  height: number;
  width: number;
}

const HtmlLogo = ({ colorSecondary, height, width }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    className="fill-current"
  >
    <path d="M71,460 L30,0 481,0 440,460 255,512" />
    <path d="M256,472 L405,431 440,37 256,37" />
    <path
      fill={colorSecondary}
      d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
    />
    <path
      fill={colorSecondary}
      d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
    />
  </svg>
);

export default HtmlLogo;
