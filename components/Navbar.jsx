import React from 'react';
import styles from '../styles/Navbar.module.css';
import PropTypes from 'prop-types';
export function Navbar({ showMenu }) {
  return (
    <nav className={styles.box}>
      <h2 className={styles.logo}>S</h2>
      {showMenu && (
        <>
          <ul className={styles.menu}>
            <li className={styles.item}>About</li>
            <li className={styles.item}>Experience</li>
            <li className={styles.item}>Project</li>
          </ul>
          <button className={styles.btn}>Contact</button>
        </>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  showMenu: PropTypes.bool,
};
