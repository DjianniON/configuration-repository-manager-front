import React from 'react';
import { List, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ObjetsList(props) {
    let objet = props.objet;
    return (
        <List.Item>
            <Icon name='caret right' />
            <List.Content>
                <List.Header>
                    {objet.nom}
                    <List.Content floated="right">
                        <span onClick={() => props.deleteObjet(objet)}>
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
                {objet.objets ?
                    <List.List>
                        {objet.objets.map(enfant => <ObjetsList key={enfant.id} objet={enfant}  deleteObjet={props.deleteObjet} />)}
                    </List.List> : null}
            </List.Content>
        </List.Item>
    )
}

