import { deleteAboutItemByTitle, getAllAboutItems } from "../helpers/api-util";

const Home = (props) => {
  const aboutItems = props.aboutItems;

  console.log(aboutItems);

  const content = (
    <>
      {aboutItems.map((item) => (
        <div key={item.title} className="m-5 p-5">
          <h1>{item.title}</h1>
          <h1>{item.subtitle}</h1>
          <h1>{item.description}</h1>
        </div>
      ))}
    </>
  );

  async function clickHandler() {
    const title = "Interests";
    const response = await deleteAboutItemByTitle(title);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-5xl">Home</h1>
      <div className="flex flex-col justify-center items-center">{content}</div>
      {/* <button onClick={clickHandler} type="button">
        DELETE
      </button> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const aboutItems = await getAllAboutItems();

  return {
    props: {
      aboutItems: aboutItems,
    },
  };
}

export default Home;
