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
        sitekey="6LfKCk4rAAAAAPe-CMr9BgRaeBeF34cCbeWoc2JP"
        onChange={onChange}
        theme="dark"
      />
    </>
  );
};
export default Recaptcha;
