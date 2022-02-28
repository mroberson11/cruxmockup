import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ verified, recaptchaCallback }) => {
  const [isHuman, setIsHuman] = useState(verified);
  function onChange(value) {
    setIsHuman(true);
  }
  useEffect(() => {
    recaptchaCallback(isHuman);
  }, [isHuman, recaptchaCallback]);

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
