import React, { useEffect, useState } from 'react';
import { Grid, Header, Segment  } from 'semantic-ui-react';
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
        <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
        <Grid.Column style={{ maxWidth: '50%' }}>
            <Segment padded="very">
            <Header as="h1">Modifier la configuration</Header>
            <BasicForm nom={nom} description={description} setNom={setConfigName} setDescription={setConfigDescription} operation={updateConfig} type="update" />
            </Segment>
            </Grid.Column>
        </Grid>
    )
}