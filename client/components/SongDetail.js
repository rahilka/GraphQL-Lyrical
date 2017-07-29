import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
	render() {

		// ALWAYS remember to show something loading on the screen before fetching the data
		const { song } = this.props.data;

		if(!song) { return <div>Loading...</div> }

		return(
			<div>
				<h3>{song.title}</h3>
			</div>
		);
	}
}

// Something to use when you need to make a query that uses some data from the url:
export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);