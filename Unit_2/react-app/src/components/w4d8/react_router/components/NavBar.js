import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            {/* <a href="/page-one">Page One</a> */}
            {/* <Link to="/page-one">Page One</Link> */}
            {/* <NavLink activeClassName={styles.active} to="/page-one"> */}
            <NavLink
              className={(n) => {
                console.log(n);
                return n.isActive ? styles.active : "";
              }}
              to="/page-one"
            >
              Page One
            </NavLink>
          </li>
          <li>
            {/* <a href="/page-two">Page Two</a> */}
            {/* <Link to="/page-two">Page Two</Link> */}
            {/* <NavLink activeClassName={styles.active} to="/page-one/page-two"> */}
            <NavLink className={(n) => (n.isActive ? styles.active : "")} to="/page-two">
              Page Two
            </NavLink>
          </li>
          <li>
            {/* <a href="/page-three">Page Three</a> */}
            {/* <Link to="/page-three">Page Three</Link> */}
            {/* <NavLink activeClassName={styles.active} to="/page-three"> */}
            <NavLink className={(n) => (n.isActive ? styles.active : "")} to="/page-three">
              Page Three
            </NavLink>
          </li>
          <li>
            {/* <NavLink activeClassName={styles.active} to="/main"> */}
            <NavLink className={(n) => (n.isActive ? styles.active : "")} to="/main">
              Main
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
