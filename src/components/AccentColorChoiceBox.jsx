import { BiCheck } from "react-icons/bi";
const AccentColorChoiceBox = ({
  className,
  onClick,
  id,
  activeAccentColorId,
}) => (
  <div
    className={
      "rounded cursor-pointer mr-1 border-2 ease-in duration-100 " + className
    }
    onClick={() => onClick(id)}
  >
    {id === activeAccentColorId ? (
      <BiCheck className="text-white h-5 w-5 text-black" />
    ) : (
      <div className="h-5 w-5"></div>
    )}
  </div>
);

export default AccentColorChoiceBox;
