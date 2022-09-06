import Image from "next/image";
import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const Post = (props) => {
  const { post } = props;

  const customComponents = {
    // img(image) {
    //   console.log("image", image.src);
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
              priority="true"
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    // code(code) {
    //   const { className, children } = code;
    //   const language = className.split("-")[1];

    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={children}
    //     />
    //   );
    // },
  };

  return (
    <div className="flex flex-col h-5/6 justify-center items-center">
      <article className="prose prose-lg dark:prose-invert text-black dark:text-white">
        <ReactMarkdown components={customComponents}>
          {post.content}
        </ReactMarkdown>
        ;
      </article>
    </div>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  console.log(postData);

  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default Post;
