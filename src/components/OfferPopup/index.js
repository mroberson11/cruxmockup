import { useState, useEffect } from "react";
import Modal from "../Modal";
import CruxLogo from "../../images/CompanyLogos/blue-w-tagline.png";


const OfferPopup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {" "}
      {showModal && (
        <Modal
          handleClose={handleCloseModal}
          imageSrc={CruxLogo}
          modalHeading="$300 Bonus"
          modalText="Know someone looking for a website or hoping to boost their Google search rankings? Refer them to Crux for a free $300! If they become a client, we'll send you a check in the mail!"
          animationVariants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        />
      )}
    </>
  );
};

export default OfferPopup;