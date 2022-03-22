import axios from "axios";

const url = "https://swapi.dev/api/";

const httpCommon = axios.create({
	baseURL: `${url}`,
	headers: {
		"Content-type": "application/json",
	},
});

export default httpCommon;