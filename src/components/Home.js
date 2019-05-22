import React from "react";
import { connect } from 'react-redux';
import { fetchShow } from '../actions/shows';
import EpisodesList from './common/EpisodesList';

// Home page component
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(fetchShow());
  }
  
  // render
  render() {
    const { show } = this.props;
    return (
      <div className="page-home">
        {
          show ?
          <div>
            <h1 className="content-header">{show.name}</h1>
            <div className="flex flex-column">
              <div className="container flex">
                <img src={show.image.medium}/>
                <div className="block" dangerouslySetInnerHTML={{
                  __html: show.summary,
                }}/>
              </div>
              
              <div className="episodes">
                <EpisodesList episodes={show._embedded.episodes}/>
              </div>
            </div>
          </div> :
          'Loading...'
        }
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    show: state.show,
  };
}
export default connect(mapStateToProps)(Home);
