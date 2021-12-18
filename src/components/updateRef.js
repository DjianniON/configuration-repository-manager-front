import React, { useEffect, useState } from 'react';
import { Button, Form, Container, TextArea } from 'semantic-ui-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateRef() {
    let params = useParams();
    let navigation = useNavigate();
    let referentiel = parseInt(params.id, 10);
    const [nom, setRefName] = useState('');
    const [description, setRefDescription] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            setRefName(response.data.nom);
            setRefDescription(response.data.description);
        })      
    }, []);

    const updateRef = () => {
        axios.put(`http://localhost:8080/api/v1/referentiel/${referentiel}`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Container>
                    <Form.Field>
                        <label>Nom du référentiel</label>
                        <input placeholder='Nom de la configuration' value={nom} onChange={(e) => setRefName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <TextArea placeholder='Description' value={description} onChange={(e) => setRefDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='submit' color='green' onClick={updateRef}>Mettre à jour</Button>
                    <Link to="../"><Button color='red'>Annuler</Button></Link>
                </Container>
            </Form>
        </div>
    )
}