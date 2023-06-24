import Image from "next/image";
import Backdrop from "../Backdrop";
import Icon1 from "../../../public/videos/AnimatedCheckmark.gif";
import { motion } from "framer-motion";
import {
  ModalContent,
  ModalHeading,
  ImageWrapper,
  ModalText,
} from "./ModalElements";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalContent>
          <ImageWrapper>
            <Image
              src={Icon1}
              alt="Animated Checkmark"
              width="150px"
              height="120px"
              priority={true}
            />
          </ImageWrapper>
          <ModalHeading>Thank You!</ModalHeading>
          <ModalText>
            Your form submission was successful! We sincerely appreciate you
            reaching out to us. We know your time is valuable which is why
            we&apos;re committed to responding within a 24 hour time frame
            barring any technical difficulties. If your inquiry is urgent,
            please contact us via 601-927-1778.{" "}
          </ModalText>
        </ModalContent>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
