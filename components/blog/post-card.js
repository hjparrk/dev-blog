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
    <motion.li
      whileHover={{ scale: 1.1 }}
      className="mb-28 p-6 hover:bg-gray-200 text-black dark:text-white dark:hover:text-black rounded-3xl"
    >
      <Link href={linkPath}>
        <a>
          <div className="flex flex-row">
            <div className="flex-1 mr-5">
              <Image
                src={imagePath}
                width={360}
                height={250}
                layout="responsive"
                alt={post.title}
                className="rounded-xl"
                priority={true}
              />
            </div>
            <div className="flex-1">
              {formattedDate}
              {languageList}
              <h1 className="text-3xl font-extrabold mb-3">{post.title}</h1>
              <h1 className="text-xl font-light">{post.summary}</h1>
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default PostCard;
