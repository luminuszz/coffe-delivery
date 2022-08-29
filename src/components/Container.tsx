import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => (
  <div className="container mx-auto max-w-[1440px]">{children}</div>
);

export default Container;
