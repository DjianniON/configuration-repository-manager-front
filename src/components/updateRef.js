import React, { useEffect, useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicForm from './form/basicForm';

export default function UpdateRef() {
    let params = useParams();
    let navigation = useNavigate();
    let referentiel = parseInt(params.id, 10);
    const [nom, setRefName] = useState('');
    const [description, setRefDescription] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            setRefName(response.data.nom);
            setRefDescription(response.data.description);
        })      
    }, []);

    const updateRef = () => {
        axios.patch(`http://localhost:8080/api/v1/referentiel/${referentiel}`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <Container>
            <Header as="h1">Modifier le référentiel</Header>
            <BasicForm nom={nom} description={description} setNom={setRefName} setDescription={setRefDescription} operation={updateRef} type="update" />
        </Container>
    )
}