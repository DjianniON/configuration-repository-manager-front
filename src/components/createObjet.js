import React, { useState, useEffect } from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BasicForm from './form/basicForm';

export default function CreateObjet(props) {
    let params = useParams();
    let elementId = props.type === 'objet' ? params.objectId : props.type === 'configuration' ? params.configId : props.type === 'referentiel' ? params.id : null;
    let navigation = useNavigate();
    let objet = parseInt(elementId, 10);
    const [nom, setObjetName] = useState('');
    const [description, setObjetDescription] = useState('');
    useEffect(() => {
        setObjetName(localStorage.getItem('objetName'));
        setObjetDescription(localStorage.getItem('objetDescription'));
    }, []);
    const createObjet = () => {
        axios.post(`http://localhost:8080/api/v1/objet/${objet}/objet`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }
    const createRootObjetForConfiguration = () => {
        axios.post(`http://localhost:8080/api/v1/configuration/${objet}/objet`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }

    const createRootObjetForReferentiel = () => {
        axios.post(`http://localhost:8080/api/v1/referentiel/${objet}/objet`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <Container>
            <Header as="h1">Créer un objet</Header>
            <BasicForm
                nom={nom}
                description={description}
                setNom={setObjetName}
                setDescription={setObjetDescription}
                operation={props.type === 'objet' ? createObjet : props.type === 'configuration' ? createRootObjetForConfiguration : props.type === 'referentiel' ? createRootObjetForReferentiel : null}
            />
        </Container>
    )
}
