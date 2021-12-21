import React, { useEffect, useState } from 'react';
import { Button, Form, Container, TextArea } from 'semantic-ui-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateConfig() {
    let params = useParams();
    let navigation = useNavigate();
    let configuration = parseInt(params.configId, 10);
    const [nom, setConfigName] = useState('');
    const [description, setConfigDescription] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/configuration/${configuration}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            setConfigName(response.data.nom);
            setConfigDescription(response.data.description);
        })      
    }, []);

    const updateConfig = () => {
        axios.patch(`http://localhost:8080/api/v1/configuration/${configuration}`, {
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
                        <label>Nom de la configuration</label>
                        <input placeholder='Nom de la configuration' value={nom} onChange={(e) => setConfigName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <TextArea placeholder='Description' value={description} onChange={(e) => setConfigDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='submit' color='green' onClick={updateConfig}>Mettre à jour</Button>
                    <Link to="../"><Button color='red'>Annuler</Button></Link>
                </Container>
            </Form>
        </div>
    )
}