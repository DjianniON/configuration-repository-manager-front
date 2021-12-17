import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CreateConfig() {
    let params = useParams();
    let referentiel = parseInt(params.id, 10);
    const [configName, setConfigName] = useState('');
    const [configDescription, setConfigDescription] = useState('');
    useEffect(() => {
        setConfigName(localStorage.getItem('configuration'));
        setConfigDescription(localStorage.getItem('description'));
    }, []);
    //http://localhost:8080/api/v1/referentiel/${referentiel}/configuration/
    const createConfig = () => {       
        /*axios.post(`http://localhost:8080/api/v1/configuration/`, {
            configName,
            configDescription
        }).then(() => {
            console.log("ok");
        })*/
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
                    <Link to="/readList"><Button type='annuler' color='red'>Annuler</Button></Link>
                </Form>
            </Container>
        </div>
    )
}
