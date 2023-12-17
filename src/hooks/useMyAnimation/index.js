import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useMyAnimation = ({ animation }) => {
  const initial = { opacity: 0, y: 30 };
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return {
    ref,
    initial,
  };
};
