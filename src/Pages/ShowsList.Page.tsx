import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { queryAction } from "../Action/ShowAction";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../madels/ShowModels";
import { showQuerySelector, showSelectors } from "../selectors/ShowSelector";
import { State } from "../store";
type showListpageProp = {
  show: Show[];
  query: string;
  // showLoaded: (shows: Show[]) => void;
  showQueryChange: (query: string) => void;
};
const ShowListPage: FC<showListpageProp> = ({
  showQueryChange,
  show,
  query,
}) => {
  console.log("show", show);
  console.log("query", query);
  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(e) => showQueryChange(e.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {show.map((s) => (
          <ShowCard show={s} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state: State) => {
  return {
    query: showQuerySelector(state),
    show: showSelectors(state),
  };
};
const mapDispatchToProps = { showQueryChange: queryAction };
// const connector = ;
// type RudexProp = ConnectedProps<typeof connector>;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowListPage as any);
