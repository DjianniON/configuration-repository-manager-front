import React, { useState } from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function UpdatePara() {
    const [parametre, setPara] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        setPara(localStorage.getItem('parametre'));
        setDescription(localStorage.getItem('description'));
    }, []);
    return (
        <div>
            <Container>
                <Form className="update-para-form">
                    <Form.Field>
                        <label>Nom du paramètre</label>
                        <input placeholder='Parametre' onChange={(e) => setPara(e.target.value)} />
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