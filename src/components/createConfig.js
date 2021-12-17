import React, { useState } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function CreateConfig() {
    const [configuration, setConfiguration] = useState('');
    const [description, setDescription] = useState('');
    const postData = () => {
        console.log(configuration);
        console.log(description);
    }
    return (
        <div>
            <Container>
                <Form className="create-form">
                    <Form.Field>
                        <label>Nom de la configuration</label>
                        <input placeholder='Configuration' onChange={(e) => setConfiguration(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    </Form.Field>
                    <Link to="/readList"><Button type='creer' color='green'>Créer</Button></Link>
                    <Link to="/readList"><Button type='annuler' color='red'>Annuler</Button></Link>
                </Form>
            </Container>
        </div>
    )
}
