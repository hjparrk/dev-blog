import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const AboutItemsList = (props) => {
  const { aboutItems } = props;

  const { theme } = useTheme();

  const conatiner_style =
    theme === "dark" ? styles.container_dark : styles.container_light;

  return (
    <>
      {aboutItems.map((item) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          key={item.title}
          className={conatiner_style}
        >
          <div className="m-5 text-5xl font-extrabold">
            <h1>{item.title}</h1>
          </div>
          <div className="m-5 text-3xl font-bold">
            <h1>{item.subtitle}</h1>
          </div>
          <div className="m-5 text-2xl">
            <h1>{item.description}</h1>
          </div>
        </motion.div>
      ))}
    </>
  );
};

const styles = {
  container_light:
    "m-10 p-6 max-w-4xl text-black hover:bg-gray-200 flex flex-col justify-center items-start rounded-3xl",
  container_dark:
    "m-10 p-10 max-w-4xl text-white hover:text-black hover:bg-gray-200 flex flex-col justify-center items-start rounded-2xl",
};

export default AboutItemsList;
