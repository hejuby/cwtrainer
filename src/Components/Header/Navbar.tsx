import React from 'react';
import Searchbar from './Searchbar';

const Navbar = () =>
	<div className="Navbar">
		<h1>Header</h1>
    <Searchbar />
    <button>Upload</button>
    <button>Download</button>
	</div>

export default Navbar;