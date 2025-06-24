import classNames from "classnames/bind";
import styles from "./ButtonGroup.module.css";
import { useState } from "react";

export default function ButtonGroup({
  initialButtons,
}: {
  initialButtons: ButtonGroupProps[];
}) {
  const cs = classNames.bind(styles);
  const initialActiveStatus: { [key: string]: boolean } = {};
  initialButtons.forEach((btn) => {
    initialActiveStatus[btn.id] = false;
  });
  const [activeStatus, setActiveStatus] = useState(initialActiveStatus);
  const handleToggleActiveButton = (id: number) => {
    setActiveStatus((activeStatus) => ({
      ...activeStatus,
      [id]: !activeStatus[id],
    }));
  };

  const handleResetActiveStatus = () => {
    const resetActiveStatus: { [key: string]: boolean } = {};
    initialButtons.forEach((btn) => {
      resetActiveStatus[btn.id] = false;
    });
    setActiveStatus(resetActiveStatus);
  };

  const activeCount = Object.values(activeStatus).filter(Boolean).length;

  return (
    <>
      <h1>Active Count: {activeCount}</h1>
      <div>
        {initialButtons.map((button) => (
          <button
            key={button.id}
            disabled={button.isDisabled}
            onClick={() => handleToggleActiveButton(button.id)}
            className={cs("button", {
              disabled: button.isDisabled,
              active: activeStatus[button.id],
              highlight: button.id === 2,
            })}
          >
            {button.icon}
            {button.label}
          </button>
        ))}
      </div>
      <div>
        <button className={cs("button")} onClick={handleResetActiveStatus}>
          Reset
        </button>
      </div>
    </>
  );
}
