import React, { useContext } from 'react'
import cardContext from '../context/CardContext'
import CardItem from './CardItem'
import Home from './Home'

const Cards = () => {
    const context = useContext(cardContext);
    const { propertyDetail } = context;
    return (
        <>
            <Home />
            <div className='container'>
                <h1 className='text-center my-4'> Find Best house you !!</h1>
                <div className='row gy-3 my-3'>
                    {propertyDetail.map((item, index) => {
                        return <CardItem location={item.p_address} key={index + 1} picture={item.p_picture} propertyId={item.sno} title={item.p_title} desc={item.p_desc} />
                    })}
                </div>
            </div>
        </>

    )
}

export default Cards
