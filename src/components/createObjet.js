import React, {useState} from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'

export default function Create() {
    const [objet, setObjet] = useState('');
    const [description, setDescription] = useState('');
    const postData = () => {
        console.log(objet);
        console.log(description);
    }
    return(
        <div>
            <Container>
            <Form className="create-form">
                <Form.Field>
                    <label>Nom de l'objet</label>
                    <input placeholder='Objet' onChange={(e) => setObjet(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' onChange={(e)=> setDescription(e.target.value)}/>
                </Form.Field>
                <Button type='annuler' color='red'>Annuler</Button>
                <Button type='creer'>Créer</Button>
            </Form>
            </Container>
        </div>
    )
}
