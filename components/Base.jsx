import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Base.module.css';
export function Base(props) {
  return <main className={styles.page}>{props.children}</main>;
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
};
