import { FC, useEffect } from "react";
import { connect, Connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { castloadAction } from "../Action/CastAction";
import { showLoadAction } from "../Action/ShowAction";
import { fatchCast } from "../api";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import LoadingSpinner from "../Components/LoadingSpinner";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { Cast } from "../madels/ShowModels";
import { castSelector } from "../selectors/CastSelector";
import {
  showLoadingSelector,
  showMapSelector,
} from "../selectors/ShowSelector";
import { State } from "../store";
type onProps = WithRouterProps;
type ShowDetailPageProps = ReduxProps & onProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  params,
  loadShow,
  show,
  loading,
  castLoad,
  cast,
}) => {
  console.log(params);
  useEffect(() => {
    loadShow(+params.show_id);
    castLoad(+params.show_id);
  }, [+params.show_id]);
  console.log("cast", cast);
  if (!show) {
    return <LoadingSpinner />;
  }
  return (
    <div className="mt-2">
      <Link to="/" className="px-3 text-white py-2 bg-gray-500">
        Back
      </Link>
      {loading && <LoadingSpinner />}
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genres) => (
          <GenrePill name={genres} key={genres} />
        ))}

        {/* <GenrePill name="Fiction" />
        <GenrePill name="Thriller" />
        <GenrePill name="Violence" /> */}
      </div>
      <div className="mt-2 flex">
        <img
          src={
            show.image?.medium ||
            "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058422.jpg"
          }
          alt="detail"
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{ __html: show?.summary || "" }}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating:
            <span className="text-gray-700">
              {show.rating?.average || 7}/10
            </span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {cast.map((c) => (
            <CastCard key={c.id} cast={c} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (s: State, props: onProps) => {
  return {
    show: showMapSelector(s)[+props.params.show_id],
    loading: showLoadingSelector(s),
    cast: castSelector(s),
  };
};
const mapDispatchToProps = {
  loadShow: showLoadAction,
  castLoad: castloadAction,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));
