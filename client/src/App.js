import React, {Component} from 'react';
import './App.scss';

import TopNav from './components/topnav';

class App extends Component {
  render () {
    return (
      <div className="App">
        <TopNav/>
        // TODO header
        // TODO placeholder controls
        // TODO results component
      </div>
    );
  }
}


function startQuery (params) {
  console.log('fetching results from server...');
  let url = new URL('http://localhost:4000/api/search');
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.log('TODO: something with these results:');
      console.log(results);
    })
    .catch(console.error);
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`
startQuery({
  originplace: 'EDI',
  destinationplace: 'LHR',
  outbounddate: '2017-08-30',
  inbounddate: '2017-09-06',
  cabinclass: 'Economy',
  adults: 2
});

export default App;
