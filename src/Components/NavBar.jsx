import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useWindowDimensions from '../utils/dimensionHelper';

const navItems = [{
  label: "Home",
  route: "/"
},{
  label: "Experience",
  route: "/experience"
}
,{
  label: "Education",
  route: "/education"
}
,{
  label: "Skills",
  route: "/skills"
},
{
  label: "Contact",
  route: "/contact"
}
]

const CustomNav = () => {
  const { width } = useWindowDimensions();
  const navbarBgColor = width < 768 ? 'white' : 'transparent';
  
  return (
    <div>
      <Navbar bg="transparent" expand="md" className="mt-2">
        <Link 
          className="font-weight-bold s-logo text-white text-decoration-none" 
          to="/" 
          style={{
            marginLeft: '20px'
          }}
        >
          K
        </Link>
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`bg-${navbarBgColor}`}>
          <Nav className="mx-auto d-flex justify-content-between" style={{ width: '50%' }}>
            {navItems.map(item => 
              <Nav.Link className="text-center navLink" key={item.label} style={{ flex: 1 }}>
                <NavLink
                  exact
                  className="color-customBlue w-100 text-decoration-none"
                  activeClassName="font-weight-bold"
                  to={item.route}
                  style={{
                    textAlign: 'center', 
                    padding: '0 15px'
                  }}
                >
                  {item.label}
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default CustomNav;
