import React from 'react';
import './contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div id="cont">
        
    <div className="contact-sec" >
      <div className="contact_data2">
        <ul className='un-list'>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <strong>Location:</strong>
            <p>8-4-544/S/20 Sultan Nagar, Erragadda Hyderabad.</p>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <strong>Email:</strong>
            <p>arsalanmudassir2001@gmail.com</p>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <strong>Call:</strong>
            <a href="tel:+91 8106602691" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <p>+91 8106602691</p>
            </a>
          </li>
        </ul>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.5428852827791!2d78.42887065399829!3d17.4515018072954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911354b69f0f%3A0x79bd69db1e1edf88!2sArsalan%20Trades!5e0!3m2!1sen!2sin!4v1678811652987!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contact_data">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/xeqwzvba" method="post">
          <label htmlFor="">Name</label>
          <input type="text" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
          <label htmlFor="">Subject</label>
          <input type="text" name="subject" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
