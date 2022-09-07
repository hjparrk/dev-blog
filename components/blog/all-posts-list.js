import PostCard from "./post-card";

const AllPostsList = (props) => {
  const { posts, selectedLanguage } = props;

  let filteredPosts;

  if (selectedLanguage !== "all") {
    filteredPosts = posts.filter((post) =>
      post.languages.includes(selectedLanguage)
    );

    if (filteredPosts.length === 0) {
      return (
        <div className="flex max-w-3xl">
          <h1 className="text-5xl font-extrabold">
            No Blog Posts for {selectedLanguage}
          </h1>
        </div>
      );
    }
  } else {
    filteredPosts = posts;
  }

  return (
    <ul className="columns-2xl">
      {filteredPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default AllPostsList;
