interface Props {
  children: JSX.Element | HTMLElement;
}

const LogoContainer = ({ children }: Props) => (
  <div className="flex-1/3 flex justify-center items-center h-32">
    {children}
  </div>
);

export default LogoContainer;
