import React from "react";
import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <>
      <h1>Page One</h1>

      <ul>
        <li>
          <Link to="/page-one/a">Detail A</Link>
        </li>
        <li>
          <Link to="/page-one/b">Detail B</Link>
        </li>
        <li>
          <Link to="/page-one/c">Detail C</Link>
        </li>
      </ul>
    </>
  );
};

export default PageOne;
