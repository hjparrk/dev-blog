import Link from "next/link";
import { ReactIcon, NextIcon, GithubIcon } from "../../ui/icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className=" text-sm">This blog is written using </p>
      <div className="ml-2 cursor-pointer">
        <Link href="https://reactjs.org/" passHref>
          <ReactIcon />
        </Link>
      </div>
      <div className="ml-2 mr-3 cursor-pointer">
        <Link href="https://nextjs.org/" passHref>
          <NextIcon />
        </Link>
      </div>
      <div className="mx-5 cursor-pointer">
        <Link href="https://github.com/hjparrk" passHref>
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: "flex flex-row justify-center items-center mt-20 p-5",
};

export default Footer;
