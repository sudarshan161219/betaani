import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import ExpandableTextarea from './ExpandableTextarea';

const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value
      }
    });
  }
  return (
    <div className='contact-page'>
    <Navbar />
    <div className="contact-us-container">
      <div className="contact-content">

        <h1>Get In <span>Touch</span></h1>
        <p>If you have any questions or need help, please fill out the <span>form below.</span></p>
        <form onSubmit={handleSubmit}>
          <label>
            <input className="contact-input" type="text" name="name" placeholder="Name" onChange={handleChange} value={userInfo.name}/>
          </label>
          <br />
          <label>
            <input type="email" name="email" placeholder="Your email address"  value={userInfo.email} onChange={handleChange}/>
          </label>
          <br />
          <ExpandableTextarea />;

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="social-handles">
        <div className="social-buttons">
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
