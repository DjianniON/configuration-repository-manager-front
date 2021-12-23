import React, { useState, useEffect } from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BasicForm from './form/basicForm';

export default function CreateObjet() {
    let params = useParams();
    let navigation = useNavigate();
    let objet = parseInt(params.objectId, 10);
    const [nom, setObjectName] = useState('');
    const [description, setObjectDescription] = useState('');
    useEffect(() => {
        setObjectName(localStorage.getItem('objectName'));
        setObjectDescription(localStorage.getItem('objectDescription'));
    }, []);
    const createObject = () => {
        axios.post(`http://localhost:8080/api/v1/objet/${objet}/objet`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }
    return (
        <Container>
            <Header as="h1">Créer un objet</Header>
            <BasicForm nom={nom} description={description} setNom={setObjectName} setDescription={setObjectDescription} operation={createObject} />
        </Container>
    )
}
