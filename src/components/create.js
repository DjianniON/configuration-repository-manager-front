import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [configuration, setConfiguration] = useState('');
    const [test, setTest] = useState('');
    const postData = () => {
        console.log(configuration);
        console.log(test);
    }
    return(
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nom de la configuration</label>
                    <input placeholder='Configuration' onChange={(e) => setConfiguration(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Test</label>
                    <input placeholder='Test' onChange={(e)=> setTest(e.target.value)}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
