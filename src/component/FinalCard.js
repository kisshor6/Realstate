import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom';

const FinalCard = () => {
    const params = useParams();
    const [data, setData] = useState({ date: "", address: "", ocon: "", oemail: "", oname: "", oadd: "", desc: "", map: "", picture: "", title: "" });

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
            setData({ title: allData.p_title, date: allData.date, address: allData.p_address, oemail: allData.o_email, oname: allData.o_name, ocon: allData.o_contact, desc: allData.p_desc, oadd: allData.o_address, map: allData.p_map, picture: allData.p_picture, });

        }
    }

    return (
        <div>
            <div className='container'>
                <div className='temp_container my-5'>
                    <div className='left'>
                        <p className="fs-1">{data.title} </p>

                        <div className='upper_header'>
                            <div className='d-flex align-item-center fs-5'>
                                <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> <span className='mx-2'>{data.address}</span>
                            </div>

                        </div>
                        <p className='fw-bold fs-5'>Added on {data.date.slice(0, 10)}</p>


                        <div className="rating">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p className='fs-5'>{data.desc}</p>
                        <img src="https://onclickwebdesign.com/wp-content/uploads/property_2.jpg" alt="Property 1" />

                        <div className='owner_details'>
                            <h5 className='owner_details_h text-center fs-3 my-3'>Property owner Details</h5><hr />
                            <div className="d-flex justify-content-between">
                                <p className='fs-5 fw-semibold '>Name of owner :</p>
                                <p className='fs-5 fw-semibold text-muted me-2'>{data.oname}  </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='fs-5 fw-semibold '>Address of Owner :</p>
                                <p className='fs-5 fw-semibold text-muted me-2'> {data.oadd}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='fs-5 fw-semibold '>Email Adress :</p>
                                <p className='fs-5 fw-semibold text-muted me-2'>{data.oemail}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='fs-5 fw-semibold '>Contact number :</p>
                                <p className='fs-5 fw-semibold text-muted me-2'>+977 {data.ocon}</p>
                            </div>
                        </div>

                    </div>
                    <div className='right'>

                        <h3 className="price text-center fw-bold" >Price: $ 5,900</h3>
                        <hr />
                        <button className='talk'>Reply To Listening</button>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45122.34347388688!2d77.50631746612696!3d13.00643435661009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e1!3m2!1sen!2snp!4v1657220176597!5m2!1sen!2snp"
                            width="100%"
                            height="600px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalCard
