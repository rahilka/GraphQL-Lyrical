import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {

	onSongDelete(id) {
		// call the muation to delete the song
		this.props.mutate({
			variables: { id }
		});

	}

	renderSongs() {
		return this.props.data.songs.map(({ id, title }) => {
			return (
				<li key={id} className="collection-item">
					{title}
					<i className="material-icons" onClick={() => this.onSongDelete(id)} >delete</i>
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
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link to="/songs/new" className="btn-floating btn-large red right">
					<i className="material-icons">add</i>
				</Link>
			</div>	
		);
	}
}

const mutation = gql`
	mutation DeleteSong($id: ID) {
	  deleteSong(id: $id) {
	    id
	  }
	}
`;

export default graphql(mutation)(
	graphql(query)(SongList)
); //MEANING:make a helper using the 'geaphql' and the mutation,
// and then immediately invoke it with the result of the other helper, 'graphql(query)', and the SongList
// The data returned from our gql query is placed into our component's PROPS object