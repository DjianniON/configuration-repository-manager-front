import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateConfig() {
    let params = useParams();
    let navigation = useNavigate();
    let referentiel = parseInt(params.id, 10);
    const [nom, setConfigName] = useState('');
    const [description, setConfigDescription] = useState('');
    useEffect(() => {
        setConfigName(localStorage.getItem('configuration'));
        setConfigDescription(localStorage.getItem('description'));
    }, []);

    const createConfig = () => {       
        axios.post(`http://localhost:8080/api/v1/referentiel/${referentiel}/configuration/`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }
    
    return (
        <div>
            <Container>
                <Form className="create-form">
                    <Form.Field>
                        <label>Nom de la configuration</label>
                        <input placeholder='Configuration' onChange={(e) => setConfigName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setConfigDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='creer' color='green' onClick={createConfig}>Créer</Button>
                    <Link to="../"><Button type='annuler' color='red'>Annuler</Button></Link>
                </Form>
            </Container>
        </div>
    )
}
