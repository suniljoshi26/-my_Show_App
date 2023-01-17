import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import { FC, memo } from "react";
import { Cast, Person } from "../madels/ShowModels";

type CastAvtarProps = {
  cast: Person[];
  className?: string;
};

const CastAvtar: FC<CastAvtarProps> = ({ cast, className }) => {
  console.log("cast", cast);

  return (
    <div
      className={
        "md:w-52 w-32 bg-white border border-gray-500 rounded-md space-x-1 z-50  p-1" +
        className
      }
    >
      {cast?.map((p) => {
        return (
          <div
            key={p.id}
            className="flex items-center justify-between md:px-4 md:py-1 border-b-2 border-gray-500 "
          >
            <Avatar
              alt="Remy Sharp"
              src={p.image?.medium}
              sx={{ width: 24, height: 24 }}
            />
            <p className="text-base font-semibold"> {p.name} </p>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

CastAvtar.defaultProps = {};

export default memo(CastAvtar);
