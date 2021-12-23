import React from 'react';
import { List, Icon, Label, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ObjetsList(props) {
    let objet = props.objet;
    return (
        <List.Item key={objet.id}>
            <Icon name='caret right' />
            <List.Content>
                <List.Header>
                    {objet.nom}
                    <List.Content floated="right">
                        <span onClick={() => props.delete(objet.id)}>
                            <Icon link name='close' />
                        </span>
                    </List.Content>
                    <List.Content floated="right">
                        <Link to={`${objet.id}/edit`}>
                            <Icon link name='edit' />
                        </Link>
                    </List.Content>
                    <List.Content floated="right">
                        <Link to={`${objet.id}`}>
                            <Icon link name='eye' />
                        </Link>
                    </List.Content>
                </List.Header>
                <List.Description>{objet.description}</List.Description>
                <Divider />
                {objet.objetsEnfants ? objet.objetsEnfants.map(enfant => <List.List><ObjetsList objet={enfant} /></List.List>) : null}
            </List.Content>
        </List.Item>
    )
}

