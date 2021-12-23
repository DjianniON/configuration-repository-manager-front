import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ObjetsTable(props) {
    let objet = props.objet;
    return (
        <Table.Row key={objet.id}>
            <Table.Cell>{objet.nom}</Table.Cell>
            <Table.Cell>
                <Link to={`../../${objet.id}`}>
                    <Icon link name='eye' />
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Link to={`../../${objet.id}/edit`}>
                    <Icon link name='edit' />
                </Link>
            </Table.Cell>
            <Table.Cell>
                <span onClick={() => props.delete(objet.id)}>
                    <Icon link name='close' />
                </span>
            </Table.Cell>
        </Table.Row>
    )
}