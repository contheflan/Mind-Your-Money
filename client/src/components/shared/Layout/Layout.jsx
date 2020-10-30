import React from 'react'
import {Link} from 'react-router-dom'
import './Layout.css'
import Nav from '../Nav/Nav'
import Hamburger from '../Hamburger/Hamburger'



const Layout = (props) => (
  <div id="outer-container" className='layout'>
    <Hamburger className="Hamburger" pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <Link className="logo" to="/">
    <img src={process.env.PUBLIC_URL + 'assets/Logo.png'} />
    </Link>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
)

export default Layout