import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertConfirm = ({fonctionToLaunch}) => {
    const [show, setShow] = useState(true);
    console.log("J'ENTRE BIEN DANS ALERTcONFIRM");

    return (
        <>
            <Alert show={show} variant="warning">
                <Alert.Heading>Alerte Suppression</Alert.Heading>
                <p>
                    Vous vous apprétez à supprimer cette voiture : Êtes-vous sûr de votre choix ?
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Annuler
                    </Button>
                    <Button onClick={fonctionToLaunch} variant="outline-danger">
                        Supprimer
                    </Button>
                </div>
            </Alert>
        </>
    );}

export default AlertConfirm;