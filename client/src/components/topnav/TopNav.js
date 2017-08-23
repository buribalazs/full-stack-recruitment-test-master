import React from 'react';
import './TopNav.scss';
import logo from '../../logo.svg';
import BpkLargeMenuIcon from 'bpk-component-icon/lg/menu';

const TopNav = () => (
    <header className='header'>
        <a href="/">
            <span className='logoText'>Skyscanner</span>
            <img className='logo' alt="Skyscanner" src={logo}/>
        </a>
        <a href="/">
            <BpkLargeMenuIcon className='menuButton'/>
        </a>
    </header>
);

export default TopNav;
