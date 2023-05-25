import React from 'react'
import { Link } from 'react-router-dom'


const UserPropertyCard = (props) => {


    const DeleteCard = async (id) => {
        let result = await fetch(`http://localhost:5000/api/sell/propertyofUser/${id}`, {
            method: 'DELETE',
            headers: {
                token: JSON.parse(localStorage.getItem('authentication'))
            },
        });
        result = await result.json();
        if (result.success) {
            props.allproperty();
        }
    }

    return (

        <div className="card" >
            <img src="https://source.unsplash.com/400x400/?instruments,guitar" className="card-img-top" alt="posted.img" />
            <div className="card-body">

                <p className="fw-semibold card-text">{props.desc.slice(0, 70)}...</p>
                <div className='d-flex justify-content-between'>
                    <>
                        <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true" />
                        </Link>
                        <ul className="dropdown-menu">
                            <li className='d-flex mx-2'>
                                <i className="fa fa-pencil-square-o my-auto" aria-hidden="true" />
                                <Link className="dropdown-item" to={`/editsell/${props.propertyId}`}>Edit Property</Link>
                            </li>
                            <li className='d-flex mx-2'>
                                <i className="warning fa fa-trash my-auto warning" aria-hidden="true" />
                                <button className="dropdown-item" onClick={() => DeleteCard(props.propertyId)}>Delete</button>
                            </li>
                        </ul>
                    </>
                    <p className='fw-bold text-warning m-0'>{props.location.slice(0, 15)}</p>
                </div>
            </div>
        </div>
    )
}
export default UserPropertyCard
