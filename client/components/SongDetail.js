import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
	render() {

		// ALWAYS remember to show something loading on the screen before fetching the data
		const { song } = this.props.data;

		if(!song) { return <div>Loading...</div> }

		return(
			<div>
				<Link to="/">Back</Link>
				<h3>{song.title}</h3>
				<LyricList lyrics={song.lyrics} />
				<LyricCreate songId={this.props.params.id} />
			</div>
		);
	}
}

// Something to use when you need to make a query that uses some data from the url:
export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);