import React, { Component } from 'react';
import User from './User';
import Posts from '../components/Posts';

export default class Users extends Component {

    render() {

        return (
            <div className="right">
                <User
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Harry_the_prince"
                />
                <div className="users__block">
                    {this.props.users}
                </div>
            </div>
        )
    }
}