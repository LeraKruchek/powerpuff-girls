import React, { Fragment } from 'react';
import "../stylesheets/main.scss";
// App component
export class App extends React.Component {

  // render
  render() {
    const {children} = this.props;

    // render
    return (
      <Fragment>
        <div className="content">
          {children}
        </div>
        <div className="footer">
          <img src="//static.tvmaze.com/images/tvm-header-logo.png" />
          <span>
            The Powerpuff Girls website
          </span>
        </div>
      </Fragment>
    );
  }
}

export default App;
