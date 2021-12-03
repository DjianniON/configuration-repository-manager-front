import React, {useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

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
                <Form.Field>
                    <label>Configuration</label>
                    <input placeholder='configuration' value={configuration} onChange={(e) => setConfiguration(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Test</label>
                    <input placeholder='test' value={test} onChange={(e) => setTest(e.target.value)}/>
                </Form.Field>
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}