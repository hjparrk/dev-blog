import { useState } from "react";
import AboutItemsList from "../components/home/about-items-list";
import Welcoming from "../components/home/welcoming";
import { deleteAboutItemByTitle, getAllAboutItems } from "../helpers/api-util";

const Home = (props) => {
  const [showWelcoming, setShowWelcoming] = useState(false);

  function showWelcomingHandler() {
    setShowWelcoming(true);
  }

  const aboutItems = props.aboutItems;

  const content = showWelcoming ? (
    <div className="flex flex-col justify-center items-center">
      <AboutItemsList aboutItems={aboutItems} />
    </div>
  ) : (
    <Welcoming onShowWelcoming={showWelcomingHandler} />
  );

  async function clickHandler() {
    const title = "Interests";
    const response = await deleteAboutItemByTitle(title);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-center">{content}</div>
      {/* <button onClick={clickHandler} type="button">
        DELETE
      </button> */}
    </div>
  );
};

export async function getStaticProps() {
  const aboutItems = await getAllAboutItems();

  return {
    props: {
      aboutItems: aboutItems,
    },
  };
}

export default Home;
