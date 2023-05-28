//importation d'une image
import logo_kasa_footer from '../../assets/logo_kasa_footer.svg';

//importation de CSS
import './footer.css';

//composant footer créé
function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <img className="footer_logo" src={logo_kasa_footer} alt="logo de l'agence kasa" />
                <div className="footer_text">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;