import React, { useState, useEffect } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicForm from './form/basicForm';

export default function CreateRef() {
    let navigation = useNavigate();
    const [nom, setRefName] = useState('');
    const [description, setRefDescription] = useState('');
    useEffect(() => {
        setRefName(localStorage.getItem('configuration'));
        setRefDescription(localStorage.getItem('description'));
    }, []);

    const createRef = () => {
        axios.post(`http://localhost:8080/api/v1/referentiel`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }
    return (
        <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
            <Grid.Column style={{ maxWidth: '50%' }}>
                <Segment  padded="very">
                <Header as="h1">Créer un référentiel</Header>
                <BasicForm nom={nom} description={description} setNom={setRefName} setDescription={setRefDescription} operation={createRef} />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
