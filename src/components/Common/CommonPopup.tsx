import { FunctionComponent, useState } from "react";

interface CommonPopupProps {
  close?: boolean;
  size?: "lg" | "md" | "sm" | "auto";
  position?: "left" | "center" | "right";
}

const CommonPopup: FunctionComponent<CommonPopupProps> = ({
  close = false,
  size = "md",
  position = "center",
  children,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={"CommonPopup " + (size || "md") + " " + (position || "")}
      style={{ display: open ? "block" : "none" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="content">{children}</div>
        {close && (
          <div
            className="close"
            onClick={() => setOpen(false)}
            style={{ paddingLeft: "20px" }}
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7.5L7 21.5"
                stroke="#A2A2A2"
                strokeWidth="3.12133"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7.5L21 21.5"
                stroke="#A2A2A2"
                strokeWidth="3.12133"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonPopup;
