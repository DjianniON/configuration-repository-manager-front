import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function BasicForm(props) {
    let onSubmit = (e) => {
        e.preventDefault();
        props.operation();
    }
        
        

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field required>
                <label>Nom</label>
                <input placeholder='Nom de la configuration' value={props.nom} onChange={(e) => props.setNom(e.target.value)} required/>
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <TextArea placeholder='Description' value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
            </Form.Field>
            <Button type='submit' color='green'>{props.type === "update" ? "Mettre à jour" : "Créer" }</Button>
            <Link to="../"><Button color='red'>Annuler</Button></Link>
    </Form>
    )
}

