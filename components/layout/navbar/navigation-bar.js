import HomeLogo from "./home-logo";
import Links from "./links";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";

const NavigationBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const swtichTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="mb-2 border-2 p-1 border-white rounded-xl">
          <IoSunny
            className="w-5 h-5"
            role="button"
            onClick={() => setTheme("light")}
          />
        </div>
      );
    } else {
      return (
        <div className="mb-2 border-2 p-1 border-zinc-800 rounded-xl">
          <IoMoon
            className="w-5 h-5"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </div>
      );
    }
  };

  const variants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };

  return (
    <div className={styles.navbar}>
      <HomeLogo />
      <div className={styles.links}>
        <Links />
        <motion.div
          className="mt-2 ml-3"
          whileHover="hover"
          whileTap="tap"
          variants={variants}
        >
          {swtichTheme()}
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  navbar:
    "flex flex-row flex-wrap justify-between mb-20 py-4 lg:px-72 sm:px-20 md:px-20 border-b-2 border-gray-200 dark:border-white bg-white dark:bg-zinc-800",
  links: "flex flex-row",
};

export default NavigationBar;
