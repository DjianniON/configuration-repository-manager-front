import React, { useEffect, useState } from 'react';
import { Grid, Header, Segment  } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProprieteForm from './form/proprieteForm';

export default function UpdatePropriete() {
    let params = useParams();
    let navigation = useNavigate();
    let propriete = parseInt(params.paramId, 10);
    const [nom, setProprieteName] = useState('');
    const [typePropriete, setProprieteType] = useState('');
    const [valeur, setProprieteValeur] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/propriete/${propriete}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            setProprieteName(response.data.nom);
            setProprieteType(response.data.type);
            setProprieteValeur(response.data.valeur);
        })      
    }, []);

    const updatePropriete = () => {
        axios.patch(`http://localhost:8080/api/v1/propriete/${propriete}`, {
            nom,
            type: typePropriete,
            valeur  
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
        <Grid.Column style={{ maxWidth: '50%' }}>
            <Segment padded="very">
            <Header as="h1">Modifier la propriété</Header>
            <ProprieteForm nom={nom} typePropriete={typePropriete} valeur={valeur} setNom={setProprieteName} setType={setProprieteType} setValeur={setProprieteValeur} operation={updatePropriete} type='update'/>
            </Segment>
            </Grid.Column>
        </Grid> 
    )
} 