import React from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


export default function ParaForm(props) {
    let navigation = useNavigate();
    let onSubmit = (e) => {
        e.preventDefault();
        props.operation();
    }


    return (
        <Form onSubmit={onSubmit}>
            <Form.Field required>
                <label>Nom</label>
                <input placeholder='Nom' value={props.nom} onChange={(e) => props.setNom(e.target.value)} required />
            </Form.Field>
            <Form.Field>
                <label>Type</label>
                <TextArea placeholder='Type' value={props.typePara} onChange={(e) => props.setType(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Valeur</label>
                <TextArea placeholder='Valeur' value={props.valeur} onChange={(e) => props.setValeur(e.target.value)} />
            </Form.Field>
            <Button type='submit' color='green'>{props.type === "update" ? "Mettre à jour" : "Créer"}</Button>
            <Button type='button' onClick={() => navigation(-1)} color='red'>Annuler</Button>
        </Form>
    )
}

