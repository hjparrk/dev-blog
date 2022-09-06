import { useRouter } from "next/router";
import FeaturedPosts from "../../components/blog/featured-posts";
import { getFeaturedPosts } from "../../lib/posts-util";

const Blog = (props) => {
  const router = useRouter();
  const { featuredPosts } = props;

  const clickHandler = () => {
    router.push("/blog/all-posts");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className="flex flex-row justify-between items-center">
          <h1 className={styles.title}>Featured Posts</h1>
          <button
            className="text-xl p-1 border-2 border-black dark:border-white rounded-2xl"
            type="button"
            onClick={clickHandler}
          >
            All Posts
          </button>
        </div>
        <FeaturedPosts featuredPosts={featuredPosts} />
      </div>
    </div>
  );
};

const styles = {
  container: "flex flex-col h-5/6 justify-center items-center mt-28",
  innerContainer: "m-auto text-left max-w-2xl",
  title: "text-4xl font-extrabold my-14 px-6",
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
