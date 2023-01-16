import { memo, FC } from "react";
import { Cast } from "../madels/ShowModels";
type props = {
  cast: Cast;
};
const CastCard: FC<props> = ({ cast }) => {
  return (
    <div className="p-1 m-1">
      <img
        className="w-28 rounded-sm"
        src={
          cast.image?.medium ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
        }
        alt=""
      />
      <p className="text-gray-500 font-semibold">{cast.name}</p>
    </div>
  );
};

export default memo(CastCard);
