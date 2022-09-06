import Image from "next/image";
import Link from "next/link";

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
    <li className="mb-32">
      <Link href={linkPath}>
        <a>
          <div className="flex flex-row">
            <div className="flex-1 mr-5">
              <Image
                src={imagePath}
                width={360}
                height={250}
                layout="fixed"
                alt={post.title}
                className="rounded-xl"
                priority={true}
              />
            </div>
            <div className="flex-1">
              {formattedDate}
              {languageList}
              <h1 className="text-3xl font-semibold mb-3">{post.title}</h1>
              <h1 className="text-xl font-light mb-3">{post.summary}</h1>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostCard;
