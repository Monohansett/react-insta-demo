import React, { Component } from 'react';
import Post from '../components/Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg"></Post>
            </div>
        )
    }
}