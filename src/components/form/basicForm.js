import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


export default function BasicForm(props) {
    let navigation = useNavigate(); 
    let onSubmit = (e) => {
        e.preventDefault();
        props.operation();
    }


    return (
        <Form onSubmit={onSubmit}>
            <Form.Field required>
                <label>Nom</label>
                <input placeholder='Nom' value={props.nom} onChange={(e) => props.setNom(e.target.value)} required/>
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <TextArea placeholder='Description' value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
            </Form.Field>
            <Button type='submit' color='green'>{props.type === "update" ? "Mettre à jour" : "Créer" }</Button>
            <Button onClick={() => navigation(-1)} color='red'>Annuler</Button>
    </Form>
    )
}

