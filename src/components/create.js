import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => (
    <Form>
        <Form.Field>
            <label>Nom de la configuration</label>
            <input placeholder='Configuration' />
        </Form.Field>
        <Form.Field>
            <label>Test</label>
            <input placeholder='Test' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default Create;
