import React from 'react'

const Agent = () => {
    return (
        <div className='container'>
            <h3 className='text-center my-5'>Become a agent you have to send request to us</h3>
            <form className='my-4 form-contact'>
                <div className="mb-3">
                    <label className="form-label"> Username</label>
                    <input type="text" name='image' className="form-control" placeholder='Enter your name' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact number</label>
                    <input type="number" name='title' className="form-control" placeholder='Enter your phone number' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="text" name='title' className="form-control" placeholder='name@example.com' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Local Address</label>
                    <input type="text" name='address' className="form-control" placeholder='Enter your local address' />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-outline-primary">Send Request</button>
                </div>

            </form>
            <h2 className='mt-5 text-info'>Important note !</h2>
            <p >we will send the message on your email then you can proceed your other details check your email and verify your details, Thank you !!</p>

        </div>
    )
}

export default Agent
