import { getPostData, getPostsFiles } from "../../lib/posts-util";
import BlogPost from "../../components/blog/blog-post";

const Post = (props) => {
  const { post } = props;
  return <BlogPost post={post} />;
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
