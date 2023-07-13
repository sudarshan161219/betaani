import './SecondaryNav.css';

const SecondaryNav = () => {
    return (
        <div className='secondary-nav'>
            <nav className='sec-nav-comp'>
                <ul>
                    <li><a href={"#navbars"}>Navb<span>ars</span></a></li>
                    <li><a href={"#cards"}>Car<span>ds</span></a></li>
                    <li><a href={"#landingpages"}>Landing <span>Pages</span></a></li>
                    <li><a href={"#buttons"}>Butt<span>ons</span></a></li>
                    <li><a href={"#textanimations"}>Text <span>Animations</span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default SecondaryNav;