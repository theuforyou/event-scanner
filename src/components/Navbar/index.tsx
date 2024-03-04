import {Link} from "react-router-dom";
import styles from './navbar.module.css';

const Navbar = () => {

    return(
        <>
            <nav className={styles.container}>
            <Link to="/">Home</Link>
            <Link to="/Institucion/Test">Instituciones</Link>
            </nav>
         
        </>
    );
};
export default Navbar;