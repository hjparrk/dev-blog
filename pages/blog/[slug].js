import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const Post = (props) => {
  const { post } = props;

  const customComponents = {
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
    code(code) {
      const { className, children } = code;

      const match = /language-(\w+)/.exec(className || "");

      return (
        <SyntaxHighlighter style={atomDark} language={match[1]}>
          {children}
        </SyntaxHighlighter>
      );
    },
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
