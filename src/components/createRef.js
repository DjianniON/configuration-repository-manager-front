import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateRef() {
    let navigation = useNavigate();
    const [nom, setRefName] = useState('');
    const [description, setRefDescription] = useState('');
    useEffect(() => {
        setRefName(localStorage.getItem('configuration'));
        setRefDescription(localStorage.getItem('description'));
    }, []);

    const createRef = () => {
        axios.post(`http://localhost:8080/api/v1/referentiel`, {
            nom,
            description
        }).then(() => {
            navigation(-1)
        })
    }
    return (
    <Container>
    <Form>
        <Form.Field>
            <label>Nom du référentiel</label>
            <input placeholder='Référentiel' onChange={(e) => setRefName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Description</label>
            <input placeholder='Description' onChange={(e) => setRefDescription(e.target.value)} />
        </Form.Field>
        <Button type='submit' color='green' onClick={createRef}>Créer</Button>
        <Link to='/'><Button type='annuler' color='red'>Annuler</Button></Link>
    </Form>
    </Container>
)
}
