import { Avatar, AvatarGroup } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Cast, Cast1, Person, Show } from "../madels/ShowModels";
import CastAvtar from "./CastAvtar";
type showProps = {
  show: Show;
  cast: Cast1;
};
const ShowCard: FC<showProps> = ({ show, cast }) => {
  console.log("cast", cast);
  const [avtarShow, setAvtarShow] = useState(false);

  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={
          show.image?.medium ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
        }
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>{show.summary}</p>
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
        <div className="flex flex-col items-center gap-4 ">
          <h3 className="text-2xl font-semibold">Cast</h3>
          <div className="cursor-pointer">
            <AvatarGroup
              max={4}
              total={cast.person?.length}
              onClick={() => setAvtarShow(!avtarShow)}
            >
              {cast.person?.map((p: Person) => {
                return <Avatar key={p.id} alt="" src={p.image?.medium} />;
              })}
            </AvatarGroup>
          </div>
          {avtarShow && (
            <CastAvtar
              cast={cast?.person}
              //   className={` ${
              //     avtarShow ? "bottom-20" : "bottom-[-100%]"
              //   } + " absolute md:left-52 left-44 bottom-20 duration-300 "`}
            />
          )}
        </div>
        <>{/* <CastAvtar cast={cast} /> */}</>
      </div>
    </div>
  );
};

export default ShowCard;
