import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateObjet() {
    let params = useParams();
    let navigation = useNavigate();
    let objet = parseInt(params.objectId, 10);
    const [nom, setObjectName] = useState('');
    const [description, setObjectDescription] = useState('');
    useEffect(() => {
        setObjectName(localStorage.getItem('configuration'));
        setObjectDescription(localStorage.getItem('description'));
    }, []);

    const updateObject = () => {
        axios.put(`http://localhost:8080/api/v1/objet/${objet}`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }

    return (
        <div>
            <Container>
                <Form className="update-objet-form">
                    <Form.Field>
                        <label>Nom de l'objet</label>
                        <input placeholder='Objet' onChange={(e) => setObjectName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setObjectDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='submit' color='green' onClick={updateObject}>Mettre à jour</Button>
                    <Link to="../"><Button type='annuler' color='red'>Annuler</Button></Link>
                </Form>
            </Container>
        </div>
    )
}
