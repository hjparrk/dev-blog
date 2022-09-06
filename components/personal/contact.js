import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "../ui/icons";
import SectionContainer from "./section-container";

const Contact = () => {
  return (
    <SectionContainer>
      <h1 className={styles.title}>Contact</h1>
      <h1 className={styles.description}>
        Click one of the links blow
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      </h1>
      <div className={styles.link}>
        <div className={styles.linkWithIcon}>
          <motion.p whileHover={{ scale: 1.3 }} className={styles.icon}>
            <Link href="https://github.com/hjparrk" passHref>
              <GithubIcon />
            </Link>
          </motion.p>
          <Link href="https://github.com/hjparrk">Github - hjparrk</Link>
        </div>
      </div>
    </SectionContainer>
  );
};

const styles = {
  title: "text-4xl font-extrabold mb-10",
  description: "text-xl font-light mb-5",
  link: "mb-2 text-xl font-light",
  linkWithIcon: "flex flex-row",
  icon: "text-xl font-light mr-3",
};

export default Contact;
