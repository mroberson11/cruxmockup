import React, { useState } from "react";
import Switch from "react-switch";

const SwitchItem = ({ switchLabel }) => {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleChange = (checkValue, checkEvent, itemId) => {
    setIsSwitched(!isSwitched);
  };

  return (
    <label htmlFor={switchLabel}>
      <Switch
        onChange={handleChange}
        checked={isSwitched}
        onColor="#00FFEF"
        id={switchLabel}
        name={switchLabel}
      />{" "}
      {switchLabel}
    </label>
  );
};
export default SwitchItem;
