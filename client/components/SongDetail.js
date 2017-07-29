import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
	render() {
		console.log(this.props);
		return(
			<div>
				<h3>Song Detail</h3>
			</div>
		);
	}
}

// Something to use when you need to make a query that uses some data from the url:
export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);