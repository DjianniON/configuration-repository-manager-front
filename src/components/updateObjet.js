import React, { useState, useEffect } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BasicForm from './form/basicForm';

export default function UpdateObjet() {
    let params = useParams();
    let navigation = useNavigate();
    let objet = parseInt(params.objectId, 10);
    const [nom, setObjectName] = useState('');
    const [description, setObjectDescription] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/objet/${objet}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            setObjectName(response.data.nom);
            setObjectDescription(response.data.description);
        })
    }, []);

    const updateObject = () => {
        axios.patch(`http://localhost:8080/api/v1/objet/${objet}`, {
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
                    <Header as="h1">Modifier l'objet</Header>
                    <BasicForm nom={nom} description={description} setNom={setObjectName} setDescription={setObjectDescription} operation={updateObject} type="update" />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
