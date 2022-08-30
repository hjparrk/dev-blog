import Link from "next/link";
import MySelfie from "../../ui/my-selfie";

const HomeLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href="/" passHref>
          <MySelfie />
        </Link>
      </div>
      <div>
        <Link href="/">
          <span className={styles.text}>Hyojoon - Dev</span>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: "flex justify-center items-center",
  image:
    "mx-3 overflow-hidden border-2 border-black dark:border-white rounded-xl",
  text: "text-2xl",
};

export default HomeLogo;
