import React, { useContext } from 'react'
import cardContext from '../context/CardContext';
import UserPropertyCard from './UserPropertyCard';

const Profile = () => {

    const context = useContext(cardContext);
    const { GetDataByUser, profile, propertyByUser, property_detail } = context;

    const user = localStorage.getItem('user');
    GetDataByUser(user);
    property_detail(user);

    // const userProperty = props.userProperty[0];
    // const [propertyByUser, setPropertyByUser] = useState([]);

    // useEffect(() => {
    //     property_detail();
    // }, [propertyByUser])

    // const property_detail = async () => {
    //     const user = localStorage.getItem('user');
    //     let result = await fetch(`http://localhost:5000/api/sell/sellingdetails/${user}`, {
    //         headers: {
    //             token: JSON.parse(localStorage.getItem('authentication'))
    //         }
    //     });
    //     result = await result.json();

    //     if (result.success) {
    //         setPropertyByUser(result.results);
    //     }
    // }

    // const [profile, setProfile] = useState([]);


    // useEffect(() => {
    //     const GetUserData = async () => {
    //         let result = await fetch(`http://localhost:5000/api/auth/data/${user}`, {
    //             headers: {
    //                 token: JSON.parse(localStorage.getItem('authentication'))
    //             }
    //         });
    //         result = await result.json();
    //         if (result.success) {
    //             setProfile(result.results[0]);
    //         }
    //     }
    //     GetUserData()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])



    return (
        <div className='container'>
            <div className='user_cotainer my-5'>
                <div className='profile_container'>
                    <div className='profile_data outline'>
                        <div className='user_detail py-3'>
                            <img src='https://source.unsplash.com/180x180/?profile,picture' alt='profile' />
                        </div>
                        <h4 className='text-center'>{profile.fname} {profile.lname} </h4>
                        <hr />
                        <div className='d-flex my-2 justify-content-between'>
                            <div><i className="fa fa-map-marker fa-lg my-auto" /><span className='my-auto ps-2'>From</span></div>
                            <h6 className='my-auto'>{profile.address}</h6>
                        </div>
                        <div className='d-flex my-2 justify-content-between'>
                            <div><i className="fa fa-user-circle fa-lg my-auto" /><span className='my-auto ps-2'>Member Since</span></div>
                            <h6 className='my-auto'>{profile.time}</h6>
                        </div>
                    </div>
                    <div className='profile_data mt-4 outline'>
                        <h5>Description</h5>
                        <p>Hi, Everyone this is kevin and I am a full stack web developer with the 4+ years of experience. I can develop your website in efficient way with the best customer service. I will provide you 100% satisfaction in your order. your order will be completed in friendly environment with a mutual co-operation. you will find the friendly relationship in your work rather than buyer and seller.. Perfectness is the keyword that describe my work.. most welcome always.. thank you
                        </p>
                    </div>
                </div>
                <div className='history'>
                    <div className='outline mb-2'>
                        <h5>Details</h5>
                    </div>
                    <div className='cardsitems'>
                        {propertyByUser.map((item, index) => {
                            return <UserPropertyCard desc={item.p_desc} location={item.p_address} key={index + 1} propertyId={item.sno} allproperty={property_detail} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
