import "./CSS/navbar.css";

import { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <Home />
      <Search />
      <div>Profile</div>
    </div>
  );
}

const Home = () => {
  const Logo_link = `https://raw.githubusercontent.com/animesh9893/summer_training_frontend/c2ec2068b33f905fc800b3fbc2ffe1760b5584f4/src/component/navbar/logo.png`;
  return (
    <Link to="/" className="navbar-home">
      <img src={Logo_link} className="navbar-home-logo" alt="Icon" />
      <div className="navbar-home-text">Youtube</div>
    </Link>
  );
};

const Search = () => {
  const { setQuery } = useContext(AppContext);
  function set(event) {
    setQuery(event.target.value);
  }
  return (
    <div className="navbar-search">
      <form method="GET" action="/search">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search-input"
          onChange={set}
        />
        <button type="submit" className="navbar-search-submit">
          Search
        </button>
      </form>
    </div>
  );
};
