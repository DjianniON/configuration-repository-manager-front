import React, { useEffect, useState } from 'react';
import { Grid, Header, Segment  } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ParaForm from './form/paraForm';

export default function UpdatePara() {
    let navigation = useNavigate();
    const [nom, setParaName] = useState('');
    const [type, setParaType] = useState('');
    const [valeur, setParaValeur] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/parametre/`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            setParaName(response.data.nom);
            setParaType(response.data.type);
            setParaValeur(response.date.valeur);
        })      
    }, []);

    const updatePara = () => {
        axios.patch(`http://localhost:8080/api/v1/parametre/`, {
            nom,
            type,
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
            <ParaForm nom={nom} type={type} valeur={valeur} setNom={setParaName} setType={setParaType} setValeur={setParaValeur} operation={updatePara} type="update" />
            </Segment>
            </Grid.Column>
        </Grid>
    )
}