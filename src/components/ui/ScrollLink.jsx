import { motion } from "framer-motion";
import { handleNavClick } from "../../utils/scroll";

const ScrollLink = ({
  href,
  children,
  className = "",
  onAfterClick,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
}) => {
  const handleClick = (e) => {
    handleNavClick(e, href);
    onAfterClick?.();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export default ScrollLink;
