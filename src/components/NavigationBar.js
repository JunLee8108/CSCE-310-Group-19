import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavigationBar.css';

function NavigationBar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const logOut = (event) => {
        props.setLoginUser({});
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    console.log(props.user)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link
                        to='/'
                        style={{ textDecoration: "none" }}
                        className='navbar-logo'
                        onClick={closeMobileMenu}>
                        {/* <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Freepik - Flaticon</a> */}
                        <img src='/img/Anywhere-removebg-preview.png' width='60' />&nbsp;
                        AnyWhere
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/'
                                style={{ textDecoration: "none" }}
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Plan'
                                style={{ textDecoration: "none" }}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Plan
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Activity'
                                style={{ textDecoration: "none" }}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Activity
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Location'
                                style={{ textDecoration: "none" }}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Location
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/Flight'
                                style={{ textDecoration: "none" }}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Flight
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Button className='nav-links-button' >Sign In</Button>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                style={{ textDecoration: "none" }}
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    );
}

function DropdownMenu(props) {

    // function DropdownItem(props){

    //   return (
    //      <Link to= "/MyProfile" className="profile-menu-item">
    //        <span className="Profile-icon-button">{props.leftIcon}</span>
    //        {props.children}    
    //     </Link>
    //   )
    // }

    const logOut = (event) => {
        props.user.setLoginUser({});
    };

    return (

        <div className="Profiledropdown">
            {/* <DropdownItem user={props}>My Profile</DropdownItem> */}
            <Link to="/MyProfile" className="profile-menu-item">
                My Profile</Link>
            <a href="#" className="profile-menu-item" onClick={logOut}>Log Out</a>
        </div>

    )
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="navProfile-item">
            {/* <Avatar 
    size='80' color='#570E0E' round='rounded'
     onClick={() => setOpen(!open)} name={props.icon.firstname} maxInitials={2}></Avatar> */}
            <button buttonStyle='btn--outline' onClick={() => setOpen(!open)}>{props.icon.firstname[0]} </button>
            {open && props.children}
        </li>
    );
}

export default NavigationBar;