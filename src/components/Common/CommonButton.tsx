import { FunctionComponent } from "react";

interface CommonButtonProps {
  className: string;
  lean?: boolean;
  onClick?: any;
  disabled?: boolean;
}

const CommonButton: FunctionComponent<CommonButtonProps> = ({
  className,
  disabled = false,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (disabled) return;
    try {
      onClick();
    } catch (e) {
      return;
    }
  };
  return (
    <span onClick={handleClick}>
      <button className={"rw-btn " + className + (disabled ? " disabled" : "")}>
        <span>{children}</span>
      </button>
    </span>
  );
};

export default CommonButton;
