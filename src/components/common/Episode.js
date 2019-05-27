import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeComponent = props => {
  const { episode } = props;

  return (
    <tr className="episode">
      <td>{episode.season}</td>
      <td>{episode.number}</td>
      <td>
        <Link
          to={{
            pathname: '/episode-details',
            search: `?season=${episode.season}&number=${episode.number}`,
          }}
        >
          {episode.name}
        </Link>
      </td>
    </tr>
  );
};

export default EpisodeComponent;
