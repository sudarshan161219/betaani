import React, { useState } from 'react';
import './BrowsingTab.css';
import Navbar from '../Navbar/Navbar';

const BrowsingTab = () => {
    const [theme, setTheme] = useState('any theme');
    const [category, setCategory] = useState('randomized');
    const [searchText, setSearchText] = useState('');

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Perform search functionality
        console.log('Search submitted:', searchText);
    };

    return (
        <div className="browse-page">
            <Navbar />
            <div className="services">
                <div>
                    <button>Navbars</button>
                    <button>Cards</button>
                    <button>Landing Pages</button>
                    <button>Buttons</button>
                    <button>Text Animations</button>
                </div>

                <div>
                    <h1>Browse All</h1>
                    <p>Get everything you require to build your amazing website.</p>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchText}
                            onChange={handleSearchChange}
                        />

                    </div>
                </div>
            </div>

            <div className="dropdown-container">
                <div className="dropdown">
                    <select id="theme-dropdown" value={theme} onChange={handleThemeChange}>
                        <option value="any theme">Any Theme</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>

                <div className="dropdown">
                    <select id="category-dropdown" value={category} onChange={handleCategoryChange}>
                        <option value="randomized">Randomized</option>
                        <option value="favorites">Favorites</option>
                        <option value="popular">Popular</option>
                        <option value="new">New</option>
                    </select>
                </div>
            </div>
            <div className="main-components">
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="load-more">Load <span> More</span></div>
                </div>
        </div>
    );
};

export default BrowsingTab;
