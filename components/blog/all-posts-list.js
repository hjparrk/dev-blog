import PostCard from "./post-card";

const AllPostsList = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default AllPostsList;
