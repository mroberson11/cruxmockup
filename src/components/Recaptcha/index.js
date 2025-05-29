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
        sitekey="6LdWDU4rAAAAAHxBSyxYx42Xm_QjJtjAq7uGDiZF"
        onChange={onChange}
        theme="dark"
      />
    </>
  );
};
export default Recaptcha;
