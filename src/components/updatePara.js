import React, { useEffect, useState } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ParaForm from './form/paraForm';

export default function UpdatePara() {
    let params = useParams();
    let navigation = useNavigate();
    let propriete = parseInt(params.paramId, 10);
    const [nom, setParaName] = useState('');
    const [typePara, setParaType] = useState('');
    const [valeur, setParaValeur] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/propriete/${propriete}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            setParaName(response.data.nom);
            setParaType(response.data.type);
            setParaValeur(response.data.valeur);
        })
    }, []);

    const updatePara = () => {
        axios.patch(`http://localhost:8080/api/v1/propriete/${propriete}`, {
            nom,
            type: typePara,
            valeur
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
            <Grid.Column style={{ maxWidth: '50%' }}>
                <Segment padded="very">
                    <Header as="h1">Modifier le paramètre</Header>
                    <ParaForm nom={nom} typePara={typePara} valeur={valeur} setNom={setParaName} setType={setParaType} setValeur={setParaValeur} operation={updatePara} type='update' />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}