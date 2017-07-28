import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';	//the Apollo Client is actually interacting with the graphQL server on the backend 
											// is what is actually making reqests for data, and then storing that data locally when the response comes back
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
  	<ApolloProvider client={client}>
  		<Router history={hashHistory}>
  			<Route path="/" component={App}>
  				<IndexRoute component={SongList} />
  				<Route path="song/new" component={SongCreate} />
  			</Route>
  		</Router>
  	</ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
