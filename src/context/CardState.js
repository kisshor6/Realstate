import React, { useEffect, useState } from 'react'
import CardContext from './CardContext'
const CardState = (props) => {

    const [propertyDetail, setPropertyDetail] = useState([]);
    const [propertyByUser, setPropertyByUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [alert, setAlert] = useState(null);


    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    useEffect(() => {
        allPropertyDetails();
    }, [propertyDetail])

    const allPropertyDetails = async () => {
        let result = await fetch('http://localhost:5000/api/sell/totalproperty');
        result = await result.json();
        if (result.success) {
            setPropertyDetail(result.results);
        }
    }

    const GetUserData = async (data) => {
        const body = { fname: data.fname, lname: data.lname, email: data.email, address: data.address, password: data.password, cpassword: data.cpassword };
        let result = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        result = await result.json();
        if (result.success) {
            localStorage.setItem('authentication', result.token);
            localStorage.setItem('user', result.user_id);
            showAlert("You Have Registered Successfully", "success");
        } else {
            showAlert("Failed to Register", "danger");
        }
    }
    const LoginUser = async (log) => {
        const logData = { username: log.username, password: log.password };
        let result = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logData),

        });
        result = await result.json();
        if (result.success) {
            localStorage.setItem('authentication', JSON.stringify(result.token));
            localStorage.setItem('user', JSON.stringify(result.user_id));
            showAlert("You Have Logined Successfully", "success");
        } else {
            showAlert("You Have failed to Login ", "danger");
        }
    }
    const sellPropertyData = async (e) => {
        const formData = new FormData();
        formData.append('user_id', localStorage.getItem('user'));
        formData.append('title', e.title);
        formData.append('desc', e.desc);
        formData.append('address', e.address);
        formData.append('map', e.map);
        formData.append('picture', e.picture);
        formData.append('oname', e.oname);
        formData.append('oadd', e.oadd);
        formData.append('oemail', e.oemail);
        formData.append('ocon', e.ocon);

        let result = await fetch('http://localhost:5000/api/sell/add', {
            method: 'POST',
            headers: {
                token: JSON.parse(localStorage.getItem('authentication'))
            },
            body: formData
        });
        if (result.success) {
            console.log(result.success);
            showAlert("You Have posted Successfully", "success");
        }
    }
    const GetDataByUser = async (id) => {
        let result = await fetch(`http://localhost:5000/api/auth/data/${id}`, {
            headers: {
                token: JSON.parse(localStorage.getItem('authentication'))
            }
        });
        result = await result.json();
        if (result.success) {
            setProfile(result.results[0]);
        }
    }
    const property_detail = async (id) => {
        let result = await fetch(`http://localhost:5000/api/sell/sellingdetails/${id}`, {
            headers: {
                token: JSON.parse(localStorage.getItem('authentication'))
            }
        });
        result = await result.json();
        if (result.success) {
            setPropertyByUser(result.results);
        }
    }

    return (
        <div>
            <CardContext.Provider value={{ sellPropertyData, alert, showAlert, GetUserData, LoginUser, propertyDetail, GetDataByUser, profile, propertyByUser, property_detail }}>
                {props.children}
            </CardContext.Provider>
        </div>
    )
}

export default CardState
