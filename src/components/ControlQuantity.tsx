import { Minus, Plus } from "phosphor-react";

type Props = {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

const ControlQuantity = ({ quantity, onRemove, onAdd }: Props) => (
  <div className="flex space-x-[4px] items-center justify-between w-[72px] h-[38px] bg-base-button-add p-[8px] rounded-md">
    <button
      onClick={onRemove}
      type="button"
      className="outline-0 border-0 text-purple-dark"
    >
      <Minus color="#4B2995" weight="fill" width="14px" height="14px" />
    </button>

    <strong className="text-purple-dark">{quantity}</strong>

    <button
      onClick={onAdd}
      type="button"
      className="outline-0 border-0 text-purple-dark"
    >
      <Plus color="#4B2995" weight="fill" width="14px" height="14px" />
    </button>
  </div>
);

export default ControlQuantity;
