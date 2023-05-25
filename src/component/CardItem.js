import React from 'react'
import { Link } from 'react-router-dom';


const CardItem = (props) => {
    // const images_url = `../../backend/uploads/${props.picture}`;
    const images_url = `https://source.unsplash.com/180x180/?nature,mountains`;
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card" >
                <img src={images_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='upper_header'>
                        <div className='location'>
                            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> <span>{props.location}</span>
                        </div>
                    </div>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc.slice(0, 190)}</p>

                    <div className="d-grid gap-2">
                        <Link to={"/finalcard/" + props.propertyId} className="btn btn-primary " >Learn More </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem