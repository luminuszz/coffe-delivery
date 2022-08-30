import { Minus, Plus } from "phosphor-react";

const ControlQuantity = ({ value }: { value: number }) => (
  <div className="flex space-x-[4px] items-center justify-between w-[72px] h-[38px] bg-base-button-add p-[8px] rounded-md">
    <button type="button" className="outline-0 border-0 text-purple-dark">
      <Minus color="#4B2995" weight="fill" width="14px" height="14px" />
    </button>

    <strong className="text-purple-dark">{value}</strong>

    <button type="button" className="outline-0 border-0 text-purple-dark">
      <Plus color="#4B2995" weight="fill" width="14px" height="14px" />
    </button>
  </div>
);

export default ControlQuantity;
