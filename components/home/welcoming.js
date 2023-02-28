import { motion } from "framer-motion";

function Welcoming(props) {
  return (
    <div className="flex flex-col items-center mb-14">
      <h1 className="mt-40 mb-12 font-bold text-5xl">
        Wanna &nbsp;explore &nbsp;my &nbsp;blog?
      </h1>
      <div className="flex flex-row mb-40 pb-40 text-4xl">
        <h2 className="font-medium">highfive&nbsp; me 채연&emsp;</h2>
        <motion.h2
          className="font-medium"
          onClick={props.onShowWelcoming}
          initial={{ rotate: 30 }}
          animate={{
            rotate: [30, -10, 0, 70, 30],
          }}
          whileHover={{ scale: 2 }}
        >
          👋
        </motion.h2>
      </div>
    </div>
  );
}

export default Welcoming;
