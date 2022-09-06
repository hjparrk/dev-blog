const DUMMY_POSTS = [
  {
    title: "BLOG",
    subtitle: "THIS IS MY BLOG POST",
    description: "BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ",
  },
  {
    title: "BLOG",
    subtitle: "THIS IS MY BLOG POST",
    description: "BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ",
  },
  {
    title: "BLOG",
    subtitle: "THIS IS MY BLOG POST",
    description: "BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-10">Blog Pages</h1>
      <ul className="flex flex-col justify-center items-center">
        {DUMMY_POSTS.map((post) => (
          <li key={post.title} className="mb-20 p-10">
            <h1 className="text-5xl font-extrabold m-5">{post.title}</h1>
            <h1 className="text-3xl font-medium m-5">{post.subtitle}</h1>
            <h1 className="text-xl font-light m-5">{post.description}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
