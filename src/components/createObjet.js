import React, { useState, useEffect } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
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
        setObjetName(localStorage.getItem('nom'));
        setObjetDescription(localStorage.getItem('description'));
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
        <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
            <Grid.Column style={{ maxWidth: '50%' }}>
                <Segment padded="very">
                    <Header as="h1">Créer un objet</Header>
                    <BasicForm
                        nom={nom}
                        description={description}
                        setNom={setObjetName}
                        setDescription={setObjetDescription}
                        operation={props.type === 'objet' ? createObjet : props.type === 'configuration' ? createRootObjetForConfiguration : props.type === 'referentiel' ? createRootObjetForReferentiel : null}
                    />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
