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
          <div className="m-5 text-4xl font-extrabold">
            <h1>{item.title}</h1>
          </div>
          <div className="m-5 text-2xl font-bold">
            <h1>{item.subtitle}</h1>
          </div>
          <div className="m-5 text-xl">
            <h1>{item.description}</h1>
          </div>
        </motion.div>
      ))}
    </>
  );
};

const styles = {
  container_light:
    "my-10 ml-2 mr-8 p-6 max-w-3xl text-black hover:bg-gray-200 flex flex-col justify-center items-start rounded-3xl",
  container_dark:
    "my-10 ml-2 mr-8 p-6 max-w-3xl text-white hover:text-black hover:bg-gray-200 flex flex-col justify-center items-start rounded-2xl",
};

export default AboutItemsList;
