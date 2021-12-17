import React, { useEffect, useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
    let params = useParams();
    let configuration = parseInt(params.id, 10);
    const [configName, setConfigName] = useState('');
    const [configDescription, setConfigDescription] = useState('');
    useEffect(() => {
        setConfigName(localStorage.getItem('configuration'));
        setConfigDescription(localStorage.getItem('description'));
    }, []);

    const updateConfig = () => {
        /*axios.put(`http://localhost:8080/api/v1/configuration/${configuration}`, {
            configName,
            configDescription
        }).then(() => {
            console.log("ok");
        })*/
    }

    return (
        <div>
            <Form className="create-form">
                <Container>
                    <Form.Field>
                        <label>Nom de la configuration</label>
                        <input placeholder='Nom de la configuration' value={configName} onChange={(e) => setConfigName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' value={configDescription} onChange={(e) => setConfigDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='submit' color='green' onClick={updateConfig}>Mettre à jour</Button>
                    <Link to="../"><Button type='annuler' color='red'>Annuler</Button></Link>
                </Container>
            </Form>
        </div>
    )
}