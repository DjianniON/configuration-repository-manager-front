import React, { useState, useEffect } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ParaForm from './form/paraForm';

export default function CreatePara() {
    let navigation = useNavigate();
    const [nom, setParaName] = useState('');
    const [type, setParaType] = useState('');
    const [valeur, setParaValeur] = useState('');
    useEffect(() => {
        setParaName(localStorage.getItem('parametre'));
        setParaType(localStorage.getItem('type'));
        setParaValeur(localStorage.getItem('valeur'));
    }, []);

    const createPara = () => {
        axios.post(`http://localhost:8080/api/v1/propriete/{id}`, {
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
                    <Header as="h1">Créer un paramètre</Header>
                    <ParaForm nom={nom} type={type} valeur={valeur} setNom={setParaName} setType={setParaType} setValeur={setParaValeur} operation={createPara} />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
