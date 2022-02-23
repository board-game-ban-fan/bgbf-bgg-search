const { bggXmlApiClient } = require("bgg-xml-api-client");

const a = async (id = "26921") => {
  const { data } = await bggXmlApiClient.get("thing", {
    id,
    type: "boardgame",
  });
  console.log(data);
};

a();
