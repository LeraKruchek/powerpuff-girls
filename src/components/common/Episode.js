import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeComponent = (props) => {
  const { episode } = props;

  return (
    <div className="episode">
      <p>{episode.season}</p>
      <p>{episode.number}</p>
      <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
    </div>
  )
};

export default EpisodeComponent;
