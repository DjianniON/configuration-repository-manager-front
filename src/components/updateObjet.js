import React, { useState } from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function UpdateObjet() {
    const [objet, setObjet] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        setObjet(localStorage.getItem('objet'));
        setDescription(localStorage.getItem('description'));
    }, []);
    return (
        <div>
            <Container>
                <Form className="update-objet-form">
                    <Form.Field>
                        <label>Nom de l'objet</label>
                        <input placeholder='Objet' onChange={(e) => setObjet(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    </Form.Field>
                    <Link to="/readObjetList"></Link><Button type='update' color='green'>Mettre à jour</Button></Link>
                    <Link to="/readObjetList"><Button type='annuler' color='red'>Annuler</Button></Link>
                </Form>
            </Container>
        </div>
    )
}
