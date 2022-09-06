import Education from "../components/personal/education";
import Contact from "../components/personal/contact";
import AboutMe from "../components/personal/about-me";

const Personal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <AboutMe />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

const styles = {
  container: "flex flex-col h-5/6 justify-center items-center mt-28",
  innerContainer: "m-auto text-left max-w-4xl",
};

export default Personal;
