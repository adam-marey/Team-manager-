import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <p className={styles.navHome}>HOME</p>
      <div className={styles.navCatg} style={{ marginRight: 15 }}>
        <p style={{ marginRight: 15 }}>TEAMS</p>
        <p>DEVELOPERS</p>
      </div>
    </div>
  );
};

export default Navbar;
