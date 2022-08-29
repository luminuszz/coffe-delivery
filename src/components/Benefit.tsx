import { Icon } from "phosphor-react";

type Props = {
  data: {
    icon: Icon;
    title: string;
    color: string;
  };
};

const Benefit = ({ data: { icon: CurrentIcon, color, title } }: Props) => {
  const currentClass = `p-2 p-1 bg-[${color}] rounded-full flex justify-center items-center`;

  return (
    <div className="flex space-x-3 items-center  ">
      <div className={currentClass} style={{ backgroundColor: color }}>
        <CurrentIcon weight="fill" color="white" width="20px" height="20px" />
      </div>

      <span className="flex flex-nowrap text-[16px] text-base-text whitespace-nowrap">
        {title}
      </span>
    </div>
  );
};

export default Benefit;
