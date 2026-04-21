import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">nuvarez</div>

      <div className="nav-links">
        <Link to="/mulesoft">Mulesoft</Link>
        <Link to="/salesforce">Salesforce</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="talk-btn">Talk to us</button>
    </nav>
  );
}

export default Navbar;