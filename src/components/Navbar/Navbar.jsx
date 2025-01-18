import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link to="/create">
        <button>Create</button>
      </Link>
    </header>
  );
};

export default Navbar;
