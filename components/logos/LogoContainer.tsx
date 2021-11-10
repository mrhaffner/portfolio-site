interface Props {
  children: JSX.Element | HTMLElement;
}

const LogoContainer = ({ children }: Props) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center h-24 sm:h-32 hover:text-hoverSkyBlue">
    {children}
  </div>
);

export default LogoContainer;
