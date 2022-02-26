import React, { useState } from "react";
import Switch from "react-switch";

const SwitchItem = ({ switchLabel }) => {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleChange = (checkValue, checkEvent, itemId) => {
    setIsSwitched(!isSwitched);
    console.log(itemId, "has been set to", checkValue);
  };

  return (
    <label>
      <Switch
        onChange={handleChange}
        checked={isSwitched}
        onColor="#00FFEF"
        id={switchLabel}
      />{" "}
      {switchLabel}
    </label>
  );
};
export default SwitchItem;
