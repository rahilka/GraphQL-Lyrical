import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';	//the Apollo Client is actually interacting with the graphQL server on the backend 
											// is what is actually making reqests for data, and then storing that data locally when the response comes back
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});

const Root = () => {
  return (
  	<ApolloProvider client={client}>
  		<div>Lyrical</div>
  	</ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
