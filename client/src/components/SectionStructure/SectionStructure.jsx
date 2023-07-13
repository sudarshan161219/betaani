import './SectionStructure.css';

const SectionStructure = (props) => {

    return (
        <div className='main-section-frontpage'>
            <div className="main-section-content">
                <h1>We have <span>{props.heading}.</span></h1>
                <div className="main-components">
                    <div className="components-"></div>
                    <div className="components-"></div>
                    <div className="load-more">Load <span> More</span></div>
                </div>
            </div>
        </div>
    );
};

export default SectionStructure;