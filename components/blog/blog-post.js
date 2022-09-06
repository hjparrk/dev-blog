import Image from "next/image";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const BlogPost = (props) => {
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
              layout="responsive"
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
        <SyntaxHighlighter
          showLineNumbers
          wrapLines={true}
          style={oneLight}
          language={match[1]}
          customStyle={{ fontSize: "1rem" }}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <div className="flex flex-col h-5/6 justify-center items-center">
      <article className="prose prose-lg dark:prose-invert text-black dark:text-white">
        <ReactMarkdown
          components={customComponents}
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
