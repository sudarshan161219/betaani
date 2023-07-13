import React from 'react';
import './Categories.css';
import Navbar from '../Navbar/Navbar';

const Categories = () => {
    return (
        <div className='categories-section'>
            <Navbar />
            <div className="category-content">
                <h1>Catego<span>ries</span></h1>
                <div className="categories">
                    <div className="first-row">
                        <div className="category-"><a href="/"></a> Navb<span>ars</span></div>
                        <div className="category-"><a href="/"></a> Car<span>ds</span></div>
                        <div className="category-"><a href="/"></a> Landing <span> Pages</span></div>
                    </div>
                    <div className="second-row">
                        <div className="category-"><a href="/"></a> Butt<span>ons</span></div>
                        <div className="category-"><a href="/"></a> Text <span> Animations</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;