import React, { Component } from 'react';

function ListComponent({
	barList,
	isLoading,
	fetchAllBars
  }) {
	if(isLoading) { return <p>Loading...</p> }
  
	return (
	  <ul>
		{barList.map((bar, i) => (
		  <li key={i}>
		  	<Link to={`detail/${bar.id}`} >
				<p>{bar.name}</p>
				<p>{bar.address}</p>
				<p>{bar.hours}</p>
			</Link>
		  </li>
		))}
		<button onClick={() => fetchSubreddits('reactjs')}>Show ReactJS subreddits</button>
	  </ul>
	)
  }
export default ListComponent;