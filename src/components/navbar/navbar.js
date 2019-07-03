import React from "react";
import classes from "../navbar/navbar.css";
import { Link } from "react-router-dom";
import { EventConsumer } from "../../utils/context";

const Navbar = props => {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.title}>Event Awesome</h1>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link to="/">Events</Link>
        </li>
        <li className={classes.li}>
          <Link to="/category">Category</Link>
        </li>

        {props.isAuthenticated ? (
          <li>Logout</li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li className={classes.li}>
          <Link to="/signup">Signup</Link>
        </li>
        <li className={classes.li}>
          <Link to="/wishlist">
            <EventConsumer>
              {value => {
                return (
                  <span>
                    {value.eBookmarked.length}
                    <i className="fas fa-box" />
                  </span>
                );
              }}
            </EventConsumer>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
