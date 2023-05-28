//importation d'un composante de react-router
import { Link } from 'react-router-dom';

//importation du CSS
import './error.css';

//composant error404 créé
function Error404() {
    return (
        <div className="error">
            <p className='error_number'>404</p>
            <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error_link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404;

