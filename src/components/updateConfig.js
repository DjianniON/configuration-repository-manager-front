import React, { useEffect, useState } from 'react';
import { Container, Header  } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicForm from './form/basicForm';

export default function UpdateConfig() {
    let params = useParams();
    let navigation = useNavigate();
    let configuration = parseInt(params.configId, 10);
    const [nom, setConfigName] = useState('');
    const [description, setConfigDescription] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/configuration/${configuration}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            setConfigName(response.data.nom);
            setConfigDescription(response.data.description);
        })      
    }, []);

    const updateConfig = () => {
        axios.patch(`http://localhost:8080/api/v1/configuration/${configuration}`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <Container>
            <Header as="h1">Modifier la configuration</Header>
            <BasicForm nom={nom} description={description} setNom={setConfigName} setDescription={setConfigDescription} operation={updateConfig} type="update" />
        </Container>
    )
}