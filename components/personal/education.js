import SectionContainer from "./section-container";

const Education = () => {
  return (
    <SectionContainer>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.container}>
        <h1 className={styles.date}>2018-07 - 2020-06</h1>
        <h1 className={styles.school}>the University of Sydney, Australia</h1>
        <h1 className={styles.detail}>Department of Engineering & IT</h1>
        <h1 className={styles.detail}>
          Bachelor of Advanced Computing (Computer Science Major)
        </h1>
      </div>
      <div className={styles.container}>
        <h1 className={styles.date}>2020-07 - 2020-12</h1>
        <h1 className={styles.school}>
          Leave of Absence (the University of Sydney)
        </h1>
        <h1 className={styles.detail}>COVID-19 Pandemic</h1>
      </div>
      <div className={styles.container}>
        <h1 className={styles.date}>2021-03 - 2022-12</h1>
        <h1 className={styles.school}>
          Leave of Absence (the University of Sydney)
        </h1>
        <h1 className={styles.detail}>Mandotory Military Service In Korea</h1>
      </div>
    </SectionContainer>
  );
};

const styles = {
  title: "text-4xl font-extrabold mb-10",
  container: "mb-8",
  date: "text-xl font-light mb-2",
  school: "text-2xl font-semibold mb-2",
  detail: "text-xl font-normal mb-2",
};

export default Education;
