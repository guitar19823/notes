import { NavLink } from "react-router-dom";
import './index.css';

const NFPage = () => (
  <div className="NFPage">
    <span>404 not found</span>

    <NavLink to="/" exact>to home</NavLink>
  </div>
);

export default NFPage;