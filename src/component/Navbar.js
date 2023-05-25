import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cardContext from '../context/CardContext';

const Navbar = () => {

    const context = useContext(cardContext);
    const { LoginUser, showAlert } = context;

    const auth = localStorage.getItem('authentication');

    const navigate = useNavigate();
    const ref = useRef(null);
    const refClose = useRef(null);

    const [logind, setLogind] = useState({ username: "", password: "" });

    const login = () => {
        ref.current.click();
    }
    const handleChange = (e) => {
        setLogind({ ...logind, [e.target.name]: e.target.value });
    }
    const login_form = (e) => {
        e.preventDefault();
        const loginv = {
            username: logind.username,
            password: logind.password,
        }
        LoginUser(loginv);
        setLogind({ username: "", password: "" });
        refClose.current.click();
        navigate("/");

    }
    const LogOut = () => {
        localStorage.removeItem('authentication');
        localStorage.removeItem('user');
        showAlert("You Have LogOut Successfully", "danger");
        navigate("/");
    }

    return (
        <div>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center">Login From here</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" name='username' value={logind.username} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name='password' value={logind.password} onChange={handleChange} className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={login_form} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className='logo' src='./images/logo.png' alt='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link navbar-brand active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Properties</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About us</Link>
                            </li>

                            {!auth ? <>

                                <li className="nav-item">
                                    <Link className="nav-link active" to='/signup'>sell property</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Register
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/agent">continue as agent</Link></li>
                                        <li><Link className="dropdown-item" to="/signup">signup</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item" onClick={login}>Login</li>
                                    </ul>
                                </li>
                                <button type="button" onClick={login} className="btn btn-primary">Join Us</button>
                            </> : <>

                                <li className="nav-item">
                                    <Link className="nav-link active" to='/sell'>sell property</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-user profile" aria-hidden="true" />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className='d-flex mx-2'>
                                            <i className="fa fa-user my-auto" />
                                            <Link className="dropdown-item" to="/profile">Profile</Link>
                                        </li>
                                        <li className='d-flex mx-2'>
                                            <i className="fa fa-gear my-auto" />
                                            <Link className="dropdown-item" to="/setting">setting</Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className="d-flex mx-2">
                                            <i className="fa fa-sign-out my-auto" />
                                            <Link className="dropdown-item" onClick={LogOut} to="/">Logout</Link>

                                        </li>
                                    </ul>
                                </li></>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
