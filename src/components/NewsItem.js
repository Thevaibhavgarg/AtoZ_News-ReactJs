import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, publish, source } = this.props;
        const defaultImage = 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl ? imageUrl : defaultImage} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = defaultImage;
                    }} className="card-img-top" alt="Coming Soon..." />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1' }}>{source}</span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(publish).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem