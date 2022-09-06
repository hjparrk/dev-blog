import { useRouter } from "next/router";
import AllPostsList from "../../components/blog/all-posts-list";
import { getAllPosts } from "../../lib/posts-util";

const AllPosts = (props) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/blog");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className="flex flex-row justify-between items-center">
          <h1 className={styles.title}>All Posts</h1>
          <button
            className="text-xl p-1 border-2 border-black dark:border-white rounded-2xl"
            type="button"
            onClick={clickHandler}
          >
            Featured Posts
          </button>
        </div>
        <AllPostsList posts={props.posts} />
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
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPosts;
