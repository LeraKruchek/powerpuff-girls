import React from 'react';
import Episode from './Episode';

const LOAD_MORE = 10;

export default class EpisodesList extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      renderedEpisodes: props.episodes.slice(0, LOAD_MORE)
    }
  }
  
  loadMore = () => {
    const currentLength = this.state.renderedEpisodes.length;
    const newItems = this.props.episodes.slice(0, currentLength + LOAD_MORE);

    this.setState({
      renderedEpisodes: newItems
    })
  };
  
  render() {
    return (
      <div className="episodes-container">
        <table className="table table-sm">
          <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Episode №</th>
            <th scope="col">Episode name</th>
          </tr>
          </thead>
          <tbody>
        {
          this.state.renderedEpisodes.map(episode => (
              <Episode key={episode.id} episode={episode}/>
          ))
        }
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={this.loadMore}>Load more</button>
      </div>
    );
  }

}
