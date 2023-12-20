import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: "sticky", minHeight: "100vh", zIndex: "15" }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
