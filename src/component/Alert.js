import React, { useContext } from 'react'
import cardContext from '../context/CardContext';

const Alert = (props) => {
    const context = useContext(cardContext);
    const { alert } = context;
    return (
        alert && <div className={`alert alert-${alert.type} alert-dismissible fade show my-0`} role="alert">
            <strong>{alert.type}</strong> {alert.msg}
        </div>

    )
}

export default Alert
