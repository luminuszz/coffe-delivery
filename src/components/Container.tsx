import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => (
  <div className=" mx-auto max-w-[1450px] px-[10px]">{children}</div>
);

export default Container;
