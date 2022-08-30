import Link from "next/link";
import Image from "next/image";
// import MySelfie from "../../ui/my-selfie";

const HomeLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href="/">
          <Image
            src="/selfie.jpg"
            width={44}
            height={44}
            alt="description of image"
          />
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
  image: "mx-3 overflow-hidden border-2 border-black rounded-2xl",
  text: "text-3xl",
};

export default HomeLogo;
