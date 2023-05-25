import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import cardContext from '../context/CardContext';

const EditSellProperty = () => {

    const context = useContext(cardContext);
    const { propertyDetail } = context;

    const navigate = useNavigate();
    const params = useParams();


    const [sell, setSell] = useState({ title: "", desc: "", address: "", map: "", picture: "", oname: "", oadd: "", oemail: "", ocon: "" });

    const handleChange = (e) => {
        setSell({ ...sell, [e.target.name]: e.target.value });
    }
    const ImageChange = (e) => {
        setSell({ ...sell, picture: e.target.files[0] });
    }
    const updateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', sell.title);
        formData.append('desc', sell.desc);
        formData.append('address', sell.address);
        formData.append('map', sell.map);
        formData.append('upicture', sell.picture);
        formData.append('oname', sell.oname);
        formData.append('oadd', sell.oadd);
        formData.append('oemail', sell.oemail);
        formData.append('ocon', sell.ocon);

        let result = await fetch(`http://localhost:5000/api/sell/update/${params.id}`, {
            method: 'PUT',
            headers: {
                token: JSON.parse(localStorage.getItem('authentication'))
            },
            body: formData
        });
        if (result) {
            console.log("You Have Updated Successfully");
            navigate("/");
        }
    }

    useEffect(() => {
        PropertyDetail()
    }, []);

    const PropertyDetail = async () => {
        let result = await fetch(`http://localhost:5000/api/sell/propertydetails/${params.id}`, {
            method: "GET",
            headers: {
                token: JSON.parse(localStorage.getItem('authentication'))
            },
        });
        result = await result.json();
        if (result.success) {
            const allData = result.results[0];
            setSell({ title: allData.p_title, desc: allData.p_desc, address: allData.p_address, map: allData.p_map, picture: allData.p_picture, oname: allData.o_name, oadd: allData.o_address, oemail: allData.o_email, ocon: allData.o_contact })
        }
    }

    return (
        <div>
            <div className='container my-5'>
                <h2 className='text-center mb-4'>Update Your Property Details</h2>
                <form onSubmit={updateProduct}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Basic Details
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">

                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input type="text" value={sell.title} onChange={handleChange} name="title" className="form-control" placeholder='give a title for a property' required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control" placeholder='Write about property' value={sell.desc} onChange={handleChange} name="desc" rows="5" required></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Address
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3">
                                        <label className="form-label">Address of property</label>
                                        <input type="text" value={sell.address} onChange={handleChange} name="address" className="form-control" placeholder='give a Address of a property' required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Google Map
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3">
                                        <label className="form-label">Google Iframe map</label>
                                        <textarea type="text" value={sell.map} onChange={handleChange} name="map" className="form-control" rows='5' placeholder='iFrame embed map' required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Property Picture
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3" >
                                        <label className="form-label">Upload Image</label>

                                        <input type="file" onChange={ImageChange} name="picture" className='form-control' required />

                                        {/* <i className="fa fa-cloud-upload fa-2x" aria-hidden="true" /> */}

                                        {/* <label className="fw-semibold" id='file-name'></label>
                                    <label className="form-label fw-semibold">Browse File to upload</label> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Details Of a property owner
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3">
                                        <label className="form-label">Owner Full Name</label>
                                        <input type="text" className="form-control" value={sell.oname} onChange={handleChange} name="oname" placeholder='input the property owner name' required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Address of owner</label>
                                        <input type='text' value={sell.oadd} onChange={handleChange} name="oadd" className="form-control" placeholder='Give the address of owner' required></input>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address of owner</label>
                                        <input type='email' value={sell.oemail} onChange={handleChange} name="oemail" className="form-control" placeholder='Give the Email address of owner' required></input>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Contact of owner</label>
                                        <input type='number' value={sell.ocon} onChange={handleChange} name="ocon" className="form-control" placeholder='Give the contact no of owner' required></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-3">
                        <Link to='/' className="btn btn-outline-primary">Cancel Posting</Link>
                        <button type="submit" className="btn btn-outline-primary">Post Property</button>
                    </div>

                </form>
                <h2 className='mt-5 text-info'>Area Trending</h2>
                <p>Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. We specify the midpoint value (e.g., $blue-500) and use custom color functions to tint (lighten) or shade (darken) our colors via Sass’s mix() color function.</p>
            </div>
        </div>
    )
}

export default EditSellProperty
