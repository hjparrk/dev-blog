import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const Post = (props) => {
  const { post } = props;

  console.log(post);

  const markdown = `
  ## hellow
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `;
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
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
