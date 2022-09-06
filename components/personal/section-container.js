import { motion } from "framer-motion";

const SectionContainer = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="m-20 p-6 hover:bg-gray-200 text-black dark:text-white dark:hover:text-black rounded-3xl"
    >
      {props.children}
    </motion.div>
  );
};

export default SectionContainer;
