import React from 'react';
const Dashboard = () => {
  return <div>Dashboard Page</div>;
};
export default Dashboard;
const loadMore = async (type) => {
  const { dispatch, albums, artists, playlist } = props;
  setIsLoading(true);
  switch (type) {
    case 'albums':
      await dispatch(initiateLoadMoreAlbums(albums.next));
      break;
    case 'artists':
      await dispatch(initiateLoadMoreArtists(artists.next));
      break;
    case 'playlist':
      await dispatch(initiateLoadMorePlaylist(playlist.next));
      break;
    default:
  }
  setIsLoading(false);
};
