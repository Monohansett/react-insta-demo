import React from 'react';
import User from './User';
import Palette from './Palette'

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                alt="man"
                name="some_cool_dude"
            />
            <Palette/>
        </div>
    )
}

export default Profile;