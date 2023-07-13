import "./Mainpage.css";
import LandingPage from "./../Landing-Page/LandingPage";
import Navbar from "../Navbar/Navbar";

import SectionStructure from "./../SectionStructure/SectionStructure";
import LastComponent from "./../Last-Component/LastComponent";
import SecondaryNav from "./../SecondaryNavbar/SecondaryNav";
import Sidebar from "./../sidebar/Sidebar";
import Footer from "../Footer/Footer";
const Mainpage = () => {
  return (
    <div className="main">
      
      <Navbar />
      <SecondaryNav />
      <LandingPage />
      <section id="navbars">
        <SectionStructure heading="Navbars" />
      </section>
      <section id="cards">
        <SectionStructure heading="Cards" />
      </section>
      <section id="landingpages">
        <SectionStructure heading="Landing Pages" />
      </section>
      <section id="buttons">
        <SectionStructure heading="Buttons" />
      </section>
      <section id="textanimations">
        <LastComponent />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
      <Sidebar />
    </div>
  );
};

export default Mainpage;
