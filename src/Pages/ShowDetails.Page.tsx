import { FC, useEffect } from "react";
import { connect, Connect, ConnectedProps } from "react-redux";
import { showLoadAction } from "../Action/ShowAction";
import { fatchCast } from "../api";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import LoadingSpinner from "../Components/LoadingSpinner";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
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
}) => {
  console.log(params);
  useEffect(() => {
    loadShow(+params.show_id);
    fatchCast(+params.show_id);
  }, [+params.show_id]);

  if (!show) {
    return <LoadingSpinner />;
  }
  return (
    <div className="mt-2">
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
            show.image.medium ||
            "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058422.jpg"
          }
          alt="detail"
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>{show.summary}</p>
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
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (s: State, props: onProps) => {
  return {
    show: showMapSelector(s)[+props.params.show_id],
    loading: showLoadingSelector(s),
  };
};
const mapDispatchToProps = {
  loadShow: showLoadAction,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));
