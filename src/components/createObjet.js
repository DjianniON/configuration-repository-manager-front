import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Container, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Create() {
    let params = useParams();
    console.log(params);
    let objet = parseInt(params.objectId, 10);
    const [nom, setObjectName] = useState('');
    const [description, setObjectDescription] = useState('');
    useEffect(() => {
        setObjectName(localStorage.getItem('objectName'));
        setObjectDescription(localStorage.getItem('objectDescription'));
    }, []);
    const createObject = () => {       
        axios.post(`http://localhost:8080/api/v1/objet/${objet}/objet`, {
            nom,
            description
        }).then(() => {
            console.log("ok");
        })
    }
    return (
        <div>
            <Container>
                <Form className="create-form">
                    <Form.Field>
                        <label>Nom de l'objet</label>
                        <input placeholder='Objet' onChange={(e) => setObjectName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setObjectDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='creer' color='green' onClick={createObject}>Créer</Button>
                    <Button type='annuler' color='red'>Annuler</Button>
                </Form>
            </Container>
        </div>
    )
}
