import React, { useState, useEffect } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicForm from './form/basicForm';

export default function CreateConfig() {
    let params = useParams();
    let navigation = useNavigate();
    let referentiel = parseInt(params.id, 10);
    const [nom, setConfigName] = useState('');
    const [description, setConfigDescription] = useState('');
    useEffect(() => {
        setConfigName(localStorage.getItem('nom'));
        setConfigDescription(localStorage.getItem('description'));
    }, []);

    const createConfig = () => {
        axios.post(`http://localhost:8080/api/v1/referentiel/${referentiel}/configuration`, {
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
                    <Header as="h1">Créer une configuration</Header>
                    <BasicForm nom={nom} description={description} setNom={setConfigName} setDescription={setConfigDescription} operation={createConfig} />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
