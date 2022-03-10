import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        {/* <li>
          <Link to='./'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add</Link>
        </li>
        <li>
          <Link to='/update'>Update</Link>
        </li> */}
        <li>
          <Link to='/calc'>StockDown%</Link>
        </li>
        <li>
          <Link to='/sip'>SIP</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;