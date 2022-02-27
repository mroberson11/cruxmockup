import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  const [isHuman, setIsHuman] = useState(false);
  function onChange(value) {
    setIsHuman(true);
  }
  useEffect(() => {
    console.log("Use Effect triggered. isHuman value: ", isHuman);
  }, [isHuman]);

  return (
    <>
      <ReCAPTCHA
        sitekey="6LcKWKIeAAAAADpUbgi4gF6n1ycBkK-g4Jxbszkk"
        onChange={onChange}
        theme="dark"
      />
    </>
  );
};
export default Recaptcha;
