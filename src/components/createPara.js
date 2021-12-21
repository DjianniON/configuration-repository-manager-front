import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CreatePara() {
    let params = useParams();
    let objet = parseInt(params.objectId, 10);
    const [nom, setParaName] = useState('');
    const [description, setParaDescription] = useState('');
    useEffect(() => {
        setParaName(localStorage.getItem('paraName'));
        setParaDescription(localStorage.getItem('paraDescription'));
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
                <Form className="create-para">
                    <Form.Field>
                        <label>Nom du paramètre</label>
                        <input placeholder='Parametre' onChange={(e) => setParaName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setParaDescription(e.target.value)} />
                    </Form.Field>
                    <Button type='creer' color='green' onClick={createPara}>Créer</Button>
                    <Button type='annuler' color='red'>Annuler</Button>
                </Form>
            </Container>
        </div>
    )
}
