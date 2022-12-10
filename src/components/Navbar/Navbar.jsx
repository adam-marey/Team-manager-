import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <p className="button-50">HOME</p>
      <div className={styles.navCatg} style={{ marginRight: 15 }}>
        <p className="button-50" style={{ marginRight: 15 }}>
          TEAMS
        </p>
        <p className="button-50">DEVELOPERS</p>
      </div>
    </div>
  );
};

export default Navbar;
