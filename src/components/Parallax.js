import {
  motion,
  useReducedMotion,
  useViewportScroll,
  useTransform,
} from "framer-motion";

export function Parallax(props) {
  const { children } = props;

  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [-0.5, 1], [0, -0.3], {
    clamp: false,
  });

  return (
    <motion.div style={{ y: shouldReduceMotion ? 0 : y }}>
      {children}
    </motion.div>
  );
}
