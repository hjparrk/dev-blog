const axios = require("axios");

export async function getAllAboutItems() {
  const response = await axios.get("http://localhost:3000/api/home/about-item");
  const data = response.data;
  const aboutItems = data.abouts;
  return aboutItems;
}

export async function deleteAboutItemByTitle(title) {
  const response = await axios.delete(
    "http://localhost:3000/api/home/about-item",
    {
      data: {
        title: title,
      },
    }
  );

  return;
}
