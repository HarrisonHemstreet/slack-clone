import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from './StateProvider';

function Header() {

    const [{user}] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <Avatar className='header__avatar' alt={user?.displayName} src={user?.photoURL}/>
                {/* Avatar for logged in user */}

                <AccessTimeIcon />
                {/* Time Icon */}
            </div>
            <div className='header__search'>
                <SearchIcon />
                <input placeholder='Search' />
                {/* Search Icon */}

                {/* input */}
            </div>
            <div className='header__right'>
                <HelpOutlineIcon />
                {/* help icon */}
            </div>
        </div>
    )
}

export default Header
