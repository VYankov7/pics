import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID CMmyGadDXaPUqk3u28O9GEFNNzhQ4Kcj5G9IU4inPMY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;