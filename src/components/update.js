import React, {useEffect, useState } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';

export default function Update() {
    const [configuration, setConfiguration] = useState('');
    const [test, setTest] = useState('');
    useEffect(() => {
        setConfiguration(localStorage.getItem('configuration'));
        setTest(localStorage.getItem('test'));
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
                    <label>Test</label>
                    <input placeholder='Test' value={test} onChange={(e) => setTest(e.target.value)}/>
                </Form.Field>
                <Button type='annuler' color='red'>Annuler</Button>
                <Button type='submit'>Update</Button>
                </Container>
            </Form>
        </div>
    )
}