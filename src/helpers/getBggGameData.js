import bggXmlApiClient from "bgg-xml-api-client";

async function getBggGameDataByID(id) {
	const { data } = await bggXmlApiClient.get("thing", {
		id,
		type: "boardgame,boardgameexpansion",
	});
	return data?.item;
}

export default getBggGameDataByID;
