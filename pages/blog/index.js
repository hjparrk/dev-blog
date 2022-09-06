import FeaturedPosts from "../../components/blog/featured-posts";
import { getFeaturedPosts } from "../../lib/posts-util";

const Blog = (props) => {
  const { featuredPosts } = props;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Featured Posts</h1>
        <FeaturedPosts featuredPosts={featuredPosts} />
      </div>
    </div>
  );
};

const styles = {
  container: "flex flex-col h-5/6 justify-center items-center mt-28",
  innerContainer: "m-auto text-left max-w-2xl",
  title: "text-4xl font-extrabold my-14",
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts: featuredPosts,
    },
  };
}

export default Blog;
