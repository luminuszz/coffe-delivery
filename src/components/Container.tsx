import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => (
  <div className="container mx-[160px]">{children}</div>
);

export default Container;
