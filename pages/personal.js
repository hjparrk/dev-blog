import Education from "../components/personal/education";
import Contact from "../components/personal/contact";
import AboutMe from "../components/personal/about-me";

const Personal = () => {
  return (
    <>
      <div className={styles.container}>
        <AboutMe />
        <Education />
        <Contact />
      </div>
    </>
  );
};

const styles = {
  container: "flex flex-col justify-center items-center",
};

export default Personal;
