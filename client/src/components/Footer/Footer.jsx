
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>

            <div className="first-column">

                <div className="startup-content">
                    <h1>Anim<span>atrix</span></h1>
                    <h4>We are group of web developers who believe in providing free components</h4>
                    <h4>Our motto is making web development hustle free</h4>
                </div>

                <div className="offerings">
                    <h1>What we <span>offer-</span></h1>
                    <ul>
                        <li><a href="/navbar">Navbars</a></li>
                        <li><a href="/cards">Cards</a></li>
                        <li><a href="/landingpages">Landing Pages</a></li>
                        <li><a href="/buttons">Buttons</a></li>
                        <li><a href="/textanimations">Text Animations</a></li>
                    </ul>
                </div>
            </div>

            <div className="second-column">
                <h1>Inform<span>ation</span></h1>
                <h4><a href="/">Post Guidelines</a></h4>
            </div>

            <div className="third-column">
                <h1>Leg<span>al</span></h1>
                <ul>
                    <li><a href="/">Terms and Conditions</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Cookie Policy</a></li>
                    <li><a href="/">Disclaimer</a></li>
                </ul>
            </div>
        </div>
    );
};


export default Footer;
