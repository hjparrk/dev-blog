import PostCard from "./post-card";

const FeaturedPosts = (props) => {
  const { featuredPosts } = props;

  return (
    <ul>
      {featuredPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default FeaturedPosts;
