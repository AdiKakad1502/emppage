import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextBox from '../TextBox/Textbox';
import CreateUser from '../CreateUser/CreateUser';
import EmpPage from '../EmpPage/EmpPage';
import MessageBox from '../MessageBox/MessageBox';
import Header from '../Header/Header';
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <input type="checkbox" id="menu-btn" className='menu-btn'/>
            <label className='menu-icon' for="menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
            <Router>
                <Routes>
                    <Route exact path ="/" component = {Header}/>
                    <Route exact path = "/users/:id" component = {EmpPage}/>
                    <Route exact path ="/createUser" component = {CreateUser}/>
                    <Route exact path ="/feedBack" component = {TextBox}/>
                    <Route exact path ="/managerMail/:id" component = {MessageBox}/>
                </Routes>
            </Router>
            </ul>
            </nav>
    );
};

export default NavBar;


/* <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
        </Nav>
        {(
            <NavDropdown title="Menu">
                <Dropdown.Item href="/">Home</Dropdown.Item>
                <Dropdown.Item href="/about">Profile</Dropdown.Item>
                <Dropdown.Item href="/about">Reviews</Dropdown.Item>
            </NavDropdown>
        )}
    </Navbar.Collapse>
</Navbar> */