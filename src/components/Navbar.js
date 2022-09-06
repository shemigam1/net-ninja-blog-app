import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>the Shemigam1 blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            New Blog
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
