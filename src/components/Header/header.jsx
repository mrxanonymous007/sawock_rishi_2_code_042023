import { Link, NavLink } from "react-router-dom";

import logo_kasa_header from '../../assets/logo_kasa_header.svg';

import './header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="logo_header" src={logo_kasa_header} alt="logo de l'agence kasa" />
            </Link>
            <nav>
                <ul className="navbar_list">
                    <li>
                        <NavLink to="/" className={({ isActive }) => {
                            return isActive ? "navbar_link_active" : "navbar_link";
                        }}
                        > Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => {
                            return isActive ? "navbar_link_active" : "navbar_link";
                        }}
                        > À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

