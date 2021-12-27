import React from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Create = () => (
    <Container>
    <Form>
        <Form.Field>
            <label>Nom du référentiel</label>
            <input placeholder='Configuration' />
        </Form.Field>
        <Form.Field>
            <label>Description</label>
            <input placeholder='Test' />
        </Form.Field>
        <Link to='/'><Button type='submit' color='green'>Créer</Button></Link>
        <Link to='/'><Button type='annuler' color='red'>Annuler</Button></Link>
    </Form>
    </Container>
)

export default Create;
