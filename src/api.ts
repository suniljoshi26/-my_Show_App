import axios from "axios";
import { Cast, Show } from "./madels/ShowModels";

export const fatchShow = async (query: string) => {
  console.log(query, "query");
  const res = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return res.data.map((show) => show.show) || {};
};
export const fatchShow2 = (query: string) => {
  console.log(query, "query");
  return axios
    .get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + query)
    .then((response) => {
      const shows = response.data.map((item) => item.show);
      const castPromise = [];
      for (let i = 0; i < shows.length; i++) {
        const castAddShowPromise = axios
          .get("https://api.tvmaze.com/shows/" + shows[i].id + "/cast")
          .then((response) => {
            const cast = response.data.map((item: any) => item.person);
            return { show: shows[i], cast };
          });
        castPromise.push(castAddShowPromise);
      }
      return Promise.all(castPromise);
    });
};
export const fatchDetail = async (showId: number) => {
  const res = await axios.get("https://api.tvmaze.com/shows/" + showId);
  return res.data;
};
export const fatchCast = async (showId: number) => {
  const res = await axios.get<{ person: Cast }[]>(
    "https://api.tvmaze.com/shows/" + showId + "/cast"
  );
  return res.data.map((i) => i.person);
};
