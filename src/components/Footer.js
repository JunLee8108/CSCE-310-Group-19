import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign up for our mailing list for events, updates, and more
        </p>
        <div className='input-areas'>
          <button to='/Sign up' buttonStyle='btn--primary'>SIGN UP</button>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            {/* <Link to='/sign-up'>How it works</Link> */}
            <Link to='/officers'>Officers & Contributors</Link>
            <Link to='/upcoming event'>Upcoming Events</Link>
            {/* <Link to='/'>Terms of Service</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Sign-up'>Sign up & Sign in</Link>
            <Link to='/contact us'>Contact Us</Link>
            {/* <Link to='/'>Support</Link> */}
            {/* <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/Logo.png' width = '40'/>
            &nbsp;KSEA
            </Link>
          </div>
          <small class='website-rights'>KSEA © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/ksea.tamu" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/tamuksea/?hl=ko" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://www.linkedin.com/company/ksea/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
