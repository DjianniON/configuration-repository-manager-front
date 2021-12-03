import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Update() {
    const [configuration, setFirstName] = useState('');
    const [test, setLastName] = useState('');

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Configuration</label>
                    <input placeholder='configuration' onChange={(e) => setConfiguration(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Test</label>
                    <input placeholder='test' onChange={(e) => setTest(e.target.value)}/>
                </Form.Field>
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}