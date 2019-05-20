import React from 'react';
import Episode from './common/Episode';

const LOAD_MORE = 10;

export default class EpisodeDetails extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      renderedEpisodes: props.episodes.slice(0, LOAD_MORE)
    }
  }
  
  loadMore = () => {
    const currentLength = this.state.renderedEpisodes.length;
    
    this.setState({
      renderedEpisodes: this.state.renderedEpisodes.concat(this.props.episodes.slice(currentLength, LOAD_MORE))
    })
  };
  
  render() {
    return (
      <div>
        {
          this.state.renderedEpisodes.map(episode => {
            
            return <Episode key={episode.id} episode={episode}/>;
          })
        }
        <button onClick={this.loadMore}>Load more</button>
      </div>
    );
  }

}
