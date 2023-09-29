import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Cette page n'éxiste pas</h2>
            <Link to={'/'} className="btn btn-secondary">Retour à l'accueil</Link>
        </div>
    )
}

export default NotFound;