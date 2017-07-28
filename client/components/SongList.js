import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {

	renderSongs() {
		return this.props.data.songs.map(song => {
			return (
				<li>
					{song.title}
				</li>
			)
		})
	}

	render() {

		if(this.props.data.loading) {
			return <div>Loading...</div>
		}

		return (
			<div>
				{this.renderSongs()}
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