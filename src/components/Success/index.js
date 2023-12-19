import Modal from "../Modal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CheckmarkGif from "../../../public/videos/AnimatedCheckmark.gif";

const Success = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            imageSrc={CheckmarkGif}
            modalHeading="Thank You!"
            modalText="Your form submission was successful! We sincerely appreciate you reaching out to us. We know your time is valuable which is why we're committed to responding within a 24-hour time frame barring any technical difficulties. If your inquiry is urgent, please contact us via 601-927-1778."
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default Success;
