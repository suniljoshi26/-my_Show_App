import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { queryAction } from "../Action/ShowAction";
import { fatchShow2 } from "../api";
import LoadingSpinner from "../Components/LoadingSpinner";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../madels/ShowModels";
import { castMapSelector, castsMapSelector } from "../selectors/CastSelector";
import {
  showLoadingSelector,
  showQuerySelector,
  showSelectors,
} from "../selectors/ShowSelector";
import { showQueryChangeAction, showLoadingAction } from "../slices/ShowSlices";
import { State } from "../store";
type showListpageProp = {} & RudexProp;
const ShowListPage: FC<showListpageProp> = ({
  showQueryChange,
  show,
  query,
  loading,
  cast,
}) => {
  console.log("show", show);
  // let shows = show!;
  return (
    <div className="mt-2">
      <div className="flex  justify-center items-center">
        <div className=" w-3/4 mr-5">
          <SearchBar
            value={query}
            onChange={(e) => showQueryChange(e.target.value)}
          />
        </div>
        <div>{loading && <LoadingSpinner className="text-2xl" />}</div>
      </div>
      <div className="flex flex-wrap justify-center">
        {show && show.length === 0 && (
          <div className="mt-40 text-3xl font-bold">
            🍿Search For Your Favorite MOVIE/SERIES🎬
          </div>
        )}
        {show &&
          show.map((s) => (
            <ShowCard
              key={s.id}
              show={s}
              // cast={cast[s.id]}
            />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state: State) => {
  return {
    query: showQuerySelector(state),
    show: showSelectors(state),
    loading: showLoadingSelector(state),
    cast: castsMapSelector(state),
  };
};
const mapDispatchToProps = { showQueryChange: showQueryChangeAction };
const connector = connect(mapStateToProps, mapDispatchToProps);
type RudexProp = ConnectedProps<typeof connector>;
export default connector(ShowListPage);
