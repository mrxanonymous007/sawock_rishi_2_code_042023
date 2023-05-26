import logo_kasa_footer from '../../assets/logo_kasa_footer.svg';
import './footer.css';

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