import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>&copy; 2023 blogHUB. All rights reserved.</p>
        <p>
          Address: 123 Street, City, State, Zip Code | Email: prkrishnaconscious@gmail.com
        </p>
        <div style={styles.socialIcons}>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
  </a>
</div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    marginTop: 'auto',
  },
  content: {
    marginBottom: '20px',
  },
  socialIcons: {
    marginTop: '10px',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginLeft: '5px',
    marginRight: '5px',
    verticalAlign: 'middle',
  },
};

export default Footer;
