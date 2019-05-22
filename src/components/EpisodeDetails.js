import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { fetchEpisode } from '../actions/episodes';

class EpisodeDetails extends React.Component {
  
  constructor(props) {
    super(props);

    const query = qs.parse(this.props.location.search);

    this.state = {
      season: query.season,
      number: query.number
    }
  }
  
  componentDidMount() {
    const { episode } = this.props;
    
    if (!episode) {
      this.props.dispatch(fetchEpisode({season: this.state.season, number: this.state.number}));
    }
  }
  
  render() {
    const { episode } = this.props;
    
    if (episode) {
      episode.formattedDate =
        new Date(episode.airdate).toLocaleDateString('en-US',
          { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    
    return (
      <Fragment>
        {
          episode ?
          <Fragment>
            <h1 className="content-header">{episode.name}</h1>
            <div className="container flex flex-column">
              <div className="container flex">
                <img src={episode.image.medium}/>
                <div className="block" dangerouslySetInnerHTML={{
                  __html: episode.summary,
                }}/>
              </div>
              <div className="episode-info">
                <h2>Episode info</h2>
                <p><span className="heading">Number: </span><span>Season {episode.season}, </span><span>Episode {episode.number}</span></p>
                <p><span className="heading">Airdate: </span>{episode.formattedDate} at {episode.airtime}</p>
              <p><span className="heading">Runtime: </span>{episode.runtime} minutes</p>
              </div>
              <Link to="/">Back</Link>
            </div>
          </Fragment> :
          'Loading...'
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const query = qs.parse(ownProps.location.search);
  const id = String(query.season) + String(query.number);

  return {
    episode: state.episodes ? state.episodes[id] : null
  }
};

export default connect(mapStateToProps)(EpisodeDetails);
