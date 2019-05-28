import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Instaservice from '../services/instaservice';

export default class Palette extends Component {
    Instaservice = new Instaservice();

    state = {
        photos: [],
        error: false,
    }

    componentDidMount() {
        this.updatePhotos()
    }

    updatePhotos() {
        this.Instaservice.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch()
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderPhotos(arr) {
        return arr.map(item => {

            const { src, alt, id } = item;
            return (
                <img src={src} alt={alt} key={id}></img>
            )
        })
    }

    render() {
        const { error, photos } = this.state;
        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderPhotos(photos);
        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}