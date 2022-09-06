import SectionContainer from "./section-container";

const AboutMe = () => {
  return (
    <SectionContainer>
      <h1 className={styles.title}>PARK, HYOJOON</h1>
      <p className={styles.description}>
        I&apos;m a student developer based in Seoul, Korea and Sydney,
        Australia. I spend most of time developing my dev-blog using React.js
        and a fullstack React framework Next.js as of Aug, 2022.
      </p>
      <p className={styles.description}>
        During the time at university, I have accumulated numerous practical
        experiences of implementing data structures and algorithms, and
        programming skills of Python, Java, and C.
      </p>
    </SectionContainer>
  );
};

const styles = {
  title: "text-4xl font-extrabold mb-10",
  description: "text-2xl font-light mb-5",
};

export default AboutMe;
