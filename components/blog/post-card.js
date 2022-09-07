import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PostCard = (props) => {
  const { post } = props;

  const linkPath = `/blog/${post.slug}`;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const formattedDate = new Date(post.date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const languageList = (
    <ul className="flex flex-row mb-2">
      {post.languages.map((language) => (
        <h1 className="text-base mr-2" key={language}>
          {language}
        </h1>
      ))}
    </ul>
  );

  return (
    <motion.div
      className="mb-24 p-3 shadow-lg dark:shadow-gray-600 hover:bg-gray-200 text-black dark:text-white dark:hover:text-black rounded-3xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      <Link href={linkPath}>
        <a>
          <div className="flex flex-row">
            <div className="flex-1">
              <Image
                src={imagePath}
                width={400}
                height={260}
                layout="responsive"
                alt={post.title}
                className="rounded-3xl"
                priority={true}
              />
            </div>
            <div className="flex-1 pl-5 pr-3 pt-8 pb-2 ">
              <div className=" text-sm">{formattedDate}</div>
              <div className=" text-base">{languageList}</div>
              <h1 className=" text-2xl font-extrabold pb-2">{post.title}</h1>
              <h1 className="text-lg font-base">{post.summary}</h1>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default PostCard;
