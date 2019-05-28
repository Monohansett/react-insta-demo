import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Instaservice from '../services/instaservice';
import LoadingSpinner from '../components/LoadingSpinner';

export default class Palette extends Component {
    Instaservice = new Instaservice();

    state = {
        photos: [],
        error: false,
        loading: true,
    }

    componentDidMount() {
        this.updatePhotos()
    }

    updatePhotos() {
        this.Instaservice.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: true
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
        const { error, photos, loading } = this.state;
        if (error) {
            return <ErrorMessage />
        }
        
        if (loading) {
            return <LoadingSpinner/>
        }

        const items = this.renderPhotos(photos);
        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}