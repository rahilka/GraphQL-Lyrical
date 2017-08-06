import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';	//the Apollo Client is actually interacting with the graphQL server on the backend 
											// is what is actually making reqests for data, and then storing that data locally when the response comes back
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
	dataIdFromObject: o => o.id //takes every piece of data, and use the result to identify the data in the apollo store
});

const Root = () => {
  return (
  	<ApolloProvider client={client}>
  		<Router history={hashHistory}>
  			<Route path="/" component={App}>
  				<IndexRoute component={SongList} />
  				<Route path="songs/new" component={SongCreate} />
  				<Route path="songs/:id" component={SongDetail} />
  			</Route>
  		</Router>
  	</ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
