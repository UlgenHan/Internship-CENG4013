import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps): JSX.Element {
  return <main className="main">{children}</main>;
}

export default Main;
