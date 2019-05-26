import React from 'react';
import Posts from '../components/Posts';
import Users from './Users';	
import User from './User';

export default function Feed() {
	return (
		<div className="container feed">
			<Posts></Posts>
			<Users/>
		</div>
	)
}