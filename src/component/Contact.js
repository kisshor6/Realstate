import React from 'react'

const Contact = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Contact US</h1>
            <form className='my-4 form-contact'>
                <div className="mb-3">
                    <label className="form-label">  Full name</label>
                    <input type="text" name='image' className="form-control" placeholder='Enter your name' />
                </div>
                <div className="mb-3">
                    <label className="form-label">phone</label>
                    <input type="text" name='title' className="form-control" placeholder='mobile number' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="text" name='title' className="form-control" placeholder='name@example.com' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" placeholder='send message' name='desc' rows="5" ></textarea>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-outline-primary">Submit Form</button>
                </div>

            </form>

        </div>
    )
}

export default Contact
