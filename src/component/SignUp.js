import React, { useContext, useState } from 'react'
import cardContext from '../context/CardContext';

const SignUp = () => {
    const context = useContext(cardContext);
    const { GetUserData } = context;


    const [content, setContent] = useState({ fname: "", lname: "", email: "", address: "", password: "", cpassword: "" });
    const change = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    }
    const collectdata = (e) => {
        e.preventDefault();
        const allData = {
            fname: content.fname,
            lname: content.lname,
            email: content.email,
            address: content.address,
            password: content.password,
            cpassword: content.cpassword,
        }
        GetUserData(allData);
        setContent({ fname: "", lname: "", email: "", address: "", password: "", cpassword: "" })
    }
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Please input all the fields to register</h2>
            <form className='my-4 form-contact' onSubmit={collectdata}>
                <div className="mb-3">
                    <label className="form-label"> fname</label>
                    <input type="text" name='fname' value={content.fname} onChange={change} className="form-control" placeholder='Enter your First name' />
                </div>
                <div className="mb-3">
                    <label className="form-label"> lname</label>
                    <input type="text" name='lname' value={content.lname} onChange={change} className="form-control" placeholder='Enter your Last name' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="text" name='email' value={content.email} onChange={change} className="form-control" placeholder='name@example.com' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Local Address</label>
                    <input type="text" name='address' value={content.address} onChange={change} className="form-control" placeholder='Enter your local address' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' value={content.password} onChange={change} className="form-control" placeholder='Enter your password' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Conform Password</label>
                    <input type="password" name='cpassword' value={content.cpassword} onChange={change} className="form-control" placeholder='conform password' />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-outline-primary">Submit Form</button>
                </div>

            </form>

        </div>
    )
}

export default SignUp
