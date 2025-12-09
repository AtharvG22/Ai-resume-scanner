import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <p className="text-2xl font-bold text-gradient">ResuMine</p>

      </Link>
      <Link to="/upload" className="primary-button w-fit">
      Upload resume</Link>
    </nav>
  )
}

export default Navbar