import React, { Component } from 'react';
import User from './User';
import Instaservice from '../services/instaservice';
import ErrorMessage from '../components/ErrorMessage';
import Users from './Users';
import LoadingSpinner from '../components/LoadingSpinner'


export default class Posts extends Component {

    Instaservice = new Instaservice();

    state = {
        posts: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updatePosts()
    }

    updatePosts() {
        this.Instaservice.getAllPosts()
            .then(this.onPostsLoaded)
            .catch()
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: true,
        })
    }

    renderPosts(arr) {
        return arr.map(item => {
            const { name, altname, photo, src, alt, descr, id } = item;

            return (
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}

                        min
                    />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }

    renderUsers(arr) {
        return arr.map(user => {
            const { name, photo, altname, id } = user;

            return (
                <User
                    src={photo}
                    alt={altname}
                    name={name}
                    key={id}
                    min
                />
            )
        })
    }

    render() {

        const { error, posts, loading } = this.state;
        if (error) {
            return <ErrorMessage />
        }

        if (loading) {
            return <LoadingSpinner/>
        }


        const items = this.renderPosts(posts);
        const users = this.renderUsers(posts);

        return (
            <>
                <div className="left">
                    {items}
                </div>
                <Users users={users}>

                </Users>
            </>
        )
    }
}