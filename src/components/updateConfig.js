import React, {useEffect, useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Update() {
    const [configuration, setConfiguration] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        setConfiguration(localStorage.getItem('configuration'));
        setDescription(localStorage.getItem('description'));
    }, []);
    return (
        <div>
            <Form className="create-form">
                <Container>
                <Form.Field>
                    <label>Configuration</label>
                    <input placeholder='Configuration' value={configuration} onChange={(e) => setConfiguration(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Link to="/ReadRefList"><Button type='annuler' color='red'>Annuler</Button></Link>
                <Button type='submit' color='green'>Update</Button>
                </Container>
            </Form>
        </div>
    )
}