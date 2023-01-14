import axios from "axios";
import { Show } from "./madels/ShowModels";

export const fatchShow = async (query: string) => {
  console.log(query, "query");
  const res = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return res.data.map((show) => show.show) || {};
};
