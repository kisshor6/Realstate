import React from 'react'

const Home = () => {
    return (
        <>
            <div className='background_container'>
                {/* <h1 className='text-center'>Find your Best Home From Here</h1> */}
                <div className="search-part">
                    <div className='search_container'>
                        <div className='first-search'>
                            <select className='form_field '>
                                <option className='d-none' value=''>Please Select the area </option>
                                <option value='1200 X 400 bhk'>1200 X 400 bhk</option>
                                <option value='1500 X 600 bhk'>1500 X 600 bhk</option>
                                <option value='3500 X 800 bhk'>3500 X 800 bhk</option>
                                <option value='2800 X 300 bhk'>2800 X 300 bhk</option>
                            </select>
                        </div>
                        <div className='second-search'>
                            <input type='text' className='form_field mx-2' placeholder='Please Enter a Location' />
                        </div>
                        <div className='submit-button'>
                            <input type='submit' className='form_submit' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
