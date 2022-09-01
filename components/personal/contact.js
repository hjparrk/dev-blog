import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "../ui/icons";

const Contact = () => {
  return (
    <div className="flex flex-col my-20 mr-5 items-start justify-start max-w-xl">
      <h1 className="text-4xl font-extrabold my-10">Contact</h1>
      <p className="text-xl my-5 font-light flex flex-row">
        Click one of the links blow
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      </p>
      <p className="text-xl my-1 font-light flex flex-row">
        <motion.span whileHover={{ scale: 1.3 }} className="mr-5 mt-0.5">
          <Link href="https://github.com/hjparrk" passHref>
            <GithubIcon />
          </Link>
        </motion.span>
        Github - hjparrk
      </p>
    </div>
  );
};

export default Contact;
