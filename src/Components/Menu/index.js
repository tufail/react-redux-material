import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { logout } from '../../store/actions';
import Button from '@material-ui/core/Button';

const Menu = ({logout}) => {
    const onClickFunc = () => {
        logout();
    }
    return (
        <div>
        <ul className = "lists">
            <li><Link to = "/">HOME </Link></li>
            <li><Link to = '/about' >ABOUT </Link></li>
            <li><Link to = '/gallery' >GALLERY </Link></li>
            <li><Link to = '/private' >PRIVATE </Link></li>
            <li><Link to = '/settings' >SETTINGS </Link></li>
        </ul>
            <Button variant="contained" color="primary" type = "button" onClick = {onClickFunc} >Logout</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Menu);
