import React, { useState, useEffect } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProprieteForm from './form/proprieteForm';

export default function CreatePropriete() {
    let navigation = useNavigate();
    let params = useParams();
    let objet = parseInt(params.objectId, 10);
    const [nom, setProprieteName] = useState('');
    const [typePropriete, setProprieteType] = useState('');
    const [valeur, setProprieteValeur] = useState('');
    useEffect(() => {
        setProprieteName(localStorage.getItem('nom'));
        setProprieteType(localStorage.getItem('typePropriete'));
        setProprieteValeur(localStorage.getItem('valeur'));
    }, []);

    const createPropriete = () => {
        axios.post(`http://localhost:8080/api/v1/objet/${objet}/propriete`, {
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
                    <Header as="h1">Créer une propriété</Header>
                    <ProprieteForm nom={nom} typePropriete={typePropriete} valeur={valeur} setNom={setProprieteName} setType={setProprieteType} setValeur={setProprieteValeur} operation={createPropriete} />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
