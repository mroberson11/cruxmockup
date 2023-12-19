import React from "react";
import Image from "next/image";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import {
  ModalContent,
  ModalHeading,
  ImageWrapper,
  ModalText,
  CloseButton,
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

const Modal = ({
  handleClose,
  imageSrc,
  imageAlt,
  modalHeading,
  modalText,
}) => {
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
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <ImageWrapper>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width="150px"
              height="120px"
              priority={true}
            />
          </ImageWrapper>
          <ModalHeading>{modalHeading}</ModalHeading>
          <ModalText>{modalText}</ModalText>
        </ModalContent>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
