import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
	render() {

		console.log(this.props);

		return (
			<div>
				SongList
			</div>
		);
	}
}

// define the query:
const query = gql`
	{
		songs {
			title
		}
	}
`;

export default graphql(query)(SongList);
// The data returned from our gql query is placed into our component's PROPS object