import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal";

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
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};
export default Success;
