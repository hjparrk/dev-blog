import { useEffect, useState } from "react";
import { getAllPosts } from "../../lib/posts-util";
import AllPostsList from "../../components/blog/all-posts-list";
import LanguageForm from "../../components/blog/language-form";

const AllPosts = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const { posts } = props;

  const changeHandler = (e) => {
    e.preventDefault();
    setSelectedLanguage(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className="flex flex-row justify-between items-center">
          <h1 className={styles.title}>
            {selectedLanguage === "all" ? "All Posts" : selectedLanguage}
          </h1>
          <div className="flex flex-row">
            <h1 className="mr-2">filtered by</h1>
            <LanguageForm onChange={changeHandler} />
          </div>
        </div>
        <AllPostsList posts={posts} selectedLanguage={selectedLanguage} />
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
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPosts;
