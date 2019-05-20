// API Users static class
const api = {
  // get a list of users
  getShow: () => {
    return fetch('http://api.tvmaze.com/shows/6771?embed=episodes')
      .then(data => data.json());
  },

  // add/edit a user
  addEdit: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  },

  // delete a user
  delete: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
};

export default api;
