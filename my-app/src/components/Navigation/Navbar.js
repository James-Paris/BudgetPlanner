import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
		<Navbar bg='light' variant='light'>
			<Navbar.Brand href='/'>Team Budget Planner</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='/'>Project Entry</Nav.Link>
				<Nav.Link href='/financial'>Project Approval</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default NavBar;